import * as React from 'react';
import * as classnames from 'classnames/bind';

interface Props extends React.HTMLProps<HTMLButtonElement> {
    minimal?: boolean;
    icon?: string;
}

export default (props: Props) => {

    const {minimal, icon, ...rest} = props;

    const classes: any = {
        'pt-button': true,
        'pt-minimal': minimal
    };

    if (props.icon) {
        classes['pt-icon-' + icon] = true;
    }

    return <button {...rest} className={classnames(classes)}>{props.children}</button>;
}
