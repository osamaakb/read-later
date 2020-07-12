import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarHeader from './components/navbar'
import BookForm from './components/bookform'
import {Container} from 'react-bootstrap'
import BookProvider from './stateProvider'
import BooksList from './components/booksList'

function App() {
  return (
    <>
      <BookProvider>
        <NavbarHeader />
        <Container>
          <BookForm />
          <hr />
          <h4>Your read later books</h4>
          <BooksList />
        </Container>
      </BookProvider>
    </>
  )
}

export default App
