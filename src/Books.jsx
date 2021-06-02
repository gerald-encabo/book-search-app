import React, { Component } from 'react';
import BookList from './BookList';
import Navbar from './Navbar';
import superagent from 'superagent';

class Books extends Component{

  constructor(props){    
     super(props);
     this.state = {
       books: [],
       searchField: '',
       sort: ''
     }
  }

  searchBook = (e) => {      
    e.preventDefault();          
    superagent
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({q: this.state.searchField })
      .then((data) => {
         console.log(data);
         const requestData = this.replaceData(data)
         this.setState({ books: requestData })
      })
  }

  handleSearch = (e) => { this.setState({ searchField: e.target.value }) } 
                  
  handleSort = (e) => { this.setState({ sort: e.target.value }) }

  replaceData = (data) => {    
    const replacedData = data.body.items.map((book) => {
       if(book.volumeInfo.hasOwnProperty('authors') === false) {
         book.volumeInfo['authors'] = 'Not Available' ;
       } 
       if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {
          book.volumeInfo['publishedDate'] = 'Not Available' ;
       }                 
       if(book.volumeInfo.hasOwnProperty('imageLinks') === false) {
          book.volumeInfo['imageLinks'] = { thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png' };
       } 
       return book;
     })

    return replacedData;
  }
 
  render(){   

   const sortedBooks = this.state.books.sort((a, b) => {
      if(this.state.sort === 'Newest'){
         return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4));
      } else if(this.state.sort === 'Oldest'){
         return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4));
      } else if(this.state.sort === 'A-Z'){
         return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      } else if(this.state.sort === 'Z-A'){
         return b.volumeInfo.title.localeCompare(a.volumeInfo.title);
      }
   })

   return (  
      <div>
         <Navbar searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} handleSubmit={this.handleSubmit}/>    
         <BookList books={sortedBooks}/>
      </div>
    );
  }
}

export default Books
