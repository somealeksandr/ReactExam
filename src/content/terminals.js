
import React, { Component } from 'react'
import './terminals.css';

import TerminalItem from './terminal/terminal'

class Terminals extends Component {

    getCityCoordinate(latitude, longitude) {
        // console.log("rervmsbo",latitude, longitude);
        this.props.onGetCity(latitude, longitude);
    } 

    render() {
        const {TerminalList} = this.props;

        const Item = TerminalList.map(item => {
            return <TerminalItem
            type={item.type}
            latitude={item.latitude}
            longitude={item.longitude}
            fullAddressUa={item.fullAddressUa}
            cityUA={item.cityUA}
            placeUa={item.placeUa}
            getCityCoordinate={(latitude, longitude) => this.getCityCoordinate(latitude, longitude)}
            ></TerminalItem> 
        })
        
        return (
                <div className="content">
                    {Item}
                </div>
            
        )
    }
}

export default Terminals;
