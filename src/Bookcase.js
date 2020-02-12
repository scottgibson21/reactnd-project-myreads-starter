import React, { Component } from 'react';
import Bookshelf from './BookShelf';
import { Link } from 'react-router-dom'

class Bookcase extends Component{

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