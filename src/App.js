import './App.css';
import {GoGlobe} from "react-icons/go"
import {ImLocation} from "react-icons/im"
import data from "./pages/data"
import Input from "./pages/Input"
import {Route, Routes} from "react-router-dom"
import {Link} from "react-router-dom"
import React from 'react';
import Main from "./pages/Main"
import Test from "./pages/Test"

 
function App() {
  return (
   <div className="App">
    <Header />
    
    <Routes> 
        <Route exact path="/" element={<Main />}/>
        <Route path="/Input" element={<Input/>}/>
        <Route path="/Test" element={<Test/>}/>
    </Routes>
    
    </div>
  );
}

function Header(){
  return(
    <div className="header">
      
      <h1><GoGlobe />my travel journal</h1>
    </div>
  )
}

function Navbar(){
  return(
    <div>
      <Link to="/Input">
        <button className="btn">Create new</button>
      </Link>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
      <Link to="/Test">
        <button className="btn">Test</button>
      </Link>
      
    </div>
  )
}






export default App;

