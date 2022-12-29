import classNames from 'classnames/bind';
import styles from './Revoke.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Revoke() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('return')}>
                Return
            </Link>
            <div className={cx('container')}>
                <Link className={cx('cutomer')} to='/customer'>Khách hàng</Link>
                <Link className={cx('stock')} to='/stock'>Stock</Link>
            </div>
        </div>
    );
}

export default Revoke;
