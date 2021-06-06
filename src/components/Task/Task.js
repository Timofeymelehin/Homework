import React, { Component } from 'react'
import classes from './task.module.scss';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            description: this.props.description,
            completed: this.props.completed,
        };
        this.handleCompletedChange = this.handleCompletedChange.bind(this);
    }

    handleCompletedChange(e) {
        e.preventDefault();
        if (this.state.completed) {
            this.setState({
                completed: false
            })
        } else {
            this.setState({
                completed: true
            })
        }
    }
    render() {
        return (
            <div className={classes.task}>
                <h3 className={classes.name}>{this.state.name }</h3>
                <p className={classes.description}>{ this.state.description}</p>
                <p className={classes.completed}>Completed - {(this.state.completed ? 'true' : 'false')}{ ' ' }</p>
                <button className={classes.button}
                    onClick={(e) => this.handleCompletedChange(e)}>Change status</button>
            </div>
        )
    }
}
