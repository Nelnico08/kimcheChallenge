import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "./Components/Home";

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>
        My first Apollo app{" "}
        <span role="img" aria-label="Rocket">
          🚀
        </span>
        <Home/>
      </h2>
    </div>
  </ApolloProvider>
);
export default App;
