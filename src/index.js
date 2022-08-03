import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { MoviesProvider } from "./modules/context";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//apollo setup
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </ApolloProvider>
  </React.StrictMode>
);
