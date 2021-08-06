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
    this.saveGame = this.saveGame.bind(this);
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
  saveGame() {
    const { userData } = this.state;
    const { id } = userData;
    axios.post(`http://localhost:8080/api/users/${id}`, userData)
    .then((res) => res.data)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }
  render() {
    const { isFetching, userData } = this.state;
    const { saveGame } = this;
    return (
      <div className={`ui basic ${isFetching && 'loading'} segment`}>
        <div className="ui center aligned container">
          <CurrentLevel lvl={userData.currentLevel} />
        </div>
        <div className="ui three column padded centered grid">
          <div className="row">
            <div className="three wide column">
              <BestWeapon />
            </div>
            <div className="ten wide column">
              <MainScreen exp={userData.exp} />
            </div>
            <div className="three wide column">
              <Weapons />
            </div>
          </div>
        </div>
        <div className="ui basic right aligned segment">
          <button type='button' className="ui blue button" onDoubleClick={saveGame} >Save Game</button> 
        </div>
        
      </div>
    );
  }
}

export default Home;