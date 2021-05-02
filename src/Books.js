import { Component } from 'react';
import Search from './SearchForm';
import BookList from './BookList';
import superagent from 'superagent';

class Books extends Component{

  constructor(props){    {/* List of State object for Books Component */}
     super(props);
     this.state = {
       books: [],
       searchField: '',
       sort: ''
     }
  }

  searchBook = (e) => {       {/* Getting data from API and passing to a local state object */}
    e.preventDefault();          
    superagent
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({q: this.state.searchField })
      .then((data) => {
         const requestData = this.replaceData(data)
         this.setState({ books: requestData })
      })
  }

  handleSearch = (e) => {        {/* Arrow function that collects values from form input */}   
    this.setState({ searchField: e.target.value }) 
  } 
                  
  handleSort = (e) => {
    this.setState({ sort: e.target.value })
  }

  replaceData = (data) => {    {/* This function is called when a published date is empty and will be initialized with '0000' to sort date. */}
    const replacedData = data.body.items.map((book) => {
       if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {
          book.volumeInfo['publishedDate'] = '0000' ;
       }   {/* This condition is to implement a No Image Available image for thumbnail that is false or empty.  */}               
       if(book.volumeInfo.hasOwnProperty('imageLinks') === false) {
          book.volumeInfo['imageLinks'] = { thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' };
       }
       
       return book;
     })

    return replacedData;
  }

  render(){          {/* This condition is for the sorting order of title and published date */}
    const sortedBooks = this.state.books.sort((a, b) => {
      if(this.state.sort === 'Newest'){
        return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
      }
      else if(this.state.sort === 'Oldest'){
        return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
      }
      else if(this.state.sort === 'A-Z'){
         return b.volumeInfo.title < a.volumeInfo.title;
      }
      else if(this.state.sort === 'Z-A'){
         return a.volumeInfo.title < b.volumeInfo.title;
    }
   })

    return (    /* This component will be called for input forms and passing the value to component booklist after data has been collect and sort */
      <div>
         <Search searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} handleSubmit={this.handleSubmit}/>    
         <BookList books={sortedBooks}/>
      </div>
    );
  }
}

export default Books
