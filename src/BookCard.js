import React from 'react'

const BookCard = (props) => {
    return (
        <div className="book-card">
            <img src={props.image} alt="thumbnail"/>
            <div className="desc">
                <p><b>Title:</b> {props.title}</p>
                <p><b>Author:</b> {props.author}</p>
                <p><b>Published Date:</b> {props.published === '0000' ? 'Not Available' : props.published.substring(0,4)}</p>
            </div>
        </div>
    )
}

export default BookCard
