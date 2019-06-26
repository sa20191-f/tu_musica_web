import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import Play from './Play'
import baseURL from "../url"
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

export default class AllSong extends Component{
    state = {
        persons: []
      }
      
      componentDidMount() {
        axios({
            url: `${baseURL}`,
            method: 'post',
            data: {
              query: `
                query {
                  songs {
                    id
                    path
                    song_name
                    artist
                    }
                  }
                `
            }
          }).then((result) => {
            console.log(result.data)
            const persons = result.data.data.songs
            this.setState({ persons });
            console.log(this.state)
          });
      }

    render(){
        
        return(
            
            <div style={{backgroundColor:'gray'}}>
                <Menu />
                <section className="miscellaneous-area section-padding-100-0">
                    <div className="container">
                    <div className="row">
                        {/* ***** Weeks Top ***** */}
                        <div className="col-12 col-lg-8">
                        <div className="weeks-top-area mb-100">
                            <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                            <p>See what’s new</p>
                            <h2>This week’s top</h2>
                            </div>
                            {/* Single Top Item */}
                            {this.state.persons.map(function(person){
                            return <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="100ms">
                            <div className="thumbnail">
                                <img src="img/bg-img/wt1.jpg" alt = "" />
                            </div>
                            <div className="content-">
                                <h6>{person.artist}</h6>
                                <p>Underground</p>
                                <ul>
                                    <li><Link to={{
                                        pathname: '/'+person.id,
                                        path: person.path                                        
                                        }}>Play</Link>
                                    </li>                                    
                                </ul>
                            </div>
                            </div>
                             })}
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

