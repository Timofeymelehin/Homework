import React, { useContext } from 'react'
import ProjectList from './ProjectList'
import classes from './projectList.module.scss'
import StateContext from '../../anotherContext.js'

function ProjectListWrapper() {
    const { projects, activeProjectId, setActiveId, setProjects } = useContext(StateContext)
    return (
        <div className={classes.projectWrapper}>
            <ProjectList
                projects={projects}
                activeProjectId={activeProjectId}
                setProjects={setProjects}/>
        </div>
    )
}

export default ProjectListWrapper