import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import gql from "graphql-tag";
import ApolloClient from 'apollo-boost';
import baseURL from "../url"
import baseURLFiles from './../urlFiles'
const client = new ApolloClient({
    uri: `${baseURL}`
  });
export default class Playlist extends Component{
    state = {
        
        songs:[]
      }
    async componentWillMount(){
        console.log(this.props.location)
        await client.query({
            query: gql`
            query{
                ListById(id:${this.props.location.list_id}){
                id
                name
                song_vinculations{
                    song_id
                }      
                }
            }`
            })
            .then(data => {
            console.log(data.data);
            const songs =data.data.ListById.song_vinculations
            for (let index = 0; index < songs.length; index++) {
                client.query({
                    query: gql`
                    query{
                        playSong(idSong:"${songs[index].song_id}"){
                            path
                            }
                    }`
                    })
                    .then(data => {
                    songs[index].path = data.data.playSong.path
                    this.setState({ songs });
                    })
                    .catch(error => {console.error(error)});
                
            }
            })
            .catch(error => {console.error(error)});
        
    }
    render(){
        
        
        return(
            
            

                     <div>
     
                        <section className="featured-artist-area section-padding-100 bg-img bg-overlay bg-fixed" style={{backgroundImage: 'url(img/bg-img/bg-4.jpg)'}}>
                        {/* ##### Song Area Start ##### */}
                        <Menu/>
                        <p></p>
                        <br></br>
                        <br></br>
                        <br></br>
                            <div className="one-music-songs-area mb-70">
                                <div className="container">
                                <div className="row">
                                    {/* Single Song Area */}
                                    
                                    {this.state.songs.map(function(song){
                                    return <div className="col-12">
                                    <div className="single-song-area mb-30 d-flex flex-wrap align-items-end">
                                        <div className="song-thumbnail">
                                        <img src="img/bg-img/s1.jpg" alt />
                                        </div>
                                        <div className="song-play-area">
                                        <div className="song-name">
                                            <p>01. Main Hit Song</p>
                                        </div>
                                        <audio preload="auto" controls>
                                            <source src={`${baseURLFiles}/getfile/${song.path}`}/>
                                        </audio>
                                        </div>
                                    </div>
                                    </div>
                                    })}
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
