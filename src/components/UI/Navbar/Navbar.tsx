import * as React from 'react';

interface Props extends React.HTMLProps<HTMLElement> {
    title?: string
}

export default (props: Props) => {
    return (
        <nav className="pt-navbar">
            <div className="pt-navbar-group pt-align-left">
                <div className="pt-navbar-heading">{props.title}</div>
            </div>
            <div className="pt-navbar-group pt-align-right">
                {props.children}
            </div>
        </nav>
    );
}
