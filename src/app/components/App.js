import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementDamageCount } from '../effects/thunk';

class App extends Component {
  constructor(){
    super();
    this.state = {
      total: 0
    }
  }

  render() {
    const { total, addToDps } = this.props;
    return (
      <div>
        <h1>{total}</h1>
        <button type='button' onClick={() => addToDps(1)}>+</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  total: state.totaldps
})
const mapDispatchToProps = (dispatch) => ({
  addToDps: (amount) => dispatch(incrementDamageCount(amount))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
