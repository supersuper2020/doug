import React, { Component } from 'react';
//import React from 'react';
import logo from './logo.svg';
import './App.css';
import greet from './components_me/greet';
import BoolAndCount from './components_me/BoolAndCount';
import ImgTest from './components_me/ImgTest';
import ArrayTest from './components_me/ArrayTest';
import Empty from './components_me/Empty';
import FixedToolBar from './components_me/FixedToolBar';
import MyTimer from './components_me/MyTimer';
import InputRef from './components_me/InputRef';
//import BoolAndCount from './components_me/BoolAndCount';
//import BoolAndCount from './components_me/BoolAndCount';

//MyTimer



//rconst rce <<< shortcuts

class App extends Component {
  constructor() {
    super();
    this.state = { };
  }

  /**  <Hello name={this.state.name} />*/
render() {return (
<div>
<FixedToolBar/>
<MyTimer/>
<InputRef/>

  {/* <ArrayTest/> */}
  {/* <span>--BoolAndCount--</span><BoolAndCount/> */}
  {/* <span>--ImgTest--</span>     */}
  {/* <ImgTest/>             */}
</div>
);}}
//React.createElement('div',null,'sdfsadfd');

export default App;
