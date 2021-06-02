import React from 'react';

const BookCard = (props) => {
    return (
        <div className="book-card">
              <a href={props.infolink} target="_blank" alt="Redirect link to Google Play Books">
                <img src={props.image} alt="Book thumbnail cover"/>  
              </a>
              <div className="desc">                 
                <p><b>Title:</b> {props.title}</p>           
                <p><b>Author:</b> {props.author} </p>  
                <p><b>Published Data:</b> {props.published}</p>
              </div>
        </div>
    )
}

export default BookCard
