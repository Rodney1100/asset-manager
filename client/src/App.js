import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SinglePost from "./pages/SinglePost";
import creatPost from "./components/PostForm";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Auth from "./utils/auth";
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
// import "./App.css";
const httpLink = createHttpLink({ uri: "http://localhost:3001/graphql" });

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="wholePage">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Profile/:username?" component={Profile} />
              {Auth.loggedIn()?(
                <Route exact path="/CreatePost" component={creatPost} />
              ):(
                <>
                <h1> You need to Login to use this feature.</h1></>
                )
              }
              <Route exact path="/SinglePost/:_id?" component={SinglePost} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
