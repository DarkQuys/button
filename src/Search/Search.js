import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('container')}>
            <span>Search Country</span>
            <div className={cx('search')}>
                <input type="text" />
                <div className={cx('iconsearch')}>
                    {' '}
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
    );
}

export default Search;
