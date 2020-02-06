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
                <BookSelector bookShelf={props.book.shelf}/>
            </div>
            <div className="book-title">To Kill a Mockingbird</div>
            <div className="book-authors">Harper Lee</div>
        </div>
    )
} 

export default Book;