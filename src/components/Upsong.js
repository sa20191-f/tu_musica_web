import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import axios from 'axios';
import ApolloClient from 'apollo-boost';
import baseURL from "../url"
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const uploadOneFile = () => {
  let input
  let input2
  let input3
  
  const upload= ()=>{
    let data= new FormData()
    let file =  document.getElementById('file_input').files[0]
    console.log(file.name);
    let operations='{ "query": "mutation ($file: Upload!) { uploadSong(file:$file ) { filename } }", "variables": { "file": null } }'
    console.log(operations)
    data.append("operations",operations)
    data.append('map','{ "0": ["variables.file"] }')
    data.append('0',file)
    axios.post('http://172.20.10.8:5000/graphql',data,{
        headers: { 'Content-Type': 'multipart/form-data'  }
    } )
    
  }
    return (   
    <div>
        <div >
           <Menu height="200px"/> 
        </div>
        
        <div className="container">
            <div className="row">
            <form style={{paddingTop: 200 + 'px'}}>
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
            </div>
            
       </div>
        <Footer/>
    </div>
    
  );
};

export default uploadOneFile