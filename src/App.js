import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "./Components/Home";
import { AppDiv, Title } from "./styles/App.style";
import { GlobalStyle } from "./styles/GlobalStyles.style";

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
});

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle/>
    <AppDiv>
      <Title>
        My first Apollo app{" "}
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </Title>
      <Home/>
    </AppDiv>
  </ApolloProvider>
);
export default App;
