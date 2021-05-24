import React from 'react';
import BookCard from './BookCard';

const BookList = (sortedBooks) => {
    return (
        <div className="BookGroup">
           <div className="book-list">   
           { 
               sortedBooks.books.map((books, count) => {
                return <BookCard
                           key={count} 
                           image={books.volumeInfo.imageLinks.thumbnail}
                           title={books.volumeInfo.title}
                           author={books.volumeInfo.authors}
                           published={books.volumeInfo.publishedDate}
                           infolink={books.volumeInfo.infoLink}
                       />
               })
           }
           </div>
        </div>
    )
}

export default BookList