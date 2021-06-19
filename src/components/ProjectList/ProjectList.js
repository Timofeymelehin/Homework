import React, { Component } from 'react'
import Task from '../Task/Task'
import AddTask from '../AddTask/AddTask'
import classes from './projectList.module.scss'
import {
    Link, Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import { addNewTask, changeActiveId, changeTask, normalizeState, setProjects, setTasks } from "../../redux";
import APIService from '../../API/ApiService';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.activeProjectId)
        console.log(this.props.normState)
        this.state = {
            id: this.props.activeProjectId,
            newTitle: '',
            newDescription: '',
            projects: this.props.projects,
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleChangeTask = this.handleChangeTask.bind(this)
        this.handleAddTask = this.handleAddTask.bind(this)
    }

    handleTitleChange(e) {
        // e.preventDefault();
        this.setState({
            newTitle: e.target.value
        })
    }

    handleDescriptionChange(e) {
        // e.preventDefault();
        this.setState({
            newDescription: e.target.value
        })
    }

    handleChangeTask = (task) => {
        console.log(this.props.activeProjectId)
        APIService.changeTask(task, this.props.activeProjectId).then(response => {
            this.props.changeTask(task,this.props.activeProjectId)
            this.props.normalizeState()
        })
        // this.props.changeTask(task, this.props.activeProjectId)
    }

    componentWillMount() {
        this.props.changeActiveId(parseInt(this.props.match.params.id))
        if (this.props.projects === null) {
            APIService.getProjects().then(projects => {
                console.log('projects is loaded')  
                this.props.setProjects(projects)
                this.props.normalizeState()
                APIService.getTasks(parseInt(this.props.match.params.id)).then(response => {
                    console.log('tasks loaded')
                    this.props.setTasks(response, parseInt(this.props.match.params.id))
                    this.props.normalizeState()
                }).catch(error => {
                    this.setState({id: "NOTEXIST"})
                })
            })
        } else {
            APIService.getTasks(parseInt(this.props.match.params.id)).then(response => {
                this.props.setTasks(response, parseInt(this.props.match.params.id))
                this.props.normalizeState()
            }).catch(error => {
                this.setState({id: "NOTEXIST"})
            })
        }
    }

    handleAddTask(name, description) {
        APIService.addTask({name, description}, this.props.activeProjectId).then(response => {
            this.props.addNewTask(response, this.props.activeProjectId)
            this.props.normalizeState()
        })
    }

    render() {  
        if (this.state.id === "NOTEXIST") return <Redirect to='/'></Redirect>
        console.log(this.props.normState.projectById, ' ',parseInt(this.props.match.params.id))
        console.log(Object.keys(this.props.normState.projectById).filter(key => key.id == parseInt(this.props.match.params.id)))
        if (Object.keys(this.props.normState.projectById).filter(key => key === this.props.match.params.id).length === 0) return <div>Loading</div>
        return (
            <div className={classes.project}>
                <h3 className={classes.title}>{this.props.normState.projectById[this.props.activeProjectId].name}</h3>
                <p className={classes.goBackLink}><Link to="/" >Go to main page</Link></p>
                {
                    <ul className={classes.list}>
                        {this.props.normState.projectById[this.props.activeProjectId].tasksIds.map((taskId, key) => (
                            <li><Task {...this.props.normState.tasksByIds[taskId]} key={key} handleChangeTask={this.handleChangeTask}/></li>
                        ))}
                    </ul>

                }
                <AddTask
                    addNewTask={this.handleAddTask}
                    handleTitleChange={this.handleTitleChange}
                    handleDescriptionChange={this.handleDescriptionChange}
                    newTitle={this.state.newTitle}
                    newDescription={this.state.newDescription} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
  return {
    projects: state.toDo.projects,
    activeProjectId: state.toDo.activeProjectId,
    normState: state.toDo.normState
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeActiveId: (newId) => dispatch(changeActiveId(newId)),
  addNewTask: (newTitle, newDescription) => dispatch(addNewTask(newTitle, newDescription)),
  changeTask: (task, projectId) => dispatch(changeTask(task, projectId)),
  normalizeState : () => dispatch(normalizeState()),
  setProjects: (projects) => dispatch(setProjects(projects)),
  setTasks: (tasks, projectId) => dispatch(setTasks(tasks, projectId)),
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);