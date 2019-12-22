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
      const {onGetCity} = this.props;
      // console.log("onGetCity", onGetCity)
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
                       
                    />
                     <Marker
                        lat={Number(onGetCity.latitude)}
                        lng={Number(onGetCity.longitude)}
                        name="Rivne"
                        color="blue"
                    />
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Map;