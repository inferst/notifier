import * as React from 'react';
import * as styles from './Item.css';

export default (props: React.HTMLProps<HTMLElement>) => {
    return <div className={styles.formItem}>{props.children}</div>;
}
