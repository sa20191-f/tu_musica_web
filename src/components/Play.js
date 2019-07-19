import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import baseURLFiles from './../urlFiles'
import axios from 'axios';
import baseURL from "../url"
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import swal from 'sweetalert2'

export default class Play extends Component{
    state = {
        song: "",
        lists:[]
      }
    componentDidMount() {
        console.log(this.props.location)
        const url = `${baseURLFiles}/getfile/${this.props.location.path}`
        console.log(url)
        this.setState({ song: url });
        this.setState({ song_name: this.props.location.song_name });
        this.setState({ artist: this.props.location.artist });
        console.log(this.state)
        axios({
            url: `${baseURL}`,
            method: 'post',
            data: {
              query: `
                query {
                  allList {
                      id
                      name
                    }
                  }
                `
            }
          }).then((result) => {
            console.log(result.data)
            const lists = result.data.data.allList
            this.setState({ lists });
            console.log(this.state)
          });
      }

    
    render(){
        console.log(this.state)
        const client = new ApolloClient({
            uri: `${baseURL}`
          });
        const songVinculation = () => {
    
          client.mutate({
            mutation: gql`
            mutation{
                createSongVinculations(songvinculations:{
                  song_id:"${window.location.pathname.split('/')[1]}"
                  list_id:${parseInt(document.getElementById('select_list').value)}
                }){
                  song_id
                  id
                }
              }`
            })
            .then(data => {
            console.log(data.data);
            swal.fire("The song has been added",'','success');
            })
            .catch(error => {console.error(error)});
        }
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
                            
                        </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-8">
                        <div className="featured-artist-content">
                            {/* Section Heading */}
                            <div className="section-heading white text-left mb-30">
                            <p>{this.state.artist}</p>
                            <h2>{this.state.song_name}</h2>
                            </div>
                            <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at ipsum ac, dignissim iaculis ante. Donec in velit non elit pulvinar pellentesque et non eros.</p>
                            <div className="song-play-area">
                            <div className="song-name">
                                <p>01. Main Hit Song</p>
                            </div>
                            <audio preload="auto" controls>
                                <source src={this.state.song} />
                            </audio>
                            <p>Add the song to a list!</p>
                                <select id="select_list">
                                {this.state.lists.map(function(list){
                                    return <option value={list.id}>{list.name}</option>
                             })}
                                </select>
                                <br></br>
                                <br></br>
                                <button type="button" onClick={()=>songVinculation()}>Save</button>
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

