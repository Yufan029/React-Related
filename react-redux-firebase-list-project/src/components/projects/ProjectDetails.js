import React from 'react'

export default function ProjectDetails(props) {
    // console.log(props);
    var id = props.match.params.id;
    return (
        <div className="project-details container section">
            <div className="card z-depth-0">
                <div className="card-content grey-text text-darken-2">
                    <span className="card-title tomato-text text-lighten-3">Project title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dicta debitis, adipisci, voluptatum, totam delectus deserunt maiores impedit qui error quia beatae vitae sequi voluptates doloribus reiciendis numquam. Sapiente, a!</p>
                </div>
                <div className="card-action">more detials</div>
            </div>
        </div>
    )
}
