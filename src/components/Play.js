import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'


export default class Play extends Component{
    

    render(){
        
        return(
            
            <div>
                <Menu/>
                <section className="featured-artist-area section-padding-100 bg-img bg-overlay bg-fixed" style={{backgroundImage: 'url(img/bg-img/bg-4.jpg)'}}>
                <br></br>
                <br></br>
                <br></br>
                    <div className="container">
                    <div className="row align-items-end">
                        <div className="col-12 col-md-5 col-lg-4">
                        <div className="featured-artist-thumb">
                            <img src="img/bg-img/fa.jpg" alt = "" />
                        </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-8">
                        <div className="featured-artist-content">
                            {/* Section Heading */}
                            <div className="section-heading white text-left mb-30">
                            <p>See what’s new</p>
                            <h2>Buy What’s New</h2>
                            </div>
                            <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at ipsum ac, dignissim iaculis ante. Donec in velit non elit pulvinar pellentesque et non eros.</p>
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
                </section>
                {/* ##### Miscellaneous Area Start ##### */}
                <section className="miscellaneous-area section-padding-100-0">
                    <div className="container">
                    <div className="row">
                        {/* ***** Weeks Top ***** */}
                        <div className="col-12 col-lg-4">
                        <div className="weeks-top-area mb-100">
                            <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                            <p>See what’s new</p>
                            <h2>This week’s top</h2>
                            </div>
                            {/* Single Top Item */}
                            <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="100ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/wt1.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <h6>Sam Smith</h6>
                                <p>Underground</p>
                            </div>
                            </div>
                            {/* Single Top Item */}
                            <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="150ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/wt2.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <h6>Power Play</h6>
                                <p>In my mind</p>
                            </div>
                            </div>
                            {/* Single Top Item */}
                            <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="200ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/wt3.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <h6>Cristinne Smith</h6>
                                <p>My Music</p>
                            </div>
                            </div>
                            {/* Single Top Item */}
                            <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="250ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/wt4.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <h6>The Music Band</h6>
                                <p>Underground</p>
                            </div>
                            </div>
                            {/* Single Top Item */}
                            <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="300ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/wt5.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <h6>Creative Lyrics</h6>
                                <p>Songs and stuff</p>
                            </div>
                            </div>
                            {/* Single Top Item */}
                            <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="350ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/wt6.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <h6>The Culture</h6>
                                <p>Pop Songs</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* ***** New Hits Songs ***** */}
                        <div className="col-12 col-lg-4">
                        <div className="new-hits-area mb-100">
                            <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                            <p>See what’s new</p>
                            <h2>New Hits</h2>
                            </div>
                            {/* Single Top Item */}
                            <div className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="100ms">
                            <div className="first-part d-flex align-items-center">
                                <div className="thumbnail">
                                <img src="img/bg-img/wt7.jpg" alt = "" />
                                </div>
                                <div className="content-">
                                <h6>Sam Smith</h6>
                                <p>Underground</p>
                                </div>
                            </div>
                            <audio preload="auto" controls>
                                <source src="audio/dummy-audio.mp3" />
                            </audio>
                            </div>
                            {/* Single Top Item */}
                            <div className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="150ms">
                            <div className="first-part d-flex align-items-center">
                                <div className="thumbnail">
                                <img src="img/bg-img/wt8.jpg" alt = "" />
                                </div>
                                <div className="content-">
                                <h6>Power Play</h6>
                                <p>In my mind</p>
                                </div>
                            </div>
                            <audio preload="auto" controls>
                                <source src="audio/dummy-audio.mp3" />
                            </audio>
                            </div>
                            {/* Single Top Item */}
                            <div className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="200ms">
                            <div className="first-part d-flex align-items-center">
                                <div className="thumbnail">
                                <img src="img/bg-img/wt9.jpg" alt = "" />
                                </div>
                                <div className="content-">
                                <h6>Cristinne Smith</h6>
                                <p>My Music</p>
                                </div>
                            </div>
                            <audio preload="auto" controls>
                                <source src="audio/dummy-audio.mp3" />
                            </audio>
                            </div>
                            {/* Single Top Item */}
                            <div className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="250ms">
                            <div className="first-part d-flex align-items-center">
                                <div className="thumbnail">
                                <img src="img/bg-img/wt10.jpg" alt = "" />
                                </div>
                                <div className="content-">
                                <h6>The Music Band</h6>
                                <p>Underground</p>
                                </div>
                            </div>
                            <audio preload="auto" controls>
                                <source src="audio/dummy-audio.mp3" />
                            </audio>
                            </div>
                            {/* Single Top Item */}
                            <div className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="300ms">
                            <div className="first-part d-flex align-items-center">
                                <div className="thumbnail">
                                <img src="img/bg-img/wt11.jpg" alt = "" />
                                </div>
                                <div className="content-">
                                <h6>Creative Lyrics</h6>
                                <p>Songs and stuff</p>
                                </div>
                            </div>
                            <audio preload="auto" controls>
                                <source src="audio/dummy-audio.mp3" />
                            </audio>
                            </div>
                            {/* Single Top Item */}
                            <div className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="350ms">
                            <div className="first-part d-flex align-items-center">
                                <div className="thumbnail">
                                <img src="img/bg-img/wt12.jpg" alt = "" />
                                </div>
                                <div className="content-">
                                <h6>The Culture</h6>
                                <p>Pop Songs</p>
                                </div>
                            </div>
                            <audio preload="auto" controls>
                                <source src="audio/dummy-audio.mp3" />
                            </audio>
                            </div>
                        </div>
                        </div>
                        {/* ***** Popular Artists ***** */}
                        <div className="col-12 col-lg-4">
                        <div className="popular-artists-area mb-100">
                            <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                            <p>See what’s new</p>
                            <h2>Popular Artist</h2>
                            </div>
                            {/* Single Artist */}
                            <div className="single-artists d-flex align-items-center wow fadeInUp" data-wow-delay="100ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/pa1.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <p>Sam Smith</p>
                            </div>
                            </div>
                            {/* Single Artist */}
                            <div className="single-artists d-flex align-items-center wow fadeInUp" data-wow-delay="150ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/pa2.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <p>William Parker</p>
                            </div>
                            </div>
                            {/* Single Artist */}
                            <div className="single-artists d-flex align-items-center wow fadeInUp" data-wow-delay="200ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/pa3.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <p>Jessica Walsh</p>
                            </div>
                            </div>
                            {/* Single Artist */}
                            <div className="single-artists d-flex align-items-center wow fadeInUp" data-wow-delay="250ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/pa4.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <p>Tha Stoves</p>
                            </div>
                            </div>
                            {/* Single Artist */}
                            <div className="single-artists d-flex align-items-center wow fadeInUp" data-wow-delay="300ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/pa5.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <p>DJ Ajay</p>
                            </div>
                            </div>
                            {/* Single Artist */}
                            <div className="single-artists d-flex align-items-center wow fadeInUp" data-wow-delay="350ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/pa6.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <p>Radio Vibez</p>
                            </div>
                            </div>
                            {/* Single Artist */}
                            <div className="single-artists d-flex align-items-center wow fadeInUp" data-wow-delay="400ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/pa7.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <p>Music 4u</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* ##### Miscellaneous Area End ##### */}
                <Footer/>
            </div>
        )
    }
    
}

