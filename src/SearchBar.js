import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchOptions from './SearchOptions'

class SearchBar extends Component {

    render() {
        return (
            <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <SearchOptions queryBooks={this.props.queryBooks}/>
            </div>
        )
    }
}

export default SearchBar