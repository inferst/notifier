import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {setOpenNotify} from '../actions';
import Message from '../interfaces/message';
import Notifier from '../components/Notifier';
import Navbar from '../components/UI/Navbar/Navbar';
import State from "../interfaces/state";

interface NavbarProps {
    messages: Message[];
    isOpen: boolean;
    dispatch: Dispatch<{}>;
}

class Header extends React.Component<NavbarProps, undefined> {
    render() {
        return (
            <Navbar title="Notifier">
                <Notifier
                    messages={this.props.messages}
                    isOpen={this.props.isOpen}
                    onClickShowAll={() => {this.props.dispatch(setOpenNotify(false))}}
                    onClickNotifier={(isOpen: boolean) => {this.props.dispatch(setOpenNotify(isOpen))}}
                />
            </Navbar>
        );
    }
}

const mapStateToProps = (state: State) => ({
    messages: state.messages,
    isOpen: state.notify.isOpen
});

export default connect(mapStateToProps)(Header);
