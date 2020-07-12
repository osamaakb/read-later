import React, {useState} from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'
import db from '../firebase'
import {Modal, Button, Form} from 'react-bootstrap'

function BooksItem({book}) {
  const [show, setShow] = useState(false)
  const [input, setInput] = useState({
    title: book.title,
    author: book.author,
  })

  console.log(book)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function updateBook() {
    db.collection('books').doc(book.id).set(
      {
        title: input.title,
        author: input.author,
      },
      {merge: true}
    )
    handleClose()
  }

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
          <FaEdit className='text-primary' onClick={handleShow} />
        </h4>
      </div>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update book </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='email'
                value={input.title}
                onChange={e => setInput({...input, title: e.target.value})}
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type='text'
                value={input.author}
                onChange={e => setInput({...input, author: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={updateBook}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default BooksItem
