import classNames from 'classnames/bind';
import styles from './ProductCategoryHome.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductCategoryHome() {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('return')}>
                <Link to="/admin">
                    <span className={cx('text_container')}>Return</span>
                </Link>
            </button>
            <div className={cx('container')}>
                <div className={cx('function')}>
                    <Link className={cx('button')} to="/admin/productcategory">
                        Quản lý sản phẩm
                    </Link>
                    <Link className={cx('button')} to="/admin/revoke">
                        Triệu hồi sản phẩm
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCategoryHome;
