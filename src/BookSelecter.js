import React from 'react'

function BookSelector(props) {

    const options = ["currentlyReading", "wantToReact", "read"]

    return (
        <div className="book-shelf-changer">
            <select defaultValue={props.bookShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookSelector;