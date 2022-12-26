import classNames from 'classnames/bind';
import styles from './ProductCategoryHome.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductCategoryHome() {
    return (
        <div className={cx('container')}>
            <Link to="/admin" className={cx('return')}>
                <span className={cx('text_container')}>Return</span>
            </Link>
            <div className={cx('function')}>
                <Link className={cx('button')} to="/admin/productcategory">
                    Quản lý sản phẩm
                </Link>
                <Link className={cx('button')} to="/admin/revoke">
                    Triệu hồi sản phẩm
                </Link>
            </div>
        </div>
    );
}

export default ProductCategoryHome;