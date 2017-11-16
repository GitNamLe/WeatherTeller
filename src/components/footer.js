import React, { Component } from 'react';

export default function Footer(){
    return(
        <footer id="myFooter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h5>About Author</h5>
                        <ul>
                            <li><a href="#">Developers Website</a></li>
                            <li><a href="#">Resume</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <h5>Contact Author</h5>
                        <ul>
                            <li><a href="#">Github</a></li>
                            <li><a href="#">vnamle1@gmail.com</a></li>
                            <li><a href="#">Developers Website</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 info">
                        <h5>Information</h5>
                        <p> Lorem ipsum dolor amet, consectetur adipiscing elit. Etiam consectetur aliquet aliquet. </p>
                    </div>
                </div>
            </div>
            <div className="second-bar">
                <div className="container">
                    <p id="footer-copyright" >Copyright © 2017 | Developer: Nam Le</p>
                </div>
            </div>
        </footer>
    )
}