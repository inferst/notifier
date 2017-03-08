import * as React from 'react';
import IMessage from '../models/message';
import Message from './Message';
import {Popover, Position, PopoverInteractionKind} from '@blueprintjs/core';
import Block from './UI/Block/Block';
import Button from './UI/Button/Button';

interface NotifierProps {
    messages: IMessage[];
    isOpen?: boolean;
    maxMessages?: number;
    onClickShowAll?: Function;
    onClickNotifier?: Function;
}

// TODO make animation
class Notifier extends React.Component<NotifierProps, undefined> {

    static defaultProps = {
        isOpen: false,
        maxMessages: 5
    };

    handleClickShowAll() {
        this.props.onClickShowAll && this.props.onClickShowAll();
    }

    handleInteraction(openState: boolean) {
        this.props.onClickNotifier && this.props.onClickNotifier(openState);
    }

    render() {
        const messages = (
            <Block padding="medium">
                {
                    this.props.messages.slice(0, this.props.maxMessages).map((message) => {
                        return <Message key={message.id} title={message.title} datetime={message.datetime} />
                    })
                }
                <Block padding="medium">
                    <a onClick={this.handleClickShowAll.bind(this)}>Посмотреть все</a>
                </Block>
            </Block>
        );

        return (
            <Popover
                lazy={true}
                content={messages}
                interactionKind={PopoverInteractionKind.CLICK}
                onInteraction={(state) => this.handleInteraction(state)}
                position={Position.BOTTOM_RIGHT}
                isOpen={this.props.isOpen}
            >
                <Button
                    minimal
                    icon="notifications"
                >{this.props.messages.filter(message => message.unread).length}</Button>
            </Popover>
        );
    }
}

export default Notifier;
