import React, { Component } from 'react'
import Task from '../Task/Task'
import AddTask from '../AddTask/AddTask'
import classes from './projectList.module.scss'
import {
    Link
} from "react-router-dom";

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.activeProjectId,
            name: this.props.projects[this.props.activeProjectId - 1 ].name,
            tasks: this.props.projects[this.props.activeProjectId - 1].tasks,
            newTitle: '',
            newDescription: '',
            projects: this.props.projects,
        };
        this.addNewTask = this.addNewTask.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    addNewTask(e) {
        e.preventDefault();
        let newId = this.state.tasks.length + 1;
        let newTasks = [...this.state.tasks, {
            id: newId,
            name: this.state.newTitle,
            description: this.state.newDescription,
            completed: false
        }]
        let newProjects = [...this.state.projects]
        newProjects[this.props.activeProjectId - 1].tasks = newTasks
        this.setState({
            tasks: newTasks,
            projects: newProjects,
            newTitle: '',
            newDescription: '',
        })
        this.props.setProjects(this.state.projects)
    }

    handleTitleChange(e) {
        e.preventDefault();
        this.setState({
            newTitle: e.target.value
        })
    }

    handleDescriptionChange(e) {
        e.preventDefault();
        this.setState({
            newDescription: e.target.value
        })
    }

    render() {
        return (
            <div className={classes.project}>
                <h3 className={classes.title}>{this.state.name}</h3>
                <p className={classes.goBackLink}><Link to="/" >Go to main page</Link></p>
                {
                    <ul className={classes.list}>
                        {this.state.tasks.map(task => (
                            <li><Task id={task.id} name={task.name} description={task.description} completed={task.completed} key={task.id} /></li>
                        ))}
                    </ul>

                }
                <AddTask
                    addNewTask={this.addNewTask}
                    handleTitleChange={this.handleTitleChange}
                    handleDescriptionChange={this.handleDescriptionChange}
                    newTitle={this.state.newTitle}
                    newDescription={this.state.newDescription} />
            </div>
        )
    }
}