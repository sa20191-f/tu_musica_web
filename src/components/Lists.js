import React, { Component } from 'react'
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
		//this.state = { data_a: [] , count: 1}
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
      //this.setState({ data_a: data.data.allResources})
    })
	.catch(error => console.error(error));
	//this.handleCountClick = this.handleCountClick.bind(this);


	}
    

    render(){
        
        return(
            <div>
                <Menu/>
                {/* ##### Breadcumb Area Start ##### */}
                <section className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url(img/bg-img/breadcumb3.jpg)'}}>
                <div className="bradcumbContent">
                    <p>See what’s new</p>
                    <h2>Latest Albums</h2>
                </div>
                </section>
                {/* ##### Breadcumb Area End ##### */}
                {/* ##### Album Catagory Area Start ##### */}
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
                    {/* Single Album */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item t c p">
                        <div className="single-album">
                        <img src="img/bg-img/a1.jpg" alt />
                        <div className="album-info">
                            <a href="#">
                            <h5>The Cure</h5>
                            </a>
                            <p>Second Song</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item s e q">
                        <div className="single-album">
                        <img src="img/bg-img/a2.jpg" alt />
                        <div className="album-info">
                            <a href="#">
                            <h5>Sam Smith</h5>
                            </a>
                            <p>Underground</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item w f r">
                        <div className="single-album">
                        <img src="img/bg-img/a3.jpg" alt />
                        <div className="album-info">
                            <a href="#">
                            <h5>Will I am</h5>
                            </a>
                            <p>First</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item t g u">
                        <div className="single-album">
                        <img src="img/bg-img/a4.jpg" alt />
                        <div className="album-info">
                            <a href="#">
                            <h5>The Cure</h5>
                            </a>
                            <p>Second Song</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item d h v">
                        <div className="single-album">
                        <img src="img/bg-img/a5.jpg" alt />
                        <div className="album-info">
                            <a href="#">
                            <h5>DJ SMITH</h5>
                            </a>
                            <p>The Album</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item t i x">
                        <div className="single-album">
                        <img src="img/bg-img/a6.jpg" alt />
                        <div className="album-info">
                            <a href="#">
                            <h5>The Ustopable</h5>
                            </a>
                            <p>Unplugged</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item b j y">
                        <div className="single-album">
                        <img src="img/bg-img/a7.jpg" alt />
                        <div className="album-info">
                            <a href="#">
                            <h5>Beyonce</h5>
                            </a>
                            <p>Songs</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item a k z">
                        <div className="single-album">
                        <img src="img/bg-img/a8.jpg" alt />
                        <div className="album-info">
                            <a href="#">
                            <h5>Aam Smith</h5>
                            </a>
                            <p>Underground</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item w l number">
                        <div className="single-album">
                        <img src="img/bg-img/a9.jpg" alt />
                        <div className="album-info">
                            <a href="#">
                            <h5>Will I am</h5>
                            </a>
                            <p>First</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item d m">
                        <div className="single-album">
                        <img src="img/bg-img/a10.jpg" alt />
                        <div className="album-info">
                            <a href="#">
                            <h5>DJ SMITH</h5>
                            </a>
                            <p>The Album</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item t n">
                        <div className="single-album">
                        <img src="img/bg-img/a11.jpg" alt />
                        <div className="album-info">
                            <a href="#">
                            <h5>The Ustopable</h5>
                            </a>
                            <p>Unplugged</p>
                        </div>
                        </div>
                    </div>
                    {/* Single Album */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item b o">
                        <div className="single-album">
                        <img src="img/bg-img/a12.jpg" alt />
                        <div className="album-info">
                            <a href="#">
                            <h5>Beyonce</h5>
                            </a>
                            <p>Songs</p>
                        </div>
                        </div>
                    </div>
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
                            <img src="img/bg-img/b1.jpg" alt />
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
                            <img src="img/bg-img/b2.jpg" alt />
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
                            <img src="img/bg-img/b3.jpg" alt />
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
                            <img src="img/bg-img/b4.jpg" alt />
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
                        <a href="#"><img src="img/bg-img/add3.gif" alt /></a>
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
                            <img src="img/bg-img/s1.jpg" alt />
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
                            <img src="img/bg-img/s2.jpg" alt />
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
                            <img src="img/bg-img/s3.jpg" alt />
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
                            <img src="img/bg-img/s4.jpg" alt />
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