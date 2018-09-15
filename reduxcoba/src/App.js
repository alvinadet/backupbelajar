import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './Redux/reducer';

class App extends Component {
  componentDidMount() {
    console.log(store.getState().number);
  }

  addData = () => {
    store.dispatch({
      type: 'PLUS'
    });
  };
  minusData = () => {
    store.dispatch({
      type: 'MINUS'
    });
  };

  handleChange = () => {
    store.dispatch({
      type: 'Change'
    });
  };
  render() {
    const number = store.getState().number;
    const huruf = store.getState().huruf;
    return (
      <div className="App">
        <p>{number}</p>
        <button
          onClick={() => {
            this.addData();
          }}>
          Tambah
        </button>
        <button
          onClick={() => {
            this.minusData();
          }}>
          Kurang
        </button>
        <input onChange={this.handleChange} value={huruf} />
      </div>
    );
  }
}

export default App;
