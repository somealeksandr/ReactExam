import React from 'react';

class TerminalItem extends React.Component{
    state = {
        type: this.props.type,
        fullAddressUa: this.props.fullAddressUa,
        latitude: this.props.latitude,
        longitude: this.props.longitude,
        cityUA: this.props.cityUA,
        placeUa: this.props.placeUa
    }

    getCoordinate (latitude, longitude){
        // console.log("coordinate", latitude, longitude);
        this.props.getCityCoordinate(latitude, longitude);
    }

    render() {
        const{type, fullAddressUa, latitude, longitude, cityUA, placeUa} = this.state;
    return <div className="d-flex justify-content-between">
            <div>{fullAddressUa}</div>
            <div>{placeUa}</div>
            <div>{cityUA}</div>
            <button onClick={() => this.getCoordinate(longitude, latitude)}>Show on the map</button>
        </div>
    }
}

export default TerminalItem;