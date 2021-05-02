import React from 'react'

const BookCard = (props) => {
    return (
        <div className="book-card">
            <img src={props.image} alt="thumbnail"/>  
              <div className="desc">                  {/* Gather data from API assign to HTML */}  
                <p><b>Title:</b> {props.title}</p>           
                <p><b>Author:</b> {props.author}</p>  
                <p><b>Published Date:</b>    {/* If the published date contain '0000', the string will be replaced by 'Not Available' */}
                     {
                        props.published === '0000'  
                          ? 'Not Available' 
                          : props.published.substring(0,4)
                     }
                </p>
              </div>
        </div>
    )
}

export default BookCard
