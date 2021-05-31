import React, { Component } from 'react'
import Task from '../Task/Task'
import classes from './project.module.scss'
import {
    Link
} from "react-router-dom";

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            tasks: this.props.tasks,
        };
    }

    render() {
        return (
            <div className={classes.project}>
                <h3 className={classes.title}>{this.state.name}</h3>
                <p><Link to="/project" onClick={() => this.props.changeActiveId(this.state.id)}>Go to { this.state.name } tasks list</Link></p>
                {
                    <ul className={classes.list}>
                        {this.state.tasks.map(task => (
                            <li><Task id={task.id} name={task.name} description={task.description} completed={task.completed} key={task.id} /></li>
                        ))}
                    </ul>
                }
            </div>
        )
    }
}