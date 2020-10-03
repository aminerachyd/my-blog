import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import Navbar from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Homepage } from "./components/homepage/Homepage";
import { About } from "./components/about/About";
import EditAbout from "./components/about/EditAbout";
import { Blog } from "./components/blog/Blog";
import SingleBlogPost from "./components/singleblogpost/SingleBlogPost";
import EditSingleBlogPost from "./components/singleblogpost/EditSingleBlogPost";
import NewSingleBlogPost from "./components/singleblogpost/NewSingleBlogPost";
import Login from "./components/login/Login";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/blog-post/:id" component={SingleBlogPost} />
          <Route exact path="/about" component={About} />
          <PrivateRoute
            exact
            path="/blog/new-post"
            component={NewSingleBlogPost}
          />
          <PrivateRoute
            exact
            path="/blog/blog-post/:id/edit"
            component={EditSingleBlogPost}
          />
          <PrivateRoute exact path="/about/edit" component={EditAbout} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
