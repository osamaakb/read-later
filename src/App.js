import React, { useContext, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from './components/navbar';
import BookForm from './components/bookform';
import { Container } from 'react-bootstrap';
import { BooksList } from './components/booksList';
import Context from './stateProvider'
import API from './API'
import Spinner from './components/spinner';



function App() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    dispatch({
      type: 'IS_LOADING',
      isLoading: true
    })
    API.getBooks().then(books => {
      dispatch({
        type: "SET_BOOKS",
        booksList: books
      })
      dispatch({
        type: 'IS_LOADING',
        isLoading: false
      })
    });
  }, [])


  return (
    <>
      <NavbarHeader />
      <Container >
        <BookForm />
        <hr />
        <h4>Your read later books</h4>
        {state.isLoading ? <Spinner variant="dark" /> :
          <BooksList />
        }
      </Container>
    </>
  );
}

export default App;
