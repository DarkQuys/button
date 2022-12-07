import classNames from 'classnames/bind';
import styles from './AppTwo.module.scss';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
const cx = classNames.bind(styles);

function AppTwo() {
    return (
        <div>
            <Header />
            <MainContent />
        </div>
    );
}

export default AppTwo;
