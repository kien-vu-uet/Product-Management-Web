import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <h1>DaKiSon</h1>
            <div className={cx('info')}>
                <h3 className={cx('welcome')}>
                    Welcome, <span>store</span>
                </h3>
                {/* <button className={cx('logout')} Logout>Logout</button> */}
            </div>
        </header>
    );
}

export default Header;
