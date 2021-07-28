import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementDamageCount } from "../effects/thunk";
import CurrentLevel from "./CurrentLevel";

class MainScreen extends Component {
  render() {
    const { total, addToDps } = this.props;
    return (
      <div>
        <div className="ui center aligned container">
          <CurrentLevel />
        </div>
        <div className="ui three column centered grid">
          <div className="row">
            <div className="three wide column">Best Weapon</div>

            <div className="ten wide column">
              <div className="ui center aligned container">
                <h1>{`Current DPS: ${0}`}</h1>
                <h1>{`Clicks: ${total}`}</h1>
                <button type="button" onClick={() => addToDps(1)}>
                  +
                </button>
              </div>
            </div>

            <div className="three wide column">Weapons</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  total: state.totaldps,
});
const mapDispatchToProps = (dispatch) => ({
  addToDps: (amount) => dispatch(incrementDamageCount(amount)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
