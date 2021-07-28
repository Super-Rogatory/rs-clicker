import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super();
    this.state = {
      total: 0
    }
  }
  componentDidMount(){
    this.increment = setInterval(() => {
      this.setState({total: this.state.total + 1})
    }, 1000)
  }
  componentDidUnmount(){
    clearInterval(this.increment);
  }
  render() {
    const { total } = this.state;
    return (
      <div>
        <h1>{total}</h1>
      </div>
    )
  }
}

export default App;
