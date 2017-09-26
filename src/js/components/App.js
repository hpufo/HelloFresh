import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import RecipeList from './RecipeList';
import Login from './Login';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/recipes" exact component={RecipeList} />
        </Switch>
      </HashRouter>
    );
  }
}