import React from 'react'
import PropTypes from 'prop-types'

function BookSelector(props) {

    const handleChange = (event) => {
        props.updateBook(props.book, event.target.value)
    }

    const currentShelf = props.bookShelf === undefined ? "move" : props.bookShelf;

    return (
        <div className="book-shelf-changer" onChange={handleChange}>
            <select defaultValue={currentShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="wantToRead">Want To Read</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

BookSelector.propTypes = {
    book: PropTypes.object.isRequired,
    bookShelf: PropTypes.string.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default BookSelector;