import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';

class App extends Component{
  setMyStorage = () => {
    document.cookie = "year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React")
  }
  render(){
    return(
      <div className="App">
        <button onClick={this.setMyStorage}>Set my storage</button>
      </div>
    );
  }
}
export default App;
