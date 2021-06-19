import React, { Component } from 'react'
import classes from './task.module.scss';

export default class Task extends Component {
    
    render() {
        return (
            <div className={classes.task}>
                <h3 className={classes.name}>{this.props.name }</h3>
                <p className={classes.description}>{ this.props.description}</p>
                <p className={classes.completed}>Completed - {(this.props.completed ? 'true' : 'false')}{ ' ' }</p>
                <button className={classes.button}
                    onClick={() => this.props.handleChangeTask({...this.props, completed: !this.props.completed, projectId: this.props.projectId || null})}>Change status</button>
            </div>
        )
    }
}
