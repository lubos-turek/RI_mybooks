import React from 'react'
import * as BooksAPI from '../BooksAPI'

const Book = ({ bookInfo, savedBooks, getBooks }) => {
  const changeShelf = (event) => {
    const shelf = event.target.value
    BooksAPI.update(bookInfo, shelf).then(getBooks)
  }

  const shelf = bookInfo.shelf || (savedBooks.find(b => b.id === bookInfo.id) || {}).shelf || 'none'

  return (
    <div className="book">
      <div className="book-top">
        { bookInfo.imageLinks && bookInfo.imageLinks.smallThumbnail && <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                'url("' + bookInfo.imageLinks.smallThumbnail + '")',
            }}
          />
        }
        <div className="book-shelf-changer">
          <select value={shelf} onChange={changeShelf} >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      { bookInfo.title && <div className="book-title">{bookInfo.title}</div> }
      { bookInfo.authors && <div className="book-authors">{bookInfo.authors.join(', ')}</div> }
    </div>
  )
}

export default Book
