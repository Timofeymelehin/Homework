import React from 'react'
import classes from './addProject.module.scss';

const AddProject = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNewProject(props.newTitle);
    }

        return (
            <form className={classes.form}  onSubmit={handleSubmit} >
                <h2 className={classes.title}>New Project</h2>
                <input
                    className={classes.titleNew}
                    type="text"
                    onChange={(e) => props.handleTitleChange(e)}
                    value={props.newTitle}
                    placeholder="Новый проект" />
                <input className={classes.submit} type="submit" value="Add"/>
            </form>
        )
}

export default AddProject