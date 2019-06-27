import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'

export default class Playlist extends Component{
    

    render(){
        
        return(
            
            

                     <div>
     
                        <section className="featured-artist-area section-padding-100 bg-img bg-overlay bg-fixed" style={{backgroundImage: 'url(img/bg-img/bg-4.jpg)'}}>
                        {/* ##### Song Area Start ##### */}
                        <Menu/>
                        <br></br>
                        <br></br>
                        <br></br>
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
                            
                        </section>
                        <Footer/>
                    </div>

            
        )
    }
    
}
