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
        this.addNewProject = this.addNewProject.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.changeActiveId = this.changeActiveId.bind(this);
    }

    addNewProject(e) {
        e.preventDefault();
        let newId = this.state.projects.length + 1;
        let newProjects = [...this.state.projects, {
            id: newId,
            name: this.state.newTitle,
            tasks: []
        }];
        this.setState({
            projects: newProjects,
            newTitle: '',
        })
        this.props.setProjects(newProjects)
        console.log(this.props.normalizeState(this.props.projects))
    }

    handleTitleChange(e) {
        e.preventDefault();
        this.setState({
            newTitle: e.target.value
        })
    }

    changeActiveId(newId) {
        this.setState({
            activeProjectId: newId
        })
        this.props.setActiveId(newId)
    }

    render() {
        return (
            <div>
                <ul className={classes.myTodoList}>
                {this.state.projects.map(project => (
                    <li><Project id={project.id} name={project.name} tasks={project.tasks} key={project.id} changeActiveId={this.changeActiveId} /></li>
                ))}
                </ul>
                <AddProject
                    addNewProject={this.addNewProject}
                    handleTitleChange={this.handleTitleChange}
                    newTitle={this.state.newTitle}
                    changeActiveId={this.changeActiveId}
                />
                </div>
        )
    }
}

export default MyTodoList;
