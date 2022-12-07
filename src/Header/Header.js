import { faCircle, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useRef, useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext';

const cx = classNames.bind(styles);
function Header() {
    const themeContext = useContext(ThemeContext);

    const [isDark, setIsDark] = useState(false);
    const check = useRef();
    const backGroundSun = useRef();
    const changeBackGround = () => {
        check.current.checked = !check.current.checked;
        setIsDark(check.current.checked);
    };
    useEffect(() => {
        if (isDark) {
            backGroundSun.current.style.background = '#ccc';
        } else {
            backGroundSun.current.style.background = 'aqua';
        }
    }, [isDark]);
    return (
        <div className={cx('container')}>
            <div>Head in the clouds</div>
            <div ref={backGroundSun} className={cx('button')} onClick={changeBackGround}>
                <input className={cx('input')} type="checkbox" ref={check} />
                <div className={cx('sun')}>
                    <FontAwesomeIcon icon={faSun} />
                </div>
                <div className={cx('ball')}>
                    <FontAwesomeIcon icon={faCircle} />
                </div>
            </div>
        </div>
    );
}

export default Header;
