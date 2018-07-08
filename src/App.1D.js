import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

      <div className="wrapper">    
        <SaveFullName name='Radik' username='Shaymardanov' link='vk.com' />
        <SaveFullName name='Anna' username='Kamneva' link='facebook.com' />
        <SaveFullName name='Rad' username='Shaymardanov' link='#' />
      </div>
    );
  }
}


function SaveFullName(props) {
  return (
    <div>
      <h1> Мое Имя {props.name}, фамилия - {props.username}</h1>
      <a href={props.link}> Ссылка на мой профиль </a>  
      </div>
    );
  }
  
  
// function Hello() {
//   let phrase = "World"
//   return (
//     <h1> Hello {phrase} </h1>
//     // <h1> Hello {4+5} </h1>
//     );
// }
  
// function MeetAll () {
//   return (
//       <div>    
//         <SaveFullName name='Radik' username='Shaymardanov' link='vk.com' />
//         <SaveFullName name='Anna' username='Kamneva' link='facebook.com' />
//         <SaveFullName name='Rad' username='Shaymardanov' link='#' />
//       </div>

//     );
// }


export default App;
