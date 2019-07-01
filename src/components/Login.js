import React, { Component } from 'react'
import MenuLanding from './MenuLanding'
import swal from 'sweetalert2'
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";
import baseURLFront from '../urlFront';
import baseURL from "../url"
const client = new ApolloClient({
  uri: `${baseURL}`
});

export default class Login extends Component{
    constructor() {
        super();
        this.state = { email: "", password: "", username: "", s_users: [], error: null};
      }

      setField (e) {
        if(e.target.id === 'email'){
          this.setState({
            email: e.target.value
          })
          }
          if(e.target.id === 'password'){
          this.setState({
            password: e.target.value
          })
          }
          if(e.target.id === 'name'){
            this.setState({
              username: e.target.value
          })
          }
        }

        handleSubmit = (e) =>{
            e.preventDefault()
            
            if((this.state.username === "") || (this.state.email === "") || (this.state.password === "")){
              swal.fire("Digite los campos señalados",'','error'); 
            }else{
              client.mutate({
                mutation: gql`
                mutation {
                    loginUser(user: {
                      username: "${this.state.username}"
                      email: "${this.state.email}"
                      password: "${this.state.password}"
                    }) {
                      token  {
                        token
                      }
                      id
                    }
                  }
                `
              })
           .then(data => {
             console.log(data.data.loginUser.token)
             localStorage.setItem("jwtToken", data.data.loginUser.token.token);
             if(this.state.error === null){
               setTimeout(function(){ window.location = `${baseURLFront}/`; },1000);
               swal.fire({
                 title:'Cargando...',
                 text:'',
                 timer:1000,
                 onOpen: () =>{
                   swal.showLoading()
                 }
               })
               }
           })
           .catch(error => {console.error(error)
             this.setState({error: "Email o contraseña incorrecta"})});
         }
        }


    render(){
        
        return(
            <div>
                <MenuLanding/>
                {/* ##### Breadcumb Area Start ##### */}
                <section className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url(img/bg-img/breadcumb3.jpg)'}}>
                <div className="bradcumbContent">
                    <p>TU MUSICA</p>
                    <h2>Login</h2>
                </div>
                </section>
                {/* ##### Breadcumb Area End ##### */}
                {/* ##### Login Area Start ##### */}
                <section className="login-area section-padding-100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="login-content">
                        <h3>Welcome Back</h3>
                        {/* Login Form */}
                        <div className="login-form">
                            <form action="#" method="post">
                                <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">User</label>
                                        <input type="text" className="form-control" id="name" aria-describedby="textHelp" placeholder="Enter User" onChange={e => this.setField(e)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter E-mail" onChange={e => this.setField(e)}/>
                                    <small id="emailHelp" className="form-text text-muted"><i className="fa fa-lock mr-2" />We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={e => this.setField(e)}/>
                                </div>
                                <button type="submit" onClick={this.handleSubmit} className="btn oneMusic-btn mt-30">Login</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* ##### Login Area End ##### */}
            </div>
        )
    }
        
}