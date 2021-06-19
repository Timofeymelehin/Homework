import React from 'react'
import AddProject from '../AddProject/AddProject'
import Project from '../Project/Project'
import classes from './myTodoList.module.scss'
import {connect} from 'react-redux';
import {changeTask, setTasks, normalizeState} from '../../redux'
import APIService from '../../API/ApiService';
class MyTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects : this.props.projects,
            newTitle: '',
            activeProjectId: this.props.activeProjectId
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleChangeTask = this.handleChangeTask.bind(this);
        this.getTasks = this.getTasks.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.projects !== this.state.projects) {
            console.log('clear')
            this.setState({});
        }
    }

    handleTitleChange(e) {
        this.setState({
            newTitle: e.target.value
        })
    }

    handleChangeTask = (task) => {
        console.log('newTask = ',task)
        APIService.changeTask(task, task.projectId).then(response => {
            this.props.changeTask(task, task.projectId)
            this.props.normalizeState()
        })
        // this.props.changeTask(task, task.projectId)
    }

    getTasks = (projectId) => {
        APIService.getTasks(projectId).then(response => {
            console.log(response)
            this.props.setTasks(response, projectId)
            this.props.normalizeState()
        })
    }

    render() {
        if (this.props.projects === null) return <div>Loading</div>
        
        return (
            <div>
                <ul className={classes.myTodoList}>
                {this.props.projects.map(project => (
                    <li><Project id={project.id} name={project.name} tasks={project.tasks} key={project.id} changeActiveId={this.props.changeActiveId} handleChangeTask={this.handleChangeTask}
                    getTasks={this.getTasks}
                    /></li>
                ))}
                </ul>
                <AddProject
                    addNewProject={this.props.addNewProject}
                    handleTitleChange={this.handleTitleChange}
                    newTitle={this.state.newTitle}
                />
                {/* <div onClick={this.props.normalizeState} className={classes.normalizeButton}>Normalize State</div> */}
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeTask: (task, projectId) => dispatch(changeTask(task, projectId)),
    setTasks: (tasks, projectId) => dispatch(setTasks(tasks, projectId)),
    normalizeState: () => dispatch(normalizeState())
})

export default connect(null, mapDispatchToProps)(MyTodoList);
