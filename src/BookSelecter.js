import React from 'react'

function BookSelector(props) {

    const handleChange = (event) => {
        console.log("calling update book!");
        props.updateBook(props.book, event.target.value)
    }

    return (
        <div className="book-shelf-changer" onChange={handleChange}>
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