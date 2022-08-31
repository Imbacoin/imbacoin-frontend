import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WrapperMain from './views/FunctionPage';
import Orders from './views/Orders';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<WrapperMain />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    );
  }
}
