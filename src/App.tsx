import * as React from 'react';
import Header from './containers/Header';
import Form from './containers/Form';

export default class App extends React.Component<undefined, undefined> {
    render() {
        return (
            <div>
                <Header />
                <Form />
            </div>
        );
    }
}
