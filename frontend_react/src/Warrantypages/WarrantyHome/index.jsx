import classNames from 'classnames/bind';
import styles from './WarrantyHome.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function WarrantyHome() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link to="/warranty/bill" className={cx('link')}>
                    Đơn bảo hành
                </Link>
                <Link to="/warranty/statistic" className={cx('link')}>
                    Thống kê
                </Link>
            </div>
        </div>
    );
}

export default WarrantyHome;
