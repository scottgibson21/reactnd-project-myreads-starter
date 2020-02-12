import React, { Component } from 'react'
import Book from './Book'

class SearchResults extends Component {

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


