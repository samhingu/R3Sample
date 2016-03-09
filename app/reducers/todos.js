import { handleActions } from 'redux-actions';

const initialState = [];
for(let i=1;i<100;i++){
    initialState.push({
        text: 'Testing on React Redux architecture',
        completed: false,
        id: i
    })
}



export default handleActions({
    'add todo'(state, action) {
        return [
            {
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                completed: false,
                text: action.payload
            }, ...state
        ]
    },
    'clear complete'(state, action) {
        return state.filter(todo => todo.completed === false)
    }
}, initialState)
