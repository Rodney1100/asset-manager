import Home from "./pages/Home";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import "./App.css";
const httpLink = createHttpLink({ uri: "http://localhost:3001/graphql" });

const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      {/* <Router> */}
      <div className="flex-column justify-flex-start min-100-vh">
        {/* <Header /> */}
        <div className="container">
          {/* <Switch> */}
          {/* <Route exact path="/" component={Home} /> */}
          <Home />
        
          {/* </Switch> */}
        </div>
        {/* <Footer /> */}
      </div>
      {/* </Router> */}
    </ApolloProvider>
  );
}

export default App;
