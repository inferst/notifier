import * as React from 'react';
import * as moment from 'moment';
// TODO load only ru locale
import 'moment/locale/ru';

import Block from './UI/Block/Block';

interface MessageProps extends React.HTMLProps<HTMLElement> {
    title: string;
    datetime: Date;
}

class Message extends React.Component<MessageProps, undefined> {
    render() {
        return (
            <Block margin="small">
                <h5>{this.props.title}</h5>
                {moment(this.props.datetime).fromNow()}
            </Block>
        );
    }
}

export default Message;
