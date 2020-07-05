import React, { useState, useEffect } from 'react';
import API from './API';
import BooksItem from './booksItem';

export const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        API.getBooks().then(books => {
            setBooks(books)
            console.log(books);

        });
    }, [])

    return (
        <>
            {books.map(book =>
                <BooksItem book={book} />
            )}
        </>
    );
};