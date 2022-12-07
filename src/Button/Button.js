import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({ chilrden }) {
    return <button>{chilrden}</button>;
}

export default Button;
