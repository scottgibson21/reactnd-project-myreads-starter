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
        
        if(query === ''){
            this.setState({searchedBooks: []})
            return;
        }

        BooksAPI.search(query)
            .then((searchedBooks) => {
                if('error' in searchedBooks){
                    this.setState({searchedBooks: []})
                    return;
                }

                searchedBooks.map((book) => {
                    let existingBooks = this.props.books.filter(b => b.id === book.id);
                    
                    if(existingBooks.length === 0){
                        return;
                    }

                    book.shelf = existingBooks[0].shelf;
                })

                this.setState({
                    searchedBooks
                })
            })
      }

    render() {
        return (
            <div className="search-books">
                <SearchBar queryBooks={this.queryBooks}/>
                <SearchResults books={this.props.books} searchedBooks={this.state.searchedBooks} updateBook={this.props.updateBook}/>
            </div>
        )
    }
}

export default BookSearch

