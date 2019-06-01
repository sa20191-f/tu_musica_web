import React, { Component } from 'react'
import MenuLanding from './MenuLanding'

export default class SignUp extends Component{
    

    render(){
        
        return(
            <div>
                <MenuLanding/>
                {/* ##### Breadcumb Area Start ##### */}
                <section className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url(img/bg-img/breadcumb3.jpg)'}}>
                <div className="bradcumbContent">
                    <p>TU MUSICA</p>
                    <h2>Sign Up</h2>
                </div>
                </section>
                {/* ##### Breadcumb Area End ##### */}
                {/* ##### Sign Up Area Start ##### */}
                <section className="login-area section-padding-100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="login-content">
                        <h3>Welcome Back</h3>
                        {/* Sign Up Form */}
                        <div className="login-form">
                            <form action="#" method="post">
                                <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">User</label>
                                        <input type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder="Enter User" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter E-mail" />
                                    <small id="emailHelp" className="form-text text-muted"><i className="fa fa-lock mr-2" />We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn oneMusic-btn mt-30">Sign Up</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* ##### SignUp Area End ##### */}
            </div>
        )
    }
        
}