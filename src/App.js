import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './pages/Search'
import Home from './pages/Home'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
