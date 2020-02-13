import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchResults extends Component {

    static proptypes = {
        searchedBooks: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="search-books-results">
                {this.props.searchedBooks.length === 0 ? 
                (<span>No Search Results</span>) :
                (<ol className="books-grid">{this.props.searchedBooks.map((book) =>
                    (<li key={book.id}>
                        <Book
                        book={book}
                        updateBook={this.props.updateBook}
                        />
                    </li>)
                )}</ol>)}
            </div>
        )
    }
}

export default SearchResults


