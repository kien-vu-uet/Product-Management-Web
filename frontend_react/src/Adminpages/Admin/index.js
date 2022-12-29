import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Admin() {
    return (
        <div className={cx('wrapper')}> 
            <div className={cx('container')}>
                <div className={cx('function')}>
                    <Link className={cx('button')} to="/admin/productcategoryhome">
                        Quản lý danh mục sản phẩm
                    </Link>
                    <Link className={cx('button')} to="/admin/accountmanagement">
                        Cấp tài khoản
                    </Link>
                    <Link className={cx('button')} to="/admin/statics">
                        Thống kê
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Admin;
