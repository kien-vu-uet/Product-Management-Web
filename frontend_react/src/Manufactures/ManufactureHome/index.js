import classNames from 'classnames/bind';
import styles from './ManufactureHome.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


function ManufactureHome() {
    return (
        <div className={cx('wrapper')}> 
            <div className={cx('container')}>
                <div className={cx('function')}>
                    <Link className={cx('button')} to="/manufacture/importhome">
                        Nhập sản phẩm
                    </Link>
                    <Link className={cx('button')} to="/manufacture/export">
                        Xuất sản phẩm
                    </Link>
                    <Link className={cx('button')} to="/manufacture/defectiveproduct">
                        Sản phẩm lỗi
                    </Link>
                    <Link className={cx('button')} to="/manufacture/statics">
                        Thống kê
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ManufactureHome;
