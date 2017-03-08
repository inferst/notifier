import {createStore} from 'redux';
import reducer from './reducers';

let devtools: Function | undefined;
declare let __REDUX_DEVTOOLS_EXTENSION__: Function;

if (typeof __REDUX_DEVTOOLS_EXTENSION__ == 'function') {
    devtools = __REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(
    reducer,
    devtools
);

export default store;
