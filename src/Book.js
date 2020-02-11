import React from 'react'
import BookSelector from './BookSelecter'

function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
                <div 
                className="book-cover" 
                style={{ 
                    width: 128, 
                    height: 193, 
                    backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`
                    }}
                ></div>
                <BookSelector 
                bookShelf={props.book.shelf}
                updateBook={props.updateBook}
                book={props.book}
                />
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors.join(", ")}</div>
        </div>
    )
} 

export default Book;