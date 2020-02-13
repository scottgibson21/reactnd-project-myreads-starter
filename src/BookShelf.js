import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component{

    static propTypes={
      books: PropTypes.array.isRequired,
      updateBook: PropTypes.func.isRequired
    }

    render(){
        return(
            <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map(book => 
                        <li key={book.title}>
                            <Book 
                            book={book}
                            updateBook={this.props.updateBook}
                            />
                        </li>
                      )}
                    </ol>
                  </div>
                </div>
              </div>
        )
    }
}

export default Bookshelf;