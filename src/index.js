import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Search from "./search/search";
import Map from "./map/map";
import Terminals from './content/terminals';


class App extends React.Component {
  state = {
    List: []
  }

  componentDidMount() {
        fetch(
          "https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=Rivne"
        )
          .then(response => response.json())
          .then(({devices}) => {
              console.log(devices)
            this.setState({
              List: devices
            });
          });
      }
  
    render() {
      return (
        <div className="container bootstrap snippet">
          <Search></Search>
          <Terminals TerminalList={this.state.List}></Terminals>
          <Map Coordinate={this.state.List}></Map>
        </div>
      );
    }
  }


ReactDOM.render(<App />, document.getElementById('root'));


