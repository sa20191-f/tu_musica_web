import React, { Component } from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';

export default class MenuLanding extends Component{
    

    render(){
        
        return( 

            <div>
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="lds-ellipsis">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
                <header className="header-area">
                    {/* Navbar Area */}
                    <div className="oneMusic-main-menu">
                        <div className="classy-nav-container breakpoint-off">
                        <div className="container">
                            {/* Menu */}
                            <nav className="classy-navbar justify-content-between" id="oneMusicNav">
                            {/* Nav brand */}
                            
                            <Link to='/' className="nav-brand" >About Us</Link>
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

                                {/* Login/Register & Cart Button */}
                                <div className="login-register-cart-button d-flex align-items-center">
                                    {/* Login/Register */}
                                    <div className="login-register-btn mr-50">
                                        <ul>
                                            <li><Link to='/login'>Login</Link></li>
                                            <li><Link to='/signup'>Sign Up</Link></li>
                                        </ul>
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