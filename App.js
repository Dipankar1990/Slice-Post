import React from 'react';
import './App.css';
import ShowPost from './Component/ShowPost';
import RbootSrap from './Component/RbootSrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button as Afsg, } from 'react-bootstrap'



function App() {
  return (
    <div className="App">
      {/* <ShowPost/> */}
      <RbootSrap/>
      <Afsg variant="primary">Primary</Afsg>
    </div>
  );
}

export default App;
