import React, { Component } from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import {Front} from "./Components/Front";
import {UrbanExplorer} from "./Components/UrbanExplorer";
import {CompletedMap} from "./Components/CompletedMap";
import {Stats} from "./Components/Stats";

class App extends Component {
    render() {
        return (
          <div className="App">
              <Navbar/>
              <Front/>
              <UrbanExplorer/>
              <CompletedMap/>
              <Stats/>
          </div>
      );
    }
}

export default App
