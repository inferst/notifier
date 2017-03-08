import {combineReducers} from 'redux';
import messages from './messages';
import notify from './notify';

const rootReducer = combineReducers({
    messages,
    notify
});

export default rootReducer;
