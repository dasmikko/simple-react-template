const initialState = {
    example: false,
};

export const exampleReducer = (state = initialState, action) => {
    var newstore = Object.assign({}, state);
    switch(action.type) {
        case 'EXAMPLE_CASE':
            newstore.example = true;
            return newstore;
            break;
    }
    return state;
};