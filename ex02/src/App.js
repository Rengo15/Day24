import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';

class App extends Component{
  setMyStorage = () => {
    document.cookie = "year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };
  getMyStorage = () => {
    const myCookieData = document.cookie;
    const myLocalStorageData = localStorage.getItem("Paragon");
    const mySessionStorageDate = sessionStorage.getItem("frontend");
    console.log(myCookieData, myLocalStorageData, mySessionStorageDate);
  };
  render(){
    return(
      <div className="App">
        <button onClick={this.setMyStorage}>Set my storage</button>
        <button onClick={this.getMyStorage}>Get my storage</button>
      </div>
    );
  }
}
export default App;
