import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.js';

function WeatherHeader(){
    return(
        <div>
            <nav className="navbar navbar-toggleable-md navbar-light bg-primary">
                
                <a className="navbar-brand text-white" href="#">WeatherTeller</a>
                <SearchBar />
                
            </nav>
        </div>
    )
}

export default WeatherHeader;
/* <nav class="navbar navbar-inverse bg-primary">
    <a class="navbar-brand" href="#">Navbar</a>
</nav> */