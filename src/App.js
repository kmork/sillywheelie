import React, { Component } from "react";
import './App.css';
import {Front} from "./Components/Front";
import {UrbanExplorer} from "./Components/UrbanExplorer";
import {Survival} from "./Components/SurvivalKit";
import {CompletedMap} from "./Components/CompletedMap";
import {Stats} from "./Components/Stats";
import {RoadsCompleted} from "./Components/RoadsCompleted";
import {Roads} from "./Components/Roads";
import {Trailer} from "./Components/Trailer";

class App extends Component {
    render() {
        return (
          <div className="App">
              <Front/>
              <UrbanExplorer/>
              <Trailer/>
              <Survival/>
              <CompletedMap/>
              <Stats/>
              <RoadsCompleted/>
              <Roads/>
          </div>
      );
    }
}

export default App
