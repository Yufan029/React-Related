import React from 'react';
import ProjectSummary from './ProjectSummary';
import { connect } from 'react-redux';

function ProjectList(props) {
    const { projects } = props;
    return (
        <div className="section project-list">
            {
                projects && projects.map(project => {
                    return (
                        <ProjectSummary project={project} key={project.id} />
                    )
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(ProjectList)