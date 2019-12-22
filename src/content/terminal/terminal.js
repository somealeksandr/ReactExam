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
        const{fullAddressUa, latitude, longitude, placeUa} = this.state;
    return <div className="d-flex justify-content-between my-2">
            <div>{this.props.fullAddressUa}</div>
            <div>{this.props.placeUa}</div>
            {/* <div>{cityUA}</div> */}
            <button onClick={() => this.getCoordinate(longitude, latitude)}>Show on the map</button>
        </div>
    }
}

export default TerminalItem;