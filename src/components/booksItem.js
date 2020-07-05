import React from 'react';
import { FaTrash } from 'react-icons/fa';
import API from './API';


function BooksItem({ book }) {

    const handleDelete = (e) => {
        e.preventDefault();
        API.deleteBook(book)
    }

    return (
        <div className="my-4 shadow p-3 bg-white rounded d-flex align-items-center justify-content-between">
            <div>
                <p className="font-weight-bold">{book.title}</p>
                <p>{book.author}</p>
            </div>
            <div>
                <FaTrash color="red" onClick={handleDelete} />
            </div>
        </div>
    );
}

export default BooksItem;