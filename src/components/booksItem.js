import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import API from '../API';
import Context from "../stateProvider";


function BooksItem({ book }) {
    const [state, dispatch] = useContext(Context);

    const handleDelete = (e) => {
        e.preventDefault();
        API.deleteBook(book).then(doc => {
            let newBooksList = state.booksList.filter(a => a.id !== book.id)
            dispatch({
                type: 'SET_BOOKS',
                booksList: newBooksList
            })
        })
    }

    return (
        <div className="my-4 shadow p-3 bg-white rounded d-flex align-items-center justify-content-between">
            <div>
                <p className="font-weight-bold">{book.title}</p>
                <p>{book.author}</p>
                <p>{'Added on: ' + new Date(book.addedTime).toLocaleDateString('en-US')}</p>
            </div>
            <div>
                <FaTrash color="red" onClick={handleDelete} />
            </div>
        </div>
    );
}

export default BooksItem;