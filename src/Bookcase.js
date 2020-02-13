import React, { Component } from 'react';
import Bookshelf from './BookShelf';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Bookcase extends Component{

    static propTypes = {
      shelves: PropTypes.array.isRequired,
      books: PropTypes.array.isRequired,
      updateBook: PropTypes.func.isRequired
    }

    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {this.props.shelves.map(s => 
                  <Bookshelf 
                  key={s.id}
                  shelfName={s.displayName} 
                  books={this.props.books.filter(book => book.shelf === s.id)}
                  updateBook={this.props.updateBook}
                  />
              )}
            </div>
            <div className="open-search">
              <Link to='/Search'>Add a book</Link>
            </div>
          </div>
        )
    }
}

export default Bookcase;