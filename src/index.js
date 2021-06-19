import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import ProjectList from './components/ProjectList/ProjectList';
import './styles.css';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./redux/store";

function AppFullEdition() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/project" component={ProjectList} />
        </Switch>
      </BrowserRouter>
      </Provider>
  )
}


ReactDOM.render(
  <AppFullEdition />,
  document.getElementById('root')
);

