import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch'
import Bookcase from './Bookcase'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  shelves = [
    {
      id: "wantToRead",
      displayName: "Want to Read"
    }, {
      id: "currentlyReading",
      displayName: "Currently Reading"
    }, {
      id: "read",
      displayName: "Read"
    }];

  updateBook = (book, shelfId) => {
    BooksAPI.update(book, shelfId)
      .then(() => {
        BooksAPI.getAll()
          .then(books => {
            this.setState({ books })
          })
      })
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route path='/Search' render={() => (
          <BookSearch updateBook={this.updateBook} />
        )} />
        <Route exact path='/' render={({ history }) => (
          <Bookcase
            shelves={this.shelves}
            books={this.state.books}
            updateBook={(book, shelfId) => {
              this.updateBook(book, shelfId)
              history.push('/')
            }} />
        )} />
      </div>
    )
  }
}

export default BooksApp
