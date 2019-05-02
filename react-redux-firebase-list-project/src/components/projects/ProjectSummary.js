import React from 'react';

function ProjectSummary({project}) {
    return (
        <div className="card project-summary z-depth-1">
            <div className="card-content grey-text text-darken-1">
                <span className="card-title">{project.title}</span>
                <div className="divider"></div>
                <p>{project.content}</p>
            </div>
        </div>
    )
}

export default ProjectSummary