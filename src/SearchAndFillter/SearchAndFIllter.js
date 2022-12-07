import Search from '../Search/Search';
import Fillter from '../Fillter/Fillter';
import classNames from 'classnames/bind';
import styles from './SearchAndFillter.module.scss';
const cx = classNames.bind(styles);
function SearchAndFillter() {
    return (
        <div className={cx('container')}>
            <Search />
            <Fillter />
        </div>
    );
}

export default SearchAndFillter;
