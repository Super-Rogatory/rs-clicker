import React, { Component } from "react";
import { connect } from "react-redux";

class CurrentLevel extends Component {
  render() {
    const { level } = this.props;
    return (
      <div className="ui basic segment">
        <p>Current Level: {level}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  level: state.level,
});

export default connect(mapStateToProps, null)(CurrentLevel);
