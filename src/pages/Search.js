import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../BooksAPI'
import Book from '../components/Book'

const Search = ({ getBooks, savedBooks }) => {
  const [searchFor, setSearchFor] = useState('')
  const [searchedBooks, setSearchedBooks] = useState([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(searchFor !== '') {
        BooksAPI.search(searchFor).then((res) => {
          if(res.error) {
            setSearchedBooks([])
          } else {
            setSearchedBooks(res)
          }
        })
      } else {
        setSearchedBooks([])
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [searchFor])

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/'>
          <button className="close-search">
            Close
          </button>
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={(e) => setSearchFor(e.target.value)} />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          { searchedBooks.map(book => <li key={book.id}><Book bookInfo={book} getBooks={getBooks} savedBooks={savedBooks} /></li>) }
        </ol>
      </div>
    </div>
  )
}

export default Search
