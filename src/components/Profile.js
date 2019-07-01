import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import swal from 'sweetalert2'
import baseURLFront from '../urlFront';
import store from "../store";

export default class Profile extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.removeItem('jwtToken')
        swal.fire({
            title: 'Vuelve pronto...', timer: 1000, showConfirmButton: false, onOpen: () => {
                swal.showLoading()
            }
        });
        setTimeout(function () { window.location = `${baseURLFront}/login`; }, 1000);
    }


    render(){
        
        return( 

            <div>
                <Menu/>
                {/* ##### Breadcumb Area Start ##### */}
                <section className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url(img/bg-img/breadcumb.jpg)'}}>
                <div className="bradcumbContent">
                    <p>See what’s new</p>
                    <h2>Tu Perfil</h2>
                </div>
                </section>
                {/* ##### Breadcumb Area End ##### */}
                {/* ##### Contact Area Start ##### */}
                <section className="contact-area section-padding-100-0">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <div className="contact-content mb-100">
                        {/* Title */}
                        <div className="contact-title mb-50">
                            <h5>Perfil Info</h5>
                        </div>
                        {/* Single Contact Info */}
                        <div className="single-contact-info d-flex align-items-center">
                            <div className="icon mr-30">
                            <span className="icon-placeholder" />
                            </div>
                            <p>1481 Creekside Lane Avila Beach, CA 931</p>
                        </div>
                        {/* Single Contact Info */}
                        <div className="single-contact-info d-flex align-items-center">
                            <div className="icon mr-30">
                            <span className="icon-smartphone" />
                            </div>
                            <p>+53 345 7953 32453</p>
                        </div>
                        {/* Single Contact Info */}
                        <div className="single-contact-info d-flex align-items-center">
                            <div className="icon mr-30">
                            <span className="icon-mail" />
                            </div>
                            <p>{store.getState().email}</p>
                        </div>
                        <div className="oneMusic-buttons-area mb-100">
                            <button onClick={this.handleSubmit} className="btn oneMusic-btn m-2">Logout <i className="fa fa-angle-double-right"></i></button>
                         </div>
                        {/* Contact Social Info */}
                        <div className="contact-social-info mt-50">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook" aria-hidden="true" /></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Dribbble"><i className="fa fa-dribbble" aria-hidden="true" /></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Behance"><i className="fa fa-behance" aria-hidden="true" /></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </section>
                {/* ##### Contact Area End ##### */}
                
                <Footer/>                
            </div>
          )
    }
    
}