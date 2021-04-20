import React, { Component } from "react";
import './App.css';
import {Front} from "./Components/Front";
import {UrbanExplorer} from "./Components/UrbanExplorer";
import {Survival} from "./Components/SurvivalKit";
import {CompletedMap} from "./Components/CompletedMap";
import {Stats} from "./Components/Stats";
import {DetailedMap} from "./Components/DetailedMap";

class App extends Component {
    render() {
        return (
          <div className="App">
              <Front/>
              <UrbanExplorer/>
              <Survival/>
              <CompletedMap/>
              <DetailedMap/>
              <Stats/>
          </div>
      );
    }
}

export default App
