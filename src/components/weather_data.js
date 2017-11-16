import React, { Component } from 'react';

class WeatherData extends Component {
    // Create an array with day 1,2,3,4 objects with their respected min and max temps
    daysData = [    
        {min: 0, max: 0},
        {min: 0, max: 0},
        {min: 0, max: 0},
        {min: 0, max: 0}
    ];
    d = new Date();
    switch = 0;
    change = 0;
    days = ['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
    min = 0;
    max = 0;
    constructor(props){
        super(props);

        this.sortMinMax = this.sortMinMax.bind(this);
        this.kelvinToFahr = this.kelvinToFahr.bind(this);
        this.getDate = this.getDate.bind(this);
    }

    sortMinMax(listItem){
        if(this.daysData.length < 5){
            console.log(this.daysData);
            if(this.switch === listItem.dt_txt[9] && this.change === 0 && this.daysData[0].min === 0){
                    this.daysData[0] = {
                    min: listItem.main.temp_min,
                    max: listItem.main.temp_max
                }
                               
                console.log('hi');
            }
            else if(this.switch !== listItem.dt_txt[9]){
                this.switch = listItem.dt_txt[9];
                this.change++;
                this.daysData[this.change] = {
                    min: listItem.main.temp_min,
                    max: listItem.main.temp_max
                }
                
            }
        }
        else{
            this.daysData = [
                {min: 0, max: 0},
                {min: 0, max: 0},
                {min: 0, max: 0},
                {min: 0, max: 0}
            ];
            this.switch = this.props.weather.list[0].dt_txt[9]
            console.log(this.props.weather.list[0].dt_txt[9]);
            this.change = 0;
        }
    }

    getDate(count){
        if(this.d.getDay() + count > 6){
            return this.days[this.d.getDay() + count - 7];
        } 
        else{
            return this.days[this.d.getDay() + count];
        }
    }

    kelvinToFahr(temp){
        return Math.floor(((temp-273.15)*1.8)+32);
    }

    render(){
        if(this.props.weather.cod === "200" ){
            //problem
            this.switch = this.props.weather.list[0].dt_txt[9];
            this.props.weather.list.map(this.sortMinMax);                
            console.log(this.daysData);
            console.log(this.props.weather.list);
            
            return(
                <div className="container">
                    <div className="row">
                        <div className="bs-five-area bs-radius">
                            <div className="col-lg-3 no-padding">
                                <div className="bs-five active">
                                    <h6 className="text-uppercase">{this.getDate(0)}</h6>
                                    <h6> 
                                        <i className="fa fa-arrow-up" aria-hidden="true" />
                                        {this.kelvinToFahr(this.props.weather.list[0].main.temp)} <sup>°F</sup>
                                    </h6>
                                    <h6> 
                                        <i className="fa fa-arrow-down" aria-hidden="true" />
                                        {this.kelvinToFahr(this.props.weather.list[0].main.temp_min)} <sup>°F</sup>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-lg-3 no-padding">
                                <div className="bs-five">
                                    <h6 className="text-uppercase">{this.getDate(1)}</h6>
                                    <h6> 
                                        <i className="fa fa-arrow-up" aria-hidden="true" />
                                        {this.kelvinToFahr(this.daysData[1].max)}<sup>°F</sup>
                                    </h6>
                                    <h6> 
                                        <i className="fa fa-arrow-down" aria-hidden="true" />
                                        {this.kelvinToFahr(this.props.weather.list[1].main.temp_min)}<sup>°F</sup>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-lg-3 no-padding">
                                <div className="bs-five">
                                    <h6 className="text-uppercase">{this.getDate(2)}</h6>
                                    <h6>
                                        <i className="fa fa-arrow-up" aria-hidden="true" />
                                        {this.kelvinToFahr(this.daysData[2].max)} <sup>°F</sup>
                                    </h6>
                                    <h6>
                                        <i className="fa fa-arrow-down" aria-hidden="true" />
                                        {this.kelvinToFahr(this.props.weather.list[2].main.temp_min)} <sup>°F</sup>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-lg-3 no-padding">
                                <div className="bs-five">
                                    
                                    <h6 className="text-uppercase">{this.getDate(3)}</h6>
                                    <h6>
                                        <i className="fa fa-arrow-up" aria-hidden="true" />{this.kelvinToFahr(this.daysData[2].max)} <sup>°F</sup>
                                    </h6>
                                    <h6>
                                        <i className="fa fa-arrow-down" aria-hidden="true" />
                                        {this.kelvinToFahr(this.props.weather.list[3].main.temp_min)} <sup>°F</sup>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            else{
                return <div>Loading...</div>
            }
    }
}

export default WeatherData;