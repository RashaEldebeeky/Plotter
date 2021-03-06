import './App.css';
import React from "react";
import Sidebar from './sidebar/sidebar';
import Display from './display/display';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="header-container">
          <h1 className="title">Plotter</h1>
          <div className="light-blue"></div>
        </div>
        <Sidebar />
        <Display />
        <div className="footer-container">
          <div className="light-blue">
            <p>Plotter developed by Rasha Eldebeeky</p>
          </div>
        </div>
      </div>
    );
  }
}
