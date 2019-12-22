import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Search from "./search/search";
import Map from "./map/map";
import Terminals from './content/terminals';

class App extends React.Component {
  state = {
    List: [],
    city: "Rivne",
    onGetCity: { latitude: "", longitude: "" }
  };

  componentDidMount() {
    console.log("componentDidMount", this.state.city)
    const {city} = this.state;
    fetch(
      `https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=${city}`
    )
          .then(response => response.json())
          .then(({devices}) => {
              // console.log(devices)
            this.setState({
              List: devices
            });
          });
  };
    
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.city);
  };

      onFindCity = (i) =>{
        // console.log(i);
        // this.setState({
        //   city: i
        // });
        // const {city} = this.state;
    fetch(
      `https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=${i}`
    )
          .then(response => response.json())
          .then(({devices}) => {
              // console.log(devices)
            this.setState({
              List: devices
            });
          });
      };

  onGetCity = (latitude, longitude) => {
    // console.log(typeof latitude, longitude)
    this.setState({
      onGetCity: { latitude, longitude }
    });
  };
  
    render() {
      // console.log("arr", this.state.onGetCity)
      return (
        <div className="bootstrap snippet">
          <Search onFindCity={this.onFindCity}></Search>
          <Terminals TerminalList={this.state.List} onGetCity={(latitude, longitude) => this.onGetCity(latitude, longitude)}></Terminals>
          <Map Coordinate={this.state.List} onGetCity={this.state.onGetCity}></Map>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));


