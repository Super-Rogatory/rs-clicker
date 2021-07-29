import React, { Component } from "react";
import MainScreen from "./MainScreen";
import CurrentLevel from "./CurrentLevel";
import Weapons from "./Weapons";

class Home extends Component {
  render() {
    return (
      <div className>
        <div className="ui center aligned container">
          <CurrentLevel />
        </div>
        <div className="ui three column padded centered grid">
          <div className="row">
            <div className="three wide column">Best Weapon</div>
            <div className="ten wide column">
              <MainScreen />
            </div>
            <div className="three wide column">
              <Weapons />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;