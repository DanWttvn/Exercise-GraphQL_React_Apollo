import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Launches from "./components/Launches"
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql" // the endpoint of the server
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h1>Space X</h1>
        <Launches/>
      </div>
    </ApolloProvider>
  );
}

export default App;
