import React from 'react';
import './App.css';
import axios from 'axios';
import AppCard from './AppCard';

class App extends React.Component {

  state = {
    datas: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({ datas: res.data })
        // console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>Click Any Card To See The Magic!!!</h1>
        <AppCard datas={this.state.datas} />
      </div>
    );
  }
}

export default App;
