import React from 'react'
import AddProject from '../AddProject/AddProject'
import Project from '../Project/Project'
import classes from './myTodoList.module.scss'

class MyTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects : this.props.projects,
            newTitle: '',
            activeProjectId: this.props.activeProjectId
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.projects !== this.state.projects) {
            this.setState({});
        }
    }

    handleTitleChange(e) {
        this.setState({
            newTitle: e.target.value
        })
    }

    render() {
        return (
            <div>
                <ul className={classes.myTodoList}>
                {this.state.projects.map(project => (
                    <li><Project id={project.id} name={project.name} tasks={project.tasks} key={project.id} changeActiveId={this.props.changeActiveId} /></li>
                ))}
                </ul>
                <AddProject
                    addNewProject={this.props.addNewProject}
                    handleTitleChange={this.handleTitleChange}
                    newTitle={this.state.newTitle}
                />
                <div onClick={this.props.normalizeState} className={classes.normalizeButton}>Normalize State</div>
                </div>
        )
    }
}

export default MyTodoList;
