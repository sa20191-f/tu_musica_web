import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { messaging } from "../init-fcm";
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";
import store from "../store";
import swal from 'sweetalert2'

import baseURL from "../url"
const client = new ApolloClient({
  uri: `${baseURL}`
});
export default class Start extends Component{
    
    componentDidMount() {
      const auth = store.getState().id;
      /* messaging.requestPermission()
      .then(async function() {
        const tokenPush = await messaging.getToken();
        if (auth) {
          console.log(localStorage.getItem('userId'));
          console.log(tokenPush);
          client.mutate({
            mutation: gql`
            mutation {
              addToken(token: {
                    userID: ${store.getState().id}
                    tokenType: 2
                    token: "${tokenPush}"
                })
            }`
            }).then(() => console.log('Se registro esta ... ')).catch(e => console.log(e));
        }
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });
      messaging.onMessage((payload) => swal.fire(payload.data.message,'','success'));
      navigator.serviceWorker.addEventListener("message", (message) => {
        console.log("Message");
        console.log(message);
      }); */
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