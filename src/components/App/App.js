import MyTodoList from '../MyTodoList/MyTodoList';
import classes from './App.module.scss';
import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { addNewProject, changeActiveId, normalizeState } from "../../redux";

import APIService from '../../API/ApiService';
import { setProjects } from '../../redux/toDo/toDoActions';

function App({projects, activeProjectId, changeActiveId, addNewProject, normalizeState, setProjects }) {

  useEffect(() => {
    if (projects === null) {
      APIService.getProjects().then(projects => {
        setProjects(projects)
        normalizeState()
      })
    }
  }, [projects])

  const handleAddProject = (name) => {
    APIService.addProject(name).then(project => {
      console.log('RESPONSE=',project)
      addNewProject(name, project.id)
      normalizeState()
    })
  }

  return (
    <div className={classes.appLight}>
      <h1 className={classes.app__title}>Hello and Welcome! This is the Task Tracker!</h1>
      <MyTodoList
        projects={projects}
        activeProjectId={activeProjectId}
        changeActiveId={changeActiveId}
        addNewProject={handleAddProject}
        normalizeState={normalizeState}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.toDo.projects,
    activeProjectId: state.toDo.activeProjectId,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewProject: (newTitle, id) => dispatch(addNewProject(newTitle, id)),
  changeActiveId: (newId) => dispatch(changeActiveId(newId)),
  normalizeState : () => dispatch(normalizeState()),
  setProjects: (projects) => dispatch(setProjects(projects))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
