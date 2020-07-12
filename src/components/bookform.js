import React, {useState, useContext} from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap'
import {BookContext} from '../stateProvider'
import db from '../firebase'
import firebase from 'firebase'

const BookForm = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    db.collection('books').add({
      title: book.title,
      author: book.author,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  return (
    <div className='m-3'>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Book Name'
                onChange={e => setBook({...book, title: e.target.value})}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type='text'
                placeholder='Auth'
                onChange={e => setBook({...book, author: e.target.value})}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant='dark' type='submit'>
          Add book
        </Button>
      </Form>
    </div>
  )
}

export default BookForm
