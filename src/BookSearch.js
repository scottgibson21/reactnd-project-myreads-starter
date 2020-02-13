import React, { Component } from 'react'
import SearchBar from './SearchBar'
import * as BooksAPI from './BooksAPI'
import SearchResults from './SearchResults'
import PropTypes from 'prop-types'

class BookSearch extends Component {

    static propTypes = {
        updateBook: PropTypes.func.isRequired
    }

    state = {
        searchedBooks: []
    }

    queryBooks = (query) => {
        BooksAPI.search(query)
            .then((searchedBooks) => {
                this.setState({
                    searchedBooks
                })
            })
      }

    render() {
        return (
            <div className="search-books">
                <SearchBar queryBooks={this.queryBooks}/>
                <SearchResults searchedBooks={this.state.searchedBooks} updateBook={this.props.updateBook}/>
            </div>
        )
    }
}

export default BookSearch

