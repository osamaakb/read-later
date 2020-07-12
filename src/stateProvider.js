import React, {useState, createContext, useEffect} from 'react'
import db from './firebase'

export const BookContext = createContext({})

export default function BookProvider(props) {
  const [books, setBooks] = useState([{title: 'ashabs'}])

  useEffect(() => {
    db.collection('books').onSnapshot(snapshot => {
      //   console.log(
      //     snapshot.docs.map(doc => {
      //       const arrObj = doc.data()
      //       return {...arrObj, id: doc.id}
      //     })
      //   )
      setBooks(
        snapshot.docs.map(doc => {
          const arrObj = doc.data()
          return {...arrObj, id: doc.id}
        })
      )
    })
  }, [])

  return <BookContext.Provider value={[books, setBooks]}>{props.children}</BookContext.Provider>
}
