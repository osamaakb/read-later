import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap'
import API from './API';

const BookForm = () => {

    const [book, setBook] = useState({
        title: '',
        author: ''
    })

    const addBook = e => {
        setBook({ ...book, [e.target.id]: e.target.value });
    };

    const pushBook = e => {
        e.preventDefault();
        API.addBook(book);
    }

    return (
        <div className="m-3">
            <Form onSubmit={pushBook}>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Book Name</Form.Label>
                            <Form.Control onChange={addBook} id="title" type="text" placeholder="Book Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Author</Form.Label>
                            <Form.Control onChange={addBook} id="author" type="text" placeholder="Auth" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="dark" type="submit">
                    Add book
  </Button>
            </Form>
        </div>
    );
}


export default BookForm;