import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Search from "./search/search";
import Map from "./map/map";
import Terminals from './content/terminals';


class App extends React.Component {
    render() {
      return (
        <div className="container bootstrap snippet">
          <Search></Search>
          <Terminals></Terminals>
          <Map></Map>
        </div>
      );
    }
  }


ReactDOM.render(<App />, document.getElementById('root'));


