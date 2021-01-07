import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './pages/Search'
import Home from './pages/Home'

const BooksApp = () => {
  const [savedBooks, setSavedBooks] = useState([])

  const getBooks = () => { BooksAPI.getAll().then(res => setSavedBooks(res))}
  useEffect(getBooks, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact render={() => <Home savedBooks={savedBooks} getBooks={getBooks} />} />
          <Route path="/search" render={() => <Search savedBooks={savedBooks} getBooks={getBooks} />} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default BooksApp
