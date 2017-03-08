// TODO Action may be any data
interface Action {
    type: string;
    isOpen: boolean;
}

const initialState = {
    isOpen: false
};

const notify = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_OPEN_NOTIFY': {
            return {
                isOpen: action.isOpen
            };
        }

        default: {
            return state;
        }
    }
};

export default notify;
