import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { messaging } from "../init-fcm";

export default class Start extends Component{
    
    componentDidMount() {
      const token = localStorage.getItem('jwtToken');
      console.log(token);
      messaging.requestPermission()
      .then(async function() {
        const token = await messaging.getToken();
        console.log('My token');
        console.log(token);
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });
      messaging.onMessage((payload) => console.log('Message received. ', payload));
      navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
      /* if (token) {

      } */
    }

    render(){
        
        return( 
            <div>
                <Menu/>
                {/* ##### Hero Area Start ##### */}
                <section className="hero-area">
                    
                    
                    {/* Single Hero Slide */}
                    <div className="single-hero-slide d-flex align-items-center justify-content-center">
                        {/* Slide Img */}
                        <div className="slide-img bg-img" style={{backgroundImage: 'url(img/bg-img/bg-1.jpg)'}} />
                            {/* Slide Content */}
                            <div className="container">
                                <div className="row">
                                <div className="col-12">
                                    <div className="hero-slides-content text-center">
                                    <h6 data-animation="fadeInUp" data-delay="100ms">La mejor música</h6>
                                    <h2 data-animation="fadeInUp" data-delay="300ms">TU MUSICA <span>TU MUSICA</span></h2>
                                    
                                    <Link to='/play'>
                                        <button data-animation="fadeInUp" data-delay="500ms" className="btn oneMusic-btn mt-50">Escucha <i className="fa fa-angle-double-right" /></button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </section>
                <Footer/>
            </div>
            )
    }
        
}