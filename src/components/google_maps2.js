import React, { Component } from 'react';

class GoogleMaps2 extends Component {
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 15,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render(){
        return (
            <div id="gmaps" ref="map" />
        )
    }
}

export default GoogleMaps2;