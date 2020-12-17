import React, { useState, useContext } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import API from "../API";
import Context from "../stateProvider";

const BookForm = () => {
    const [book, setBook] = useState({
        title: '',
        author: ''
    })
    const [state, dispatch] = useContext(Context);


    const addBook = e => {
        setBook({ ...book, [e.target.id]: e.target.value });
    };

    const pushBook = e => {
        setBook({
            title: "",
            author: ""
        });

        e.preventDefault();
        dispatch({
            type: 'IS_LOADING',
            isLoading: true
        })
        API.addBook(book).then(doc => {
            API.getBooks().then(books => {
                dispatch({
                    type: 'SET_BOOKS',
                    booksList: books
                })
                dispatch({
                    type: 'IS_LOADING',
                    isLoading: false
                })
            })
        });
    }

  return (
    <div className="m-3">
      <Form onSubmit={pushBook}>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                onChange={addBook}
                value={book.title}
                id="title"
                type="text"
                placeholder="Book Name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Author</Form.Label>
              <Form.Control
                onChange={addBook}
                value={book.author}
                id="author"
                type="text"
                placeholder="Author"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="dark" type="submit">
          Add book
        </Button>
      </Form>
    </div>
  );
};
