import React, { Component } from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    View,
    MDBView,
  } from "mdbreact";

import Lista from './Lista';
import swal from 'sweetalert2'
import Menu from './Menu'
import Footer from './Footer'
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";

import baseURL from "../url"
const client = new ApolloClient({
  uri: `${baseURL}`
});

export default class Lists extends Component{
    constructor() {
		super()
		this.state = { listas: [],name: "",image: "",user_id: localStorage.getItem('userId'),email:"correo@correo.com"}
		client.query({
        query: gql`
        query{
            allList{
            id
            name
            image
            email
            list_vinculations{
                id
                user_id
            }
            song_vinculations{
                id
                song_id
            }      
            }
        }`
        })
        .then(data => {
        console.log(data.data.allList)
        this.setState({ listas: data.data.allList})
        })
        .catch(error => console.error(error));
        //this.handleCountClick = this.handleCountClick.bind(this);

       console.log(this.state.user_id); 
    }

    onSubmit = e => {
        e.preventDefault();
    
        console.log("Espichaste el botón");

        if((this.state.name === "") || (this.state.user_id === "")){
                swal.fire("Digite los campos señalados",'','error'); 
        }else{
        console.log("nombre "+this.state.name);
        console.log("imagen "+this.state.image);
        console.log(this.state.user_id);
        client.mutate({
        mutation: gql`
        mutation{
            createList(list: {
                name: "${this.state.name}"
                image: "${this.state.image}"
                user_id: ${this.state.user_id}
                email: "${this.state.email}"
            }){
                name
                email
                image
                user_id
            }
        }`
        })
        .then(data => {
        console.log(data.data);
        swal.fire("has creado tu lista exitosamente",'','success');
        setTimeout(function () {window.location.reload();}, 1000);
        })
        .catch(error => {console.error(error)});
        }

      };
    
    setField(e) {
        console.log(this.state.name);
        console.log(this.state.image);

        if(e.target.id === 'nombre'){
            this.setState({
              name: e.target.value
            })
            }
            if(e.target.id === 'image'){
            this.setState({
              image: e.target.value
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
                    <h2>Tus Listas</h2>
                </div>
                </section>
                {/* ##### Breadcumb Area End ##### */}
                {/* ##### Album Catagory Area Start ##### */}
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
                            <p className="h4 text-center py-4">Crear Lista</p>
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
                            <label
                            htmlFor="defaultFormCardNameEx"
                            className="grey-text font-weight-light"
                            >
                            Url imagen
                            </label>
                            <input
                            type="text"
                            id="image"
                            className="form-control"
                            onChange={e => this.setField(e)}
                            />
                            
                            <div className="text-center py-4 mt-3">
                            <MDBBtn
                                className="btn btn-outline-purple"
                                type="submit"
                                onClick={this.onSubmit}
                            >
                                Enviar
                                <MDBIcon icon="paper-plane-o" className="ml-2" />
                            </MDBBtn>
                            </div>
                        </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <section className="album-catagory section-padding-100-0">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <div className="browse-by-catagories catagory-menu d-flex flex-wrap align-items-center mb-70">
                        <a href="#" data-filter="*">Browse All</a>
                        <a href="#" data-filter=".a" className="active">A</a>
                        <a href="#" data-filter=".b">B</a>
                        <a href="#" data-filter=".c">C</a>
                        <a href="#" data-filter=".d">D</a>
                        <a href="#" data-filter=".e">E</a>
                        <a href="#" data-filter=".f">F</a>
                        <a href="#" data-filter=".g">G</a>
                        <a href="#" data-filter=".h">H</a>
                        <a href="#" data-filter=".i">I</a>
                        <a href="#" data-filter=".j">J</a>
                        <a href="#" data-filter=".k">K</a>
                        <a href="#" data-filter=".l">L</a>
                        <a href="#" data-filter=".m">M</a>
                        <a href="#" data-filter=".n">N</a>
                        <a href="#" data-filter=".o">O</a>
                        <a href="#" data-filter=".p">P</a>
                        <a href="#" data-filter=".q">Q</a>
                        <a href="#" data-filter=".r">R</a>
                        <a href="#" data-filter=".s">S</a>
                        <a href="#" data-filter=".t">T</a>
                        <a href="#" data-filter=".u">U</a>
                        <a href="#" data-filter=".v">V</a>
                        <a href="#" data-filter=".w">W</a>
                        <a href="#" data-filter=".x">X</a>
                        <a href="#" data-filter=".y">Y</a>
                        <a href="#" data-filter=".z">Z</a>
                        <a href="#" data-filter=".number">0-9</a>
                        </div>
                    </div>
                    </div>
                    <div className="row oneMusic-albums">
                        
                        {this.state.listas.map((lista) => {
                                            return (
                                                <Lista key={lista.id} image={lista.image} name={lista.name}/>                                                                                      
                                            )
                                        })}
                        
                    {/*
                    <MDBContainer className="mt-5">
                    <MDBRow>
                    {this.state.listas.map((lista) => {
                                        return (
                                            <Lista key={lista.id} image={lista.image} name={lista.name}/>                                                                                      
                                        )
                                    })}
                    </MDBRow>
                    </MDBContainer>
                    */}
                    </div>
                </div>
                </section>
                {/* ##### Album Catagory Area End ##### */}
                
                
                
                <Footer/>
            </div>

            )
    }
        
}