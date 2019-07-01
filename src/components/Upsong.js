import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import axios from 'axios';
import ApolloClient from 'apollo-boost';
import baseURL from "../url"
import baseURLFiles from "../urlFiles"
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import swal from 'sweetalert2'
import {
    MDBContainer,
    MDBRow,
    MDBCol
  } from "mdbreact";

  const client = new ApolloClient({
    uri: `${baseURL}`
  });

const uploadOneFile = () => {
  let input
  let input2
  let input3
  
  const upload= ()=>{
    let data= new FormData()
    let file =  document.getElementById('file_input').files[0]
    let name = document.getElementById('name').value
    let artist = document.getElementById('artist').value
    data.append('myFile',file)
    swal.fire({title: 'Uploading! ...',
    showConfirmButton: false,
    allowOutsideClick: false
      });
    axios.post(`${baseURLFiles}/upload_song`,data,{
        headers: { 'Content-Type': 'multipart/form-data'  }
    } ).then(function (response) {
        // handle success
        //console.log(response);
        client.mutate({
            mutation: gql`
            mutation{
                uploadInfoSong(infoSong: {
                    song_name: "${name}"
                    artist: "${artist}"
                    path: "${response.data.filename}"                
                }){
                    song_name
                    artist
                }
            }`
            })
            .then(data => {
            console.log(data.data);
            swal.fire("The song has been uploaded",'','success');
            setTimeout(function () {window.location.reload();}, 2000);
            })
            .catch(error => {console.error(error)});
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    
  }
    return (   
    <div>
        <div >
           <Menu height="200px"/> 
        </div>
        {/* ##### Breadcumb Area Start ##### */}
        <section className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url(img/bg-img/breadcumb3.jpg)'}}>
        <div className="bradcumbContent">
            <p>Share new music</p>
            <h2>Sube tus canciones</h2>
            <br></br>
            <br></br>
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
            <div class="form-group">
                <label for="exampleInputEmail1">Song name</label>
                <input
                    type="text"
                    id='name'
                    className="form-control"
                    ref={node => {
                    input = node;
                    
                    }}
                ></input>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Artist</label>
                <input
                    type="text"
                    id='artist'
                    className="form-control"
                    ref={node => {
                    input2 = node;
                    
                    }}
                ></input>
            </div>
            <div class="form-gropu">
                
                <label for="exampleCheck1">Choose a file</label>
                <input
                    type="file"
                    id = "file_input"
                    className="form-control-file"
                    required
                    ref={node => {
                        input3 = node;
                        
                        }}
                    ></input> 
            </div>
            <button type="button" class="btn btn-primary" onClick={()=>upload()} >Submit</button>
            
             
            
            
            </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>
    </div>
    
  );
};

export default uploadOneFile