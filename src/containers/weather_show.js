import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

import GoogleMaps from '../components/google_maps';
import GoogleMaps2 from '../components/google_maps2';
import WeatherData from '../components/weather_data';

class WeatherShow extends Component{
    switchMap = true;
    constructor(props){
        super(props);

        this.state = { 
            city: 'New York',
            lat: 40.7143,
            lon: -74.006
        };

        this.renderGMaps = this.renderGMaps.bind(this);
    }

    componentWillMount(){
        this.props.fetchWeather('new york');
    }

    renderGMaps(){
        if(this.props.weather.cod === "200" && this.switchMap === true){
            this.switchMap = !this.switchMap;    
            return <GoogleMaps2 lon={this.props.weather.city.coord.lon} lat={this.props.weather.city.coord.lat} />
        }
        else if(this.props.weather.cod === "200" && this.switchMap === false){
            this.switchMap = !this.switchMap;
            return <GoogleMaps lon={this.props.weather.city.coord.lon} lat={this.props.weather.city.coord.lat} />
        }
        else{
            return <GoogleMaps lon={this.state.lon} lat={this.state.lat} />
        }
        
    }
    
    render(){
        return (
        <div>
            <WeatherData weather={this.props.weather} />
            {this.renderGMaps()}
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        weather: state.weather
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherShow);
