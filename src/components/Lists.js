import React, { Component } from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    View,
    MDBView
  } from "mdbreact";
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
		this.state = { listas: [],name: "",image: "",user_id: 1}
		client.query({
      query: gql`
      query{
        allList{
          id
          name
		  image
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
            createList(list:{
            name: "${this.state.name}"
            image: "${this.state.image}"
            user_id: "${this.state.user_id}"
            }){
            name
            image
            user_id
            }
        }`
        })
        .then(data => {
        console.log(data.data);
        swal("has creado tu lista exitosamente",'','success');
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
                            <br />
                            <label
                            htmlFor="defaultFormCardEmailEx"
                            className="grey-text font-weight-light"
                            >
                            Elije un archivo
                            </label>
                            <input
                            type="file"
                            id="defaultFormCardEmailEx"
                            className="form-control"
                            onChange={this.onChange}
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
                    <ul>
                    {this.state.listas.map((lista) => {
                                        return (
                                            
                                            <li key={lista.id}>
                                                {/*console.log(lista.name)*/}
                                                <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item t c p">
                                                    <div className="single-album">
                                                    <img src={lista.image} width="100" height="100"  />
                                                    <div className="album-info">
                                                        <a href="#">
                                                        <h5>{lista.name}</h5>
                                                        </a>
                                                        <p>Second Song</p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                        )
                                    })}
                    </ul>
                    </div>
                </div>
                </section>
                {/* ##### Album Catagory Area End ##### */}
                {/* ##### Buy Now Area Start ##### */}
                <div className="oneMusic-buy-now-area mb-100">
                <div className="container">
                    <div className="row">
                    {/* Single Album Area */}
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="single-album-area">
                        <div className="album-thumb">
                            <img src="img/bg-img/b1.jpg" alt = "" />
                            {/* Album Price */}
                            <div className="album-price">
                            <p>$0.90</p>
                            </div>
                            {/* Play Icon */}
                            <div className="play-icon">
                            <a href="#" className="video--play--btn"><span className="icon-play-button" /></a>
                            </div>
                        </div>
                        <div className="album-info">
                            <a href="#">
                            <h5>Garage Band</h5>
                            </a>
                            <p>Radio Station</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album Area */}
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="single-album-area">
                        <div className="album-thumb">
                            <img src="img/bg-img/b2.jpg" alt = "" />
                        </div>
                        <div className="album-info">
                            <a href="#">
                            <h5>Noises</h5>
                            </a>
                            <p>Buble Gum</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album Area */}
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="single-album-area">
                        <div className="album-thumb">
                            <img src="img/bg-img/b3.jpg" alt = "" />
                        </div>
                        <div className="album-info">
                            <a href="#">
                            <h5>Jess Parker</h5>
                            </a>
                            <p>The Album</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album Area */}
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="single-album-area">
                        <div className="album-thumb">
                            <img src="img/bg-img/b4.jpg" alt = "" />
                        </div>
                        <div className="album-info">
                            <a href="#">
                            <h5>Noises</h5>
                            </a>
                            <p>Buble Gum</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <div className="load-more-btn text-center">
                        <a href="#" className="btn oneMusic-btn">Load More <i className="fa fa-angle-double-right" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* ##### Buy Now Area End ##### */}
                {/* ##### Add Area Start ##### */}
                <div className="add-area mb-100">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <div className="adds">
                        <a href="#"><img src="img/bg-img/add3.gif" alt = "" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* ##### Add Area End ##### */}
                {/* ##### Song Area Start ##### */}
                <div className="one-music-songs-area mb-70">
                <div className="container">
                    <div className="row">
                    {/* Single Song Area */}
                    <div className="col-12">
                        <div className="single-song-area mb-30 d-flex flex-wrap align-items-end">
                        <div className="song-thumbnail">
                            <img src="img/bg-img/s1.jpg" alt = "" />
                        </div>
                        <div className="song-play-area">
                            <div className="song-name">
                            <p>01. Main Hit Song</p>
                            </div>
                            <audio preload="auto" controls>
                            <source src="audio/dummy-audio.mp3" />
                            </audio>
                        </div>
                        </div>
                    </div>
                    {/* Single Song Area */}
                    <div className="col-12">
                        <div className="single-song-area mb-30 d-flex flex-wrap align-items-end">
                        <div className="song-thumbnail">
                            <img src="img/bg-img/s2.jpg" alt = "" />
                        </div>
                        <div className="song-play-area">
                            <div className="song-name">
                            <p>01. Main Hit Song</p>
                            </div>
                            <audio preload="auto" controls>
                            <source src="audio/dummy-audio.mp3" />
                            </audio>
                        </div>
                        </div>
                    </div>
                    {/* Single Song Area */}
                    <div className="col-12">
                        <div className="single-song-area mb-30 d-flex flex-wrap align-items-end">
                        <div className="song-thumbnail">
                            <img src="img/bg-img/s3.jpg" alt = "" />
                        </div>
                        <div className="song-play-area">
                            <div className="song-name">
                            <p>01. Main Hit Song</p>
                            </div>
                            <audio preload="auto" controls>
                            <source src="audio/dummy-audio.mp3" />
                            </audio>
                        </div>
                        </div>
                    </div>
                    {/* Single Song Area */}
                    <div className="col-12">
                        <div className="single-song-area mb-30 d-flex flex-wrap align-items-end">
                        <div className="song-thumbnail">
                            <img src="img/bg-img/s4.jpg" alt = "" />
                        </div>
                        <div className="song-play-area">
                            <div className="song-name">
                            <p>01. Main Hit Song</p>
                            </div>
                            <audio preload="auto" controls>
                            <source src="audio/dummy-audio.mp3" />
                            </audio>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* ##### Song Area End ##### */}
                
                <Footer/>
            </div>

            )
    }
        
}