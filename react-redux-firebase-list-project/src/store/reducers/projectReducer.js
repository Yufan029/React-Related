const initialState = {
    projects: [
        { id:1, title: 'Lorem ipsum dolor sit amet 1', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, reprehenderit! 1' },
        { id:2, title: 'Lorem ipsum dolor sit amet 2', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, reprehenderit! 2' },
        { id:3, title: 'Lorem ipsum dolor sit amet 3', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, reprehenderit! 3' },
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            break;
    }
    return state;
}