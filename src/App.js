
import React, { Component } from 'react';
import './App.css';
import Router from './components/Router'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import store from './store';

const client = new ApolloClient({
  uri: "http://192.168.99.101:5000/graphql"
});

class App extends Component {

  constructor() {
      super()
      this.state = {  s_users: []}
     
    }
   
    /*componentWillMount(){
       if (localStorage.getItem('jwtToken')) {
        client.query({
          query: gql`
          query{
            userInfo(token:{
              token:"${localStorage.getItem('jwtToken')}"
            }){
              id
              username
              email
            }
          }
          `
        })
        .then(data => {
          //console.log(data.data.userInfo)
          this.setState({s_users: data.data.userInfo});
        })
        .catch(error => {console.error(error)
  });
      }
    }*/
  
    render() {  
      //console.log(store.getState().aut )
      if (localStorage.getItem('jwtToken')) {
      store.dispatch({
           type: "ADD_TO_STORE",
           id: this.state.s_users.id,
           username: this.state.s_users.username,
           email: this.state.s_users.email,
           aut: true
       })}
     // const { children } = this.props;
     //<Content body={children} />
      return (
        
        <div >
          <Router/>
        </div>
  
      );
    }
  }
  
  export default App;
