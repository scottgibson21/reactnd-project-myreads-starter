import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './Bookcase'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  shelves = [{
    id: "currentlyReading",
    displayName: "Currently Reading"
  },{
    id: "wantToRead",
    displayName: "Want to Read"
  },{
    id: "read",
    displayName: "Read"
  }];

  updateBook = (book, shelfId) => {
    BooksAPI.update(book, shelfId)
    .then(() => {
        BooksAPI.getAll()
        .then(bananas => {
          this.setState({ bananas })
        })
      })
  }

  componentDidMount(){
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
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <Bookcase shelves={this.shelves} books={this.state.books} updateBook={this.updateBook}/>
        )}
      </div>
    )
  }
}

export default BooksApp
