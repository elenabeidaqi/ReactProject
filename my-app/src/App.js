import React, {Component} from "react";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Products from './components/Products';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';
class App extends Component{
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/" element={<Landing/>}/>
        </Routes>
        <Footer/>
      </div>

    )
  }
}

export default App;
