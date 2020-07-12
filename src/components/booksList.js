import React, {useState, useEffect, useContext} from 'react'
import BooksItem from './booksItem'
import {BookContext} from '../stateProvider'

const BooksList = props => {
  const [books] = useContext(BookContext)
  return (
    <div>
      {books.map((book, index) => (
        <BooksItem key={index} book={book} />
      ))}
    </div>
  )
}

export default BooksList
