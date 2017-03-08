import Message from '../models/message';

// TODO Action may be any data
interface Action {
    type: string;
    title?: string
}

const initialState: Message[] = [
    {
        id: 17,
        title: 'Test test test 17',
        unread: true,
        datetime: new Date(),
    },
    {
        id: 16,
        title: 'Test test test 16',
        unread: true,
        datetime: new Date().setHours((new Date()).getHours() - 2),
    },
    {
        id: 14,
        title: 'Test test test 14',
        unread: true,
        datetime: new Date().setDate((new Date()).getDate() - 1),
    },
    {
        id: 13,
        title: 'Test test test 13',
        unread: false,
        datetime: new Date().setDate((new Date()).getDate() - 3),
    },
    {
        id: 12,
        title: 'Test test test 12',
        unread: false,
        datetime: new Date().setDate((new Date()).getDate() - 8),
    },
    {
        id: 11,
        title: 'Test test test 11',
        unread: false,
        datetime: new Date().setDate((new Date()).getDate() - 31),
    },
    {
        id: 10,
        title: 'Test test test 10',
        unread: false,
        datetime: new Date().setDate((new Date()).getDate() - 160),
    }
];

const messages = (state = initialState, action: Action): Message[] => {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            const id: number = state.reduce((id: number, message: Message): number => {
                return Math.max(message.id, id);
            }, -1);

            return [
                ...state,
                {
                    id: id + 1,
                    title: action.title,
                    unread: true,
                    datetime: new Date()
                }
            ];
        }

        case 'DELETE_ALL_MESSAGES': {
            return [];
        }

        case 'MARK_ALL_MESSAGES_READ': {
            return state.map((message: Message) => ({...message, unread: false}));
        }

        default: {
            return state;
        }
    }
};

export default messages;
