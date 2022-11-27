import React, {useState, useEffect} from "react";
import customTheme from "./themC";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import Navbar from ;
import {Switch, Route} from "react-router-dom";
import Home from "./";
import About;
import Projects;
import ScrollToTop;

const theme = extendTheme(customeTheme);

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
