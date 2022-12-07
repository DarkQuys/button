import { faChevronDown, faEarth, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Fillter.module.scss';
import { useState, useRef, useEffect } from 'react';
const cx = classNames.bind(styles);

function Fillter() {
    const [control, setControl] = useState(true);
    const clickControl = () => {
        setControl(control === true ? false : true);
        console.log(control);
    };
    useEffect(() => {
        if (control) {
        }
    }, [control]);
    return (
        <div className={cx('container')}>
            <span>Fillter By Region</span>
            <div>
                {' '}
                <div className={cx('barbutton')} onClick={clickControl}>
                    <span>quý đẹp trai</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className={cx('cardcontainer')}>
                    <div className={cx('card')}>
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        <span>All</span>
                    </div>
                    <div className={cx('card')}>
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        <span>Affica</span>
                    </div>
                    <div className={cx('card')}>
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        <span>Americas </span>
                    </div>
                    <div className={cx('card')}>
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        <span>Asia</span>
                    </div>
                    <div className={cx('card')}>
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        <span>Europe</span>
                    </div>
                    <div className={cx('card')}>
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        <span>Oceania</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fillter;
