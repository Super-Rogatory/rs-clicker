import React, { Component } from "react";
import { connect } from "react-redux";

class CurrentLevel extends Component {
  constructor(props){
    super(props);
    this.state = {
      lvl: this.props.lvl
    }
  }
  render() {
    const { lvl } = this.props;
    return (
      <div className="ui basic segment">
        <p>Current Level: {lvl}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  level: state.level,
});

export default connect(mapStateToProps, null)(CurrentLevel);
