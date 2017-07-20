import {
    combineReducers
} from 'redux';
import {
    SaveTopic
} from '../actions';


const indexDataInitialState = {
    topics:[]
}
const indexData = (state = indexDataInitialState, action) => {
    switch (action.type) {
        case SaveTopic:
            return Object.assign({}, state, action.data);
        default:
            return state
    }
}


export default combineReducers({
    indexData
})