import React, { Component } from 'react'

import { Link } from 'react-router-dom';
export default class Lista extends Component{
    

    render(){
        return(
            
            


     
                        <div className="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item t c p">
                            <div className="single-album">
                                <img src={this.props.image} alt =""/>
                            <div className="album-info">
                            <Link to={{
                                        pathname: '/playlist',
                                        list_id : this.props.keys,                                        
                                        }} className="nav-brand" ><h5>{this.props.name}</h5></Link>
                            <p>Second Song</p>
                            </div>
                        </div>
                        </div>

            
        )
    }
    
}
