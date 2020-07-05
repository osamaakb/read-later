import { db } from '../firebase'

class API {

    static addBook = (book) => {
        db.collection('books').add(book);
    }

    static getBooks = () => {
        return new Promise((resolve, reject) => {
            db.collection('books').onSnapshot(snapshot => {
                const allBooks = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                resolve(allBooks);
            });
        })
    }

    static deleteBook = (book) => {
        db.collection('books')
            .doc(book.id)
            .delete();
    }

}

export default API;