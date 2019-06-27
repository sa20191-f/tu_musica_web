import React, { Component } from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';

export default class Lists extends Component{
    

    render(){
        
        return(
                <div>
                    {/* ##### Footer Area Start ##### */}
                    <footer className="footer-area">
                    <div className="container">
                        <div className="row d-flex flex-wrap align-items-center">
                        <div className="col-12 col-md-6">
                            <Link to='/' className="nav-brand" >TU MUSICA</Link>
                            <p className="copywrite-text"><a href="#">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by </a><a href="https://colorlib.com" target="_blank">Colorlib</a>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="footer-nav">
                            <ul>
                                <li><Link to='/'>Inicio</Link></li>
                                <li><Link to='/play'>Escucha</Link></li>
                                <li><Link to='/lists'>Tu Lista</Link></li>
                                <li><Link to='/profile'id="loginBtn">Tu Perfil</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </footer>
                    {/* ##### Footer Area Start ##### */}
                </div>
            )
    }
            
}