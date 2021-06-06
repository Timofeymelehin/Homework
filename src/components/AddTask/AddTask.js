import React, { Component } from 'react'
import classes from './addTask.module.scss';

export default class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        }
    }

    render() {
        return (
            <form className={classes.form} onSubmit={(e)=>this.props.addNewTask(e)}>
                <h2 className={classes.title}>New Task</h2>
                <input
                    className={classes.titleNew}
                    type="text"
                    onChange={(e) => this.props.handleTitleChange(e)}
                    value={this.props.newTitle}
                    placeholder="Задача" />
                <input
                    className={classes.descriptionNew}
                    type="text"
                    onChange={(e) => this.props.handleDescriptionChange(e)}
                    value={this.props.newDescription}
                    placeholder="Описание" />
                <input className={classes.submit} type="submit" value="Add" />
            </form>
        )
    }
}
