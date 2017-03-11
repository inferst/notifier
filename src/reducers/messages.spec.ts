import Message from '../models/message';
import messages from './messages';
import {expect} from 'chai';
import 'mocha';

describe('messages reducer', () => {
    it('should handle add message', () => {
        let state: Message[] = [{
            id: 1,
            title: 'Message',
            unread: false,
            datetime: new Date()
        }];

        state = messages(state, {
            type: 'ADD_MESSAGE',
            title: 'New message'
        });

        expect(state[0]).to.have.property('id', 2);
        expect(state[0]).to.have.property('title', 'New message');
        expect(state[0]).to.have.property('unread', true);
        expect(state[0]).to.have.property('datetime').that.to.be.a('date');
    });

    it('should handle delete all messages', () => {
        let state: Message[] = [{
            id: 1,
            title: 'Message',
            unread: false,
            datetime: new Date()
        }];

        state = messages(state, {
            type: 'DELETE_ALL_MESSAGES'
        });

        expect(state).to.be.empty;
    });

    it('should handle mark all messages read', () => {
        let state: Message[] = [{
            id: 1,
            title: 'Message',
            unread: true,
            datetime: new Date()
        }];

        state = messages(state, {
            type: 'MARK_ALL_MESSAGES_READ'
        });

        expect(state[0]).to.have.property('unread', false);
    });
});
