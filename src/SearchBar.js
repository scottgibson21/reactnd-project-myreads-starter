import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchOptions from './SearchOptions'
import PropTypes from 'prop-types'

class SearchBar extends Component {

    state = {
        query: 'Enter a Search Term'
    }

    static propTypes = {
        queryBooks: PropTypes.func.isRequired
    }

    handleSearchInput = (event) => {
        this.props.queryBooks(event.target.value)
        this.setState({
            query: event.target.value
        })
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" onChange={this.handleSearchInput} value={this.state.query}/>
                </div>
            </div>
        )
    }
}

export default SearchBar