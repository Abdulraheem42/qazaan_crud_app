import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateBlog from "./components/pages/CreateBlog";
import Home from './components/pages/Home.js'
import DetailBlog from "./components/pages/DetailBlog";
function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/createblog' component={CreateBlog} />
                <Route path='/detailBlog/:id' component={DetailBlog} />
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
