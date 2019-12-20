import React from 'react';
import './terminals.css';

import TerminalItem from './terminal/terminal'

const Terminals = ({TerminalList}) => {
    
    const Item = TerminalList.map(item => {
        return <TerminalItem
        type={item.type}
        latitude={item.latitude}
        longitude={item.longitude}
        fullAddressUa={item.fullAddressUa}
        cityUA={item.cityUA}
        placeUa={item.placeUa}
        ></TerminalItem> 
    })

        return(
            <div className="content">
                {Item}
            </div>
        )
    }

export default Terminals;