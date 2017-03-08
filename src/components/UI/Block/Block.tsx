import * as React from 'react';
import * as classNames from 'classnames/bind';
import * as styles from './Block.css';

let cx = classNames.bind(styles);

interface Props extends React.HTMLProps<HTMLButtonElement> {
    padding?: string;
    margin?: string;
}

export default (props: Props) => {
    let className = cx({
        paddingSmall: props.padding == "small",
        paddingMedium: props.padding == "medium",
        paddingBig: props.padding == "big",
        marginSmall: props.margin == "small",
        marginMedium: props.margin == "medium",
        marginBig: props.margin == "big"
    });

    return <div className={className}>{props.children}</div>;
}
