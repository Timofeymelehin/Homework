import MyTodoList from '../MyTodoList/MyTodoList';
import classes from './App.module.scss';
import React from 'react'
import { connect } from 'react-redux';
import { addNewProject, changeActiveId, normalizeState } from "../../redux";

function App({projects, activeProjectId, changeActiveId, addNewProject, normalizeState }) {

  return (
    <div className={classes.appLight}>
      <h1 className={classes.app__title}>Hello and Welcome! This is the Task Tracker!</h1>
      <MyTodoList
        projects={projects}
        activeProjectId={activeProjectId}
        changeActiveId={changeActiveId}
        addNewProject={addNewProject}
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
  addNewProject: (newTitle) => dispatch(addNewProject(newTitle)),
  changeActiveId: (newId) => dispatch(changeActiveId(newId)),
  normalizeState : (projects) => dispatch(normalizeState(projects)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
