import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Homepage } from "./components/homepage/Homepage";
import { About } from "./components/about/About";
import { Blog } from "./components/blog/Blog";
import { SingleBlogPost } from "./components/singleblogpost/SingleBlogPost";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/blog-post" component={SingleBlogPost} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
