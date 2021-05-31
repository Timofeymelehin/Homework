import React, { Component } from 'react'
import classes from './addProject.module.scss';

export default class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }

    render() {
        return (
            <form className={classes.form}
                onSubmit={(e) => this.props.addNewProject(e)}>
                <h2 className={classes.title}>New Project</h2>
                <input
                    className={classes.titleNew}
                    type="text"
                    onChange={(e) => this.props.handleTitleChange(e)}
                    value={this.props.newTitle}
                    placeholder="Новый проект" />
                <input className={classes.submit} type="submit" value="Add" />
            </form>
        )
    }
}
