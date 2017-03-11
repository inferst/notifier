import IMessage from './message';
import INotify from './notify';

interface State {
    messages: IMessage[];
    notify: INotify;
}

export default State;