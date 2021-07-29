import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementDamageCount } from "../effects/thunk";
import "../styles/MainScreen.css";

class MainScreen extends Component {
  render() {
    const { total, addToDps } = this.props;
    return (
      <div>
        <div className="background-image">
          <div className="ui basic segment">
            <img
              className="ui centered small image"
              src="https://oldschool.runescape.wiki/images/9/91/Dragon_claws_equipped.png?4cf64"
              alt="runescape-stock"
            />
          </div>
        </div>
        <div className="ui center aligned container">
          <span>{`Current DPS: ${0}`}</span>
          <h1>{`Clicks: ${total}`}</h1>
          <button type="button" onClick={() => addToDps(1)}>
            +
          </button>
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
