import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, Portfolio, Blog, Contact } from "./containers";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ Home }/>
        <Route path="/ABOUT" component={ About }/>
        <Route path="/PORTFOLIO" component={ Portfolio }/>
        <Route path="/BLOG" component={ Blog }/>
        <Route path="/CONTACT" component={ Contact }/>
      </div>
    );
  }
}

export default App;