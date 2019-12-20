import React from 'react';
import './map.css';
import Marker from './marker';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 50.61,
      lng: 26.25,
    },
    zoom: 13
  };

    render() {
        return(
            <div className="container-map">
                <div id="map">
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDFRjbMHTWrgNvBoYhIoWmm6rUNX5jhwJY' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={50.619154}
                        lng={26.252096}
                        text="My Marker"
                    />
                     <Marker
                        lat={11.0168}
                        lng={76.9558}
                        name="My Marker"
                        color="blue"
                    />
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Map;