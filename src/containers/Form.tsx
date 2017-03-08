import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {
    addMessage,
    deleteAllMessages,
    markAllMessagesRead,
    setOpenNotify
} from '../actions';

import Block from '../components/UI/Block/Block';
import Input from '../components/UI/Form/Input/Input';
import Button from '../components/UI/Button/Button';

import State from "../models/state";

interface FormProps {
    dispatch: Dispatch<{}>;
    showNotify: boolean;
}

interface  FormState {
    title: string;
}

class Form extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);

        this.state = {
            title: ''
        };

        this.changeMessage = this.changeMessage.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.markAllMessagesRead = this.markAllMessagesRead.bind(this);
        this.deleteAllMessages = this.deleteAllMessages.bind(this);
        this.toggleNotify = this.toggleNotify.bind(this);
    }

    changeMessage(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            title: e.currentTarget.value
        });
    }

    addMessage() {
        this.props.dispatch(addMessage(this.state.title));
        this.setState({
            title: ''
        })
    }

    markAllMessagesRead() {
        this.props.dispatch(markAllMessagesRead());
    }

    deleteAllMessages() {
        this.props.dispatch(deleteAllMessages());
    }

    toggleNotify() {
        this.props.dispatch(setOpenNotify(!this.props.showNotify));
    }

    render() {
        return (
            <Block margin="medium">
                <Block margin="small">
                    <Input onChange={this.changeMessage} value={this.state.title} />
                    <Button onClick={this.addMessage}>Отправить</Button>
                </Block>
                <Block margin="small">
                    <Button onClick={this.markAllMessagesRead}>Пометить все события прочитанными</Button>
                </Block>
                <Block margin="small">
                    <Button onClick={this.deleteAllMessages}>Удалить все сообщения</Button>
                </Block>
                <Block margin="small">
                    <Button onMouseDown={this.toggleNotify}>Скрыть / показать сообщения</Button>
                </Block>
            </Block>
        );
    }
}

const mapStateToProps = (state: State) => ({
    showNotify: state.notify.isOpen
});

export default connect(mapStateToProps)(Form);
