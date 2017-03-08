import * as React from 'react';
import * as styles from './Input.css';
import * as classNames from 'classnames';

export default (props: React.ChangeTargetHTMLProps<HTMLInputElement>) => {
    return <input {...props} type="text" className={classNames(styles.formInput, 'pt-input')} dir="auto" />;
}
