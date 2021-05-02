import { Component } from 'react';
import Header from './Header';
import Books from './Books';

class App extends Component{

  render(){
    return (
      <div className="App">
        {/* Two components will be called throughout the process */}
        <Header />
        <Books />
      </div>
    );
  }
}

export default App
