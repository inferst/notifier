import store from './store';
import {addMessage} from './actions';

setInterval(() => {
    store.dispatch(addMessage('New message'));
}, 10000);
