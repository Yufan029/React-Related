export const createProject = (project) => {
    return (dispatch, getState) => {
        // add async call to fetch the data
        dispatch({ type: 'CREATE_PROJECT', project });
    }
}