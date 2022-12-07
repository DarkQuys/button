import classNames from 'classnames/bind';
import styles from './ListTodu.module.scss';
const cx = classNames.bind(styles);
function ListTodu({ name, content }) {
    let hihicolor = 'color';
    if ({ content } === 'high') {
        hihicolor = 'high';
    }

    return (
        <div className={cx('formlist')}>
            <button className={cx('button')}>
                <div className={cx('card')}>
                    <div>{name}</div>
                    <div>Tôi nghiện {content}</div>
                </div>
            </button>
        </div>
    );
}

export default ListTodu;
