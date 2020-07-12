import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA7bBztomNgglpy8J3nRdYN4CIg_tOj4a8',
  authDomain: 'book-tracker20.firebaseapp.com',
  databaseURL: 'https://book-tracker20.firebaseio.com',
  projectId: 'book-tracker20',
  storageBucket: 'book-tracker20.appspot.com',
  messagingSenderId: '604684490013',
  appId: '1:604684490013:web:ef47f5851ecc804ef27df4',
  measurementId: 'G-HNQFNRHGPV',
})

const db = firebaseApp.firestore()
export default db
