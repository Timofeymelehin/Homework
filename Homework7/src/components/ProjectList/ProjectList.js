import React, { Component } from 'react'
import Task from '../Task/Task'
import AddTask from '../AddTask/AddTask'
import classes from './projectList.module.scss'
import {
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { addNewTask, changeActiveId } from "../../redux";

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.activeProjectId,
            name: this.props.projects[this.props.activeProjectId - 1 ].name,
            tasks: this.props.projects[this.props.activeProjectId - 1].tasks,
            newTitle: '',
            newDescription: '',
            projects: this.props.projects,
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleTitleChange(e) {
        e.preventDefault();
        this.setState({
            newTitle: e.target.value
        })
    }

    handleDescriptionChange(e) {
        e.preventDefault();
        this.setState({
            newDescription: e.target.value
        })
    }

    render() {
        return (
            <div className={classes.project}>
                <h3 className={classes.title}>{this.state.name}</h3>
                <p className={classes.goBackLink}><Link to="/" >Go to main page</Link></p>
                {
                    <ul className={classes.list}>
                        {this.state.tasks.map(task => (
                            <li><Task id={task.id} name={task.name} description={task.description} completed={task.completed} key={task.id} /></li>
                        ))}
                    </ul>

                }
                <AddTask
                    addNewTask={this.props.addNewTask}
                    handleTitleChange={this.handleTitleChange}
                    handleDescriptionChange={this.handleDescriptionChange}
                    newTitle={this.state.newTitle}
                    newDescription={this.state.newDescription} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
  return {
    projects: state.toDo.projects,
    activeProjectId: state.toDo.activeProjectId,
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeActiveId: (newId) => dispatch(changeActiveId(newId)),
  addNewTask: (newTitle, newDescription) => dispatch(addNewTask(newTitle, newDescription)),
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);