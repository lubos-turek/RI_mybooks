import React from 'react'
import { Link } from 'react-router-dom'

import Shelf from './components/Shelf'

const Home = ({ savedBooks, getBooks }) => {
  const currentlyReadingBooks = savedBooks.filter(book => book.shelf === 'currentlyReading')
  const wantToReadBooks = savedBooks.filter(book => book.shelf === 'wantToRead')
  const readBooks = savedBooks.filter(book => book.shelf === 'read')

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelf title='Currently Reading' shelfBooks={currentlyReadingBooks} getBooks={getBooks} />
        <Shelf title='Want To Read' shelfBooks={wantToReadBooks} getBooks={getBooks} />
        <Shelf title='Read' shelfBooks={readBooks} getBooks={getBooks} />
      </div>
      <div className="open-search">
        <Link to='/search'>
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
