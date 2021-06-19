import {
  ADD_NEW_TASK,
  ADD_NEW_PROJECT,
  CHANGE_ACTIVE_ID,
  GET_NORMALIZE_STATE,
  CHANGE_TASK,
  SET_PROJECTS,
  SET_TASKS
} from "./toDoTypes";

const initialState = {
  activeProjectId: null,
  normState: {
    projectById: {},
    tasksByIds: {}
  },
  projects : null,
};

const toDoReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_NEW_TASK:
      let newTasks = [...state.projects.filter(project => project.id === action.activeProjectId)[0].tasks, action.task]
      let newProjects = state.projects.map(project => project.id === action.activeProjectId ? {...project, tasks: newTasks} : {...project})
      // newProjects[state.activeProjectId - 1].tasks = [...newTasks]

      return {
        ...state,
        projects: [...newProjects],
      };
    
    case CHANGE_TASK: {
      console.log(action.activeProjectId)
      let newProjects = [...state.projects]
      let index = state.projects.findIndex(project => project.id === action.activeProjectId)
      newProjects[index].tasks = newProjects[index].tasks.map(task => task.id === action.task.id ? action.task : task);
      return {
        ...state,
        projects: newProjects
      }
    }

    case SET_TASKS: {
      let newProjects = [...state.projects];
      console.log(action.projectId)
      newProjects[newProjects.findIndex(project => project.id == action.projectId)].tasks = action.tasks;
      return {
        ...state,
        projects: newProjects
      }

    }
    
    case ADD_NEW_PROJECT:
      let newProjectId = action.projectId;
      let newProjectsToAdd = [...state.projects, {
            id: newProjectId,
            name: action.newTitle,
            tasks: []
        }];
      return {
        ...state,
        projects: [...newProjectsToAdd],
      };

    case CHANGE_ACTIVE_ID:
      return {
        ...state,
        activeProjectId: action.activeId

      };
      
    case SET_PROJECTS: {
      return {
        ...state,
        projects: action.projects.map(project => ({...project, tasks: null}))
      }
    }

    case GET_NORMALIZE_STATE:
      let projectById = {};
      let tasksByIds = {};
      console.log(state.projects)
      for (let i = 0; i < state.projects.length; i++) {
        let tasksArray = [];
        if (state.projects[i].tasks) {
          for (let j = 0; j < state.projects[i].tasks.length; j++) {
            tasksArray.push(state.projects[i].tasks[j].id);
            tasksByIds[state.projects[i].tasks[j].id] = {
              id: state.projects[i].tasks[j].id,
              name: state.projects[i].tasks[j].name,
              description: state.projects[i].tasks[j].description,
              completed: state.projects[i].tasks[j].completed,
            }
          }
        }
        projectById[state.projects[i].id] = {
          id: state.projects[i].id,
          name: state.projects[i].name,
          tasksIds: [...tasksArray]
        }
      }
      return {
        ...state,
        normState: {projectById, tasksByIds}
      };

    default:
      return state;
  }
}

export default toDoReducer;