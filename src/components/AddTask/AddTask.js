import React, { Component } from 'react'
import './addTask.css';

export default class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    render() {
        return (
            <form className="add-task__form" onSubmit={(e)=>this.props.addNewTask(e)}>
                <h2 className="add-task__title">New Task</h2>
                <input
                    className='add-task__add-title'
                    type="text"
                    onChange={(e) => this.props.handleTitleChange(e)}
                    value={this.props.newTitle}
                    placeholder="Задача" />
                <input
                    className='add-task__add-description'
                    type="text"
                    onChange={(e) => this.props.handleDescriptionChange(e)}
                    value={this.props.newDescription}
                    placeholder="Описание" />
                <input className='add-task__submit' type="submit" value="Add" />
            </form>
        )
    }
}
