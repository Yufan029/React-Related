import React from 'react';
import ProjectSummary from './ProjectSummary';

function ProjectList() {
    return (
        <div className="section project-list">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </div>
    );
}

export default ProjectList