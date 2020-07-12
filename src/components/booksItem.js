import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'
import db from '../firebase'

function BooksItem({book}) {
  return (
    <div className='my-4 shadow p-3 bg-white rounded d-flex align-items-center justify-content-between'>
      <div>
        <p className='font-weight-bold'>{book.title}</p>
        <p>{book.author}</p>
      </div>
      <div className='d-flex'>
        <h4>
          <FaTrash
            color='red'
            className='mr-3'
            onClick={e => db.collection('books').doc(book.id).delete()}
          />
        </h4>
        <h4>
          <FaEdit className='text-primary' />
        </h4>
      </div>
    </div>
  )
}

export default BooksItem
