import React from 'react';
import './App.css';
import Router from './components/Router'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
  uri: "http://192.168.99.101:5000/graphql"
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
      
    
    <Router/>
      
    </div>
    </ApolloProvider>
    
  );
}

export default App;
