import React from 'react';
import './App.css';
import axios from 'axios';
import AppCard from './AppCard'

class App extends React.Component {

  state = {
    datas: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({ datas: res.data })
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.datas.map((data, index) => (
          <div key={index}>
            <h1>Name: {data.name}</h1>
            <h1>Country: {data.country}</h1>
            <h1>Searches: {data.searches}</h1>
            <h1>Id: {data.id}</h1>
          </div>
        ))} */}
        <AppCard datas={this.state.datas}/>
      </div>
    );
  }
}

export default App;
