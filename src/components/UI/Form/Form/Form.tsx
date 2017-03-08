import * as React from 'react';
import * as styles from './Form.css';

export default (props: React.HTMLProps<HTMLElement>) => {
    return <div className={styles.form}>{props.children}</div>;
}
