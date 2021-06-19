import {
  ADD_NEW_TASK,
  ADD_NEW_PROJECT,
  CHANGE_ACTIVE_ID,
  GET_NORMALIZE_STATE,
  CHANGE_TASK,
  SET_PROJECTS,
  SET_TASKS
} from "./toDoTypes";

export const addNewTask = (task, activeProjectId) => {
  return {
    type:  ADD_NEW_TASK,
    task: task,
    activeProjectId: activeProjectId,
  };
};

export const addNewProject = (newProjectTitle, projectId) => {
  return {
    type: ADD_NEW_PROJECT,
    newTitle: newProjectTitle,
    projectId: projectId
  };
};

export const changeActiveId = (activeId) => {
  return {
    type: CHANGE_ACTIVE_ID,
    activeId: activeId
  };
};

export const normalizeState = () => {
  return {
    type: GET_NORMALIZE_STATE
  };
};

export const changeTask = (task, activeProjectId) => {
  return {
    type: CHANGE_TASK,
    task: task,
    activeProjectId: activeProjectId
  }
}

export const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects: projects
  }
}

export const setTasks = (tasks, projectId) => {
  return {
    type: SET_TASKS,
    tasks: tasks,
    projectId: projectId
  }
}