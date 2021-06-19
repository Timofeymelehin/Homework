import React, {useEffect} from 'react'
import Task from '../Task/Task'
import classes from './project.module.scss'
import {
    Link
} from "react-router-dom";
import APIService from '../../API/ApiService';


const Project = (props) => {
    useEffect(() => {
        if (props.tasks === null) props.getTasks(props.id)
    }, [props.tasks])

    if (props.tasks === null) return <div></div>
    console.log(props)
    return (
        <div className={classes.project}>
            <h3 className={classes.title}>{props.name}</h3>
            <p><Link to={`/project/${props.id}`} onClick={() => props.changeActiveId(props.id)}>Go to { props.name } tasks list</Link></p>
            {
                <ul className={classes.list}>
                    {props.tasks.map(task => (
                        <li><Task projectId={props.id} id={task.id} name={task.name} description={task.description} completed={task.completed} key={task.id} handleChangeTask={props.handleChangeTask}/></li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default Project 