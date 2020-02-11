import React, { Component } from 'react';
import Bookshelf from './BookShelf';

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
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )
    }
}

export default Bookcase;