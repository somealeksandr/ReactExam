import React from 'react';
import './map.css';

class Map extends React.Component {
    // initMap = () => {
    //     let element = document.getElementById('map');
    //     let options = {
    //         zoom: 5,
    //         center: {
    //             lat: 50.619900,
    //             long: 26.251617
    //         }
    //     }
    //     let myMap = new google.maps.Map(element, options)
    // }

    // srcTerminal='https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=Rivne'
    // src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDFRjbMHTWrgNvBoYhIoWmm6rUNX5jhwJY&callback=initMap';
    // let apiKey = "AIzaSyDFRjbMHTWrgNvBoYhIoWmm6rUNX5jhwJY";
    // axios
    // .get('https://maps.googleapis.com/maps/api/js?key=AIzaSyDFRjbMHTWrgNvBoYhIoWmm6rUNX5jhwJY&callback=initMap')
    // .then(data => console.log(data))

    render() {
        return(
            <div className="container-map">
                <div id="map"></div>
            </div>
        )
    }
}

export default Map;