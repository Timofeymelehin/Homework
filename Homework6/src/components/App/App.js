import MyTodoList from '../MyTodoList/MyTodoList';
import classes from './App.module.scss';
import React, { useState, useContext } from 'react'
import ThemeContext from '../../context.js'
import StateContext from '../../anotherContext.js'

function App() {
  const { theme, setTheme } = useContext(ThemeContext)
  const { projects, activeProjectId, setActiveId, setProjects } = useContext(StateContext)
  const [check, setCheck] = useState(false)
  
  const change = () => {
    setTheme(theme === 'appLight' ? 'appDark' : 'appLight')
    setCheck(!check)
  }

  const normalizeState = (projects) => {
    let taskCounterId = 1;
    let projectById = {};
    let tasksByIds = {};
    for (let i = 0; i < projects.length; i++) {
      let tasksArray = [];
      for (let j = 0; j < projects[i].tasks.length; j++) {
        tasksArray.push(taskCounterId);
        tasksByIds[taskCounterId] = {
          id: taskCounterId,
          name: projects[i].tasks[j].name,
          description: projects[i].tasks[j].description,
          completed: projects[i].tasks[j].completed,
        }
        taskCounterId++;
      }
      projectById[i+1] = {
        id: i + 1,
        name: projects[i].name,
        tasksIds: [...tasksArray]
      }
    }
    return { projectById, tasksByIds };
  }

  return (
    <div className={check ? classes.appLight : classes.appDark}>
      <h1 className={classes.app__title}>Hello and Welcome! This is the Task Tracker!</h1>
      <div className={classes.changeTheme}
        onClick={()=>change()} >Chagne theme to {check ? 'dark' : 'light'} </div>
      <MyTodoList
        projects={projects}
        activeProjectId={activeProjectId}
        setActiveId={setActiveId}
        setProjects={setProjects}
        normalizeState={normalizeState}
      />
    </div>
  );
}

export default App;
