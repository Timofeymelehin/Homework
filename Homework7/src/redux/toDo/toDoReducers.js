import {
  ADD_NEW_TASK,
  ADD_NEW_PROJECT,
  CHANGE_ACTIVE_ID,
  GET_NORMALIZE_STATE
} from "./toDoTypes";

const initialState = {
  activeProjectId: 1,
  normState: {},
  projects : [
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
  ],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      let newId = state.projects[state.activeProjectId - 1].tasks.length + 1;
      let newTasks = [...state.projects[state.activeProjectId - 1].tasks, {
        id: newId,
        name: action.newTitle,
        description: action.newDescription,
        completed: false
      }]
      let newProjects = [...state.projects]
      newProjects[state.activeProjectId - 1].tasks = [...newTasks]

      return {
        ...state,
        projects: [...newProjects],
      };

    case ADD_NEW_PROJECT:
      let newProjectId = state.projects.length + 1;
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

    case GET_NORMALIZE_STATE:
      let taskCounterId = 1;
      let projectById = {};
      let tasksByIds = {};
      for (let i = 0; i < state.projects.length; i++) {
        let tasksArray = [];
        for (let j = 0; j < state.projects[i].tasks.length; j++) {
          tasksArray.push(taskCounterId);
          tasksByIds[taskCounterId] = {
            id: taskCounterId,
            name: state.projects[i].tasks[j].name,
            description: state.projects[i].tasks[j].description,
            completed: state.projects[i].tasks[j].completed,
          }
          taskCounterId++;
        }
        projectById[i+1] = {
          id: i + 1,
          name: state.projects[i].name,
          tasksIds: [...tasksArray]
        }
      }
      console.log( {projectById, tasksByIds})
      return {
        ...state,
        normState: {projectById, tasksByIds}
      };

    default:
      return state;
  }
}

export default toDoReducer;