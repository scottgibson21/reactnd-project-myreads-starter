import React from 'react'
import BookSelector from './BookSelecter'
import PropTypes from 'prop-types'

function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
                <div 
                className="book-cover" 
                style={{ 
                    width: 128, 
                    height: 193, 
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: props.book.imageLinks === undefined ? 
                        `url('BookImage.png')` : `url(${props.book.imageLinks.smallThumbnail})`
                    }}
                ></div>
                <BookSelector 
                bookShelf={props.book.shelf}
                updateBook={props.updateBook}
                book={props.book}
                />
            </div>
            <div className="book-title">{props.book.title === undefined ? "No title found" : props.book.title}</div>
            <div className="book-authors">{props.book.authors === undefined ? "no authors listed" : props.book.authors.join(", ")}</div>
        </div>
    )
} 

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default Book;