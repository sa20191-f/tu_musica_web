import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'

export default class Play extends Component{
    state = {
        song: ""
      }
    componentDidMount() {
        console.log(this.props.location)
        const url = 'http://192.168.99.101:3002/getfile/'+this.props.location.path
        console.log(url)
        this.setState({ song: url });
        console.log(this.state)

      }


    render(){
        console.log(this.state)
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
                            <img src="" alt = "nada" />
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
                                <source src={this.state.song} />
                            </audio>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                
                
                <Footer/>
            </div>
        )
    }
    
}

