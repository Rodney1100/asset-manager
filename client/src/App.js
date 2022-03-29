import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SinglePost from "./pages/SinglePost";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

// import "./App.css";
const httpLink = createHttpLink({ uri: "http://localhost:3001/graphql" });

const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Header/>
        <div>
          <div className="container">
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Profile/:username?" component={Profile} />
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
