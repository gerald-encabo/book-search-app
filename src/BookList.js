import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
    return (
        <div className="BookGroup">
           <div className="book-list">   
           { 
               props.books.map((books, count) => {
                return <BookCard
                           key={count} 
                           image={books.volumeInfo.imageLinks.thumbnail}
                           title={books.volumeInfo.title}
                           author={books.volumeInfo.authors}
                           published={books.volumeInfo.publishedDate}
                       />
               })
           }
           </div>
        </div>
    )
}

export default BookList