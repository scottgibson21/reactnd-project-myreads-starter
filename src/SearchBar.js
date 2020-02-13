import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchOptions from './SearchOptions'
import PropTypes from 'prop-types'

class SearchBar extends Component {

    static propTypes = {
        queryBooks: PropTypes.func.isRequired
    }

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