import React, { Component } from "react";
import MainScreen from "./MainScreen";
import CurrentLevel from "./CurrentLevel";
import Weapons from "./Weapons";
import BestWeapon from "./BestWeapon";
import axios from 'axios';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false,
      isFetching: true,
      userData: {}
    }
  }
  componentDidMount(){
    axios.get(('http://localhost:8080/api/users'))
    .then((res) => {
      this.setState({
        isLoggedIn: true,
      });
      return res.data.sub
    })
    .then((id) => { 
      if(id === undefined || id < 1) throw new Error('id error');
      const { data } = axios.get((`http://localhost:8080/api/users/${id}`));
      return data;
    })
    .then((data) => {
      this.setState({
        userData: data
      })
    })
    .catch((err) => console.log(err));

    this.setState({ isFetching: false });
  }
  render() {
    const { isFetching, userData } = this.state;
    console.log(!isFetching ? userData : 'null');
    return (
      <div className={`ui basic ${isFetching && 'loading'} segment`}>
        <div className="ui center aligned container">
          <CurrentLevel />
        </div>
        <div className="ui three column padded centered grid">
          <div className="row">
            <div className="three wide column">
              <BestWeapon />
            </div>
            <div className="ten wide column">
              <MainScreen />
            </div>
            <div className="three wide column">
              <Weapons />
            </div>
          </div>
        </div>
        <div className="ui basic right aligned segment">
          <div className="ui blue button">Save Game</div> 
        </div>
        
      </div>
    );
  }
}

export default Home;