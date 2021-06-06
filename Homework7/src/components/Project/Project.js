import React from 'react'
import Task from '../Task/Task'
import classes from './project.module.scss'
import {
    Link
} from "react-router-dom";

const Project = (props) => {
        return (
            <div className={classes.project}>
                <h3 className={classes.title}>{props.name}</h3>
                <p><Link to="/project" onClick={() => props.changeActiveId(props.id)}>Go to { props.name } tasks list</Link></p>
                {
                    <ul className={classes.list}>
                        {props.tasks.map(task => (
                            <li><Task id={task.id} name={task.name} description={task.description} completed={task.completed} key={task.id} /></li>
                        ))}
                    </ul>
                }
            </div>
        )
}

export default Project 