import React from 'react'
import Book from '../../../components/Book'

const Shelf = ({ title, shelfBooks, getBooks }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ title }</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        { shelfBooks.map(book => <li key={book.id}><Book bookInfo={book} getBooks={getBooks} /></li>) }
      </ol>
    </div>
  </div>
)

export default Shelf
