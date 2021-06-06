import {
  ADD_NEW_TASK,
  ADD_NEW_PROJECT,
  CHANGE_ACTIVE_ID,
  GET_NORMALIZE_STATE
} from "./toDoTypes";

export const addNewTask = (newTitle, newDescription) => {
  return {
    type:  ADD_NEW_TASK,
    newTitle: newTitle,
    newDescription: newDescription,
  };
};

export const addNewProject = (newProjectTitle) => {
  return {
    type: ADD_NEW_PROJECT,
    newTitle: newProjectTitle
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