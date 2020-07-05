import React, { useState, useEffect, useContext } from 'react';
import API from '../API';
import BooksItem from './booksItem';
import Context from "../stateProvider";

export const BooksList = () => {
    // const [books, setBooks] = useState([]);
    const [state, dispatch] = useContext(Context);

    // useEffect(() => {
    //     API.getBooks().then(books => {
    //         setBooks(books)
    //         console.log(books);
    //     });
    // }, [])

    return (
        <>
            {state.booksList.map((book, i) =>
                <BooksItem key={i} book={book} />
            )}
        </>
    );
};