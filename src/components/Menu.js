import React, { Component } from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';

export default class Menu extends Component{
    

    render(){
        
        return( 

            <div >
                
                <header className="header-area">
                    {/* Navbar Area */}
                    <div className="oneMusic-main-menu">
                        <div className="classy-nav-container breakpoint-off">
                        <div className="container">
                            {/* Menu */}
                            <nav className="classy-navbar justify-content-between" id="oneMusicNav">
                            {/* Nav brand */}
                            
                            <Link to='/' className="nav-brand" >TU MUSICA</Link>
                            {/* Navbar Toggler */}
                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span /><span /><span /></span>
                            </div>
                            {/* Menu */}
                            <div className="classy-menu">
                                {/* Close Button */}
                                <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                                </div>
                                {/* Nav Start */}
                                <div className="classynav">
                                <ul>
                                    <li><Link to='/'>Inicio</Link></li>
                                    <li><Link to='/songs'>Escucha</Link></li>
                                    <li><Link to='/upsong'>Subir canción</Link></li>
                                    <li><Link to='/lists'>Tu Lista</Link></li>
                                </ul>
                                {/* Login/Register & Cart Button */}
                                <div className="login-register-cart-button d-flex align-items-center">
                                    {/* Login/Register */}
                                    <div className="login-register-btn mr-50">
                                     <Link to='/profile'id="loginBtn">Tu Perfil</Link>
                                    </div>
                                </div>
                                </div>
                                {/* Nav End */}
                            </div>
                            </nav>
                        </div>
                        </div>
                    </div>
                </header>
            </div>
          )
    }
    
}