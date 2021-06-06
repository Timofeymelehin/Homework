import React from 'react'
import classes from './addTask.module.scss';

const AddTask = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNewTask(props.newTitle, props.newDescription);
    }

        return (
            <form className={classes.form} onSubmit={handleSubmit} >
                <h2 className={classes.title}>New Task</h2>
                <input
                    className={classes.titleNew}
                    type="text"
                    onChange={(e) => props.handleTitleChange(e)}
                    value={props.newTitle}
                    placeholder="Задача" />
                <input
                    className={classes.descriptionNew}
                    type="text"
                    onChange={(e) => props.handleDescriptionChange(e)}
                    value={props.newDescription}
                    placeholder="Описание" />
                <input className={classes.submit} type="submit" value="Add" />
            </form>
        )
}

export default AddTask