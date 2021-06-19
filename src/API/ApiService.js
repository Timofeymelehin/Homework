class APIService {
  constructor() {
    this.domain = 'http://valerystatinov.com'
    this.token = 'tochkatochka2'
  }

  doRequest = (endpoint, method = 'get', body = null) => {
    return fetch(`${this.domain}${endpoint}`, {
      method: method,
      headers: {
        Token: this.token
      },
      body: body ? JSON.stringify(body) : null
    }).then(data => method === 'put' ? data : data.json())
  }

  getProjects = () => {
    return this.doRequest('/api/projects/')
  }

  addProject = (projectName) => {
    return this.doRequest('/api/projects/', 'post', {
      name: projectName
    })
  }

  getTasks = (projectId) => {
    return this.doRequest(`/api/projects/${projectId}/tasks/`)
  }

  addTask = (task, projectId) => {
    return this.doRequest(`/api/projects/${projectId}/tasks/`, 'post', {
      name: task.name,
      description: task.description
    })
  }

  changeTask = (task, projectId) => {
    return this.doRequest(`/api/projects/${projectId}/tasks/${task.id}/`, 'put', {
      ...task,
      projectId: parseInt(projectId),
      priority: 3
    })
  }

}

let apiservice = new APIService();

export default apiservice;