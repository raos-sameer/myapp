
const iState = {
    name: 'Ramesh',
    wish : ['eat, sleep']
}

const reducer = (state=iState, action) => {
    console.log(state,action);
    let defaults = state.name;
    switch(action.type) {
        case 'CHANGE_NAME': defaults = action.payload;break;
        default: 
    }
    return {
        ...state,
        name: defaults
    };
    
}
export default reducer;