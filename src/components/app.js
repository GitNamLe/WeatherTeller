import React, { Component } from 'react';
import WeatherShow from '../containers/weather_show.js';
import WeatherHeader from './weather_header';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="nav-side-menu">
        <div className="brand">Brand Logo</div>
        <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">
                <li>
                    <a href="#">
                        <i className="fa fa-dashboard fa-lg"></i> Dashboard
                    </a>
                </li>
                <li data-toggle="collapse" data-target="#products" className="collapsed active">
                    <a href="#"><i className="fa fa-gift fa-lg"></i> UI Elements <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="products">
                    <li className="active"><a href="#">CSS3 Animation</a></li>
                    <li><a href="#">General</a></li>
                    <li><a href="#">Buttons</a></li>
                    <li><a href="#">Tabs &amp; Accordions</a></li>
                    <li><a href="#">Typography</a></li>
                    <li><a href="#">FontAwesome</a></li>
                    <li><a href="#">Slider</a></li>
                    <li><a href="#">Panels</a></li>
                    <li><a href="#">Widgets</a></li>
                    <li><a href="#">Bootstrap Model</a></li>
                </ul>
                <li data-toggle="collapse" data-target="#service" className="collapsed">
                    <a href="#"><i className="fa fa-globe fa-lg"></i> Services <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="service">
                    <li>New Service 1</li>
                    <li>New Service 2</li>
                    <li>New Service 3</li>
                </ul>


                <li data-toggle="collapse" data-target="#new" className="collapsed">
                    <a href="#"><i className="fa fa-car fa-lg"></i> New <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="new">
                    <li>New New 1</li>
                    <li>New New 2</li>
                    <li>New New 3</li>
                </ul>
                <li>
                    <a href="#">
                        <i className="fa fa-user fa-lg"></i> Profile
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-users fa-lg"></i> Users
                    </a>
                </li>
            </ul>
        </div>
      </div>
        <div>
          <div className="container" style={{ paddingLeft: 0, paddingRight: 0}} id="main">
              <div className="row">
                  <div className="col-md-12">
                    <WeatherHeader />
                    <WeatherShow />
                    <Footer />
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
