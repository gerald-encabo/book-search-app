import { Component } from 'react';
import Books from './Books';
import './App.scss';

class App extends Component{

  render(){
    return (
      <div className="App">
         <Books />
      </div>
    );
  }
}

export default App
