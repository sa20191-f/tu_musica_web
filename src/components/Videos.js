import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    View,
    MDBView,
  } from "mdbreact";
import swal from 'sweetalert2'
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";

import baseURL from "../url"
const client = new ApolloClient({
    uri: `${baseURL}`
  });

export default class Videos extends Component{
    constructor() {
		super()
		this.state = { name: "",link: ""}

    }
    /*
    componentDidMount() {
        client.mutate({
            mutation: gql`
            mutation {
                createFind(video: {
                  title: "${this.state.name}"
                }) {
                      find_videos_response{
                    titles
                    links
                    images
                  }
                }
            }`
    
    
            })
            .then(data => {
            console.log(data.data.createFind.find_videos_response.links);
            this.state.link = data.data.createFind.find_videos_response.links
            console.log("Respuesta: ", this.state.link);
            swal.fire("Ha buscado correctamente",'','success');
            setTimeout(function () {window.location.reload();}, 100000);
            })
            .catch(error => {console.error(error)});
    }*/

    onSubmit = e => {
        e.preventDefault();
        console.log("Espichaste el botón");
        if((this.state.name === "") || (this.state.user_id === "")){
            swal.fire("Digite los campos señalados",'','error'); 
        }else{
        console.log("nombre "+this.state.name);

        client.mutate({
        mutation: gql`
        mutation {
            createFind(video: {
              title: "${this.state.name}"
            }) {
                  find_videos_response{
                titles
                links
                images
              }
            }
        }`


        })
        .then(data => {
        console.log(data.data.createFind.find_videos_response.links);
        this.state.link = data.data.createFind.find_videos_response.links
        console.log("Respuesta: ", this.state.link);
        swal.fire("Ha buscado correctamente",'','success');
        setTimeout(function () {window.location.reload();}, 100000);
        })
        .catch(error => {console.error(error)});
        }
    };

    setField(e) {
        console.log(this.state.name);
        if(e.target.id === 'nombre'){
            this.setState({
              name: e.target.value
            })
            }      
    }

    render(){

        return( 
            <div>
                <Menu/>
                {/* ##### Breadcumb Area Start ##### */}
                <section className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url(img/bg-img/breadcumb3.jpg)'}}>
                <div className="bradcumbContent">
                    <p>See what’s new</p>
                    <h2>Videos</h2>
                </div>
                </section>
                <MDBContainer
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    >
                    <MDBRow>
                        <MDBCol md="12">
                        <form>
                            <p className="h4 text-center py-4">Buscar Video</p>
                            <label
                            htmlFor="defaultFormCardNameEx"
                            className="grey-text font-weight-light"
                            >
                            Nombre
                            </label>
                            <input
                            type="text"
                            id="nombre"
                            className="form-control"
                            onChange={e => this.setField(e)}
                            />
                            <br />
                            
                            <div className="text-center py-4 mt-3">
                            <MDBBtn
                                className="btn btn-outline-purple"
                                type="submit"
                                onClick={this.onSubmit}
                            >
                                Buscar
                                <MDBIcon icon="paper-plane-o" className="ml-2" />
                            </MDBBtn>
                            </div>
                        </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <h1>{this.state.link}</h1>
                <a href={this.state.link}>{this.state.name}</a>    
                <Footer/>

                
            </div>              

            
        )
    }
    
}