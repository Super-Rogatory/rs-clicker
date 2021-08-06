import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementDamageCount } from "../effects/thunk";
import "../styles/MainScreen.css";
import axios from 'axios';

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      userData: {}
    }
  }
  componentDidMount() {
    axios.get(('http://localhost:8080/api/users'))
    .then((res) => {
      this.setState({
        isLoggedIn: true,
      });
      return res.data.sub
    })
    .then((id) => { 
      if(id === undefined || id < 1) throw new Error('id error');
      axios.get(`http://localhost:8080/api/users/${id}`)
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          userData: data
        })
      })
    })
    .catch((err) => console.log(err));
    this.setState({ isFetching: false });
  }

  render() {
    const { userData } = this.state; 
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
          <h1>{`EXP: ${userData.exp}`}</h1>
          <button type="button" onClick={() => console.log('create add exp functionality')}>
            +
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.exp,
});
const mapDispatchToProps = (dispatch) => ({
  addToExp: (amount) => dispatch(incrementDamageCount(amount)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
