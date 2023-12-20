import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar.js'
import News from './Components/News.js'
//import NewsItem from './Components/NewsItem.js'

export default class App extends Component {

  render() {
    return (
      <>
        <div >
              <Navbar/>
        </div>
        <div>
              <News pageSize={6} country="in" category=""/>
              
        </div>
      </>
    )
  }
}

