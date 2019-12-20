import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Search from "./search/search";
import Map from "./map/map";
import Terminals from './content/terminals';


class App extends React.Component {
  state = {
    List: [],
    onFindCity: "Rivne",
    onGetCity: {latitude: "50.619154", longitude: "26.252096"}
  }

  componentDidMount() {
    const {onFindCity} = this.state;
        fetch(
          `https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=${onFindCity}`
        )
          .then(response => response.json())
          .then(({devices}) => {
              console.log(devices)
            this.setState({
              List: devices
            });
          });
      }

      onFindCity(i){
        // console.log(typeof i);
        this.setState({
          onFindCity: i
        })
      };
      onGetCity(latitude, longitude){
        // console.log(typeof latitude, longitude)
        this.setState({
          onGetCity: {latitude, longitude}
        })
      }
  
    render() {
      // console.log("arr", this.state.onGetCity)
      return (
        <div className="container bootstrap snippet">
          <Search onFindCity={this.onFindCity}></Search>
          <Terminals TerminalList={this.state.List} onGetCity={(latitude, longitude) => this.onGetCity(latitude, longitude)}></Terminals>
          <Map Coordinate={this.state.List} onGetCity={this.state.onGetCity}></Map>
        </div>
      );
    }
  }


ReactDOM.render(<App />, document.getElementById('root'));


