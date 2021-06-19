import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import ProjectListWrapper from './components/ProjectList/ProjectListWrapper';
import ThemeContext from './context';
import StateContext from './anotherContext';
import './styles.css';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

function ChangeTheme() {
  let projectsStart = [
    {
      id: 1,
      name: 'Home',
      tasks: [
        {
          id: 1,
          name: 'Throw out the trash',
          description: 'Collect all the unnecessary things. Put them in a garbage bag. Throw it out',
          completed: true,
        },
        {
          id: 2,
          name: 'Prepare dinner',
          description: 'Peel the potatoes, fry and cut the cucumber',
          completed: false,
        },
        {
          id: 3,
          name: 'Walk the dog',
          description: 'Find the leash, find the dog, nuzzle the leash and go outside with the dog',
          completed: true,
        },

      ]
    },
    {
      id: 2,
      name: 'Health',
      tasks: [
        {
          id: 1,
          name: 'Go to the gym',
          description: 'Collect water, collect a bag of things and walk to the gym',
          completed: false,
        },
      ]
    },
    {
      id: 3,
      name: 'Car',
      tasks: [
        {
          id: 1,
          name: 'Change the wheels to summer ones',
          description: 'Go to the garage, get replacement tires, take off the winter tires, put on the summer tires',
          completed: false,
        },
      ]
    },
  ];
  const [theme, setTheme] = useState('appLight')
  const [activeProjectId, setActiveId] = useState(1)
  const [projects, setProjects] = useState(projectsStart)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StateContext.Provider value={{ projects, activeProjectId, setActiveId, setProjects }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/project" component={ProjectListWrapper} />
        </Switch>
      </BrowserRouter>
      </StateContext.Provider>
    </ThemeContext.Provider>
  )
}

ReactDOM.render(
  <ChangeTheme />,
  document.getElementById('root')
);

