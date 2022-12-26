import classNames from 'classnames/bind';
import styles from './ProductCategory.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductCategory() {
    return (
        <div className={cx('container')}>

            <Link to="/admin/productcategoryhome" className={cx('return')}>
                <span className={cx('text_container')}>Return</span>
            </Link>
            <div className={cx('function')}>
                <div className={cx('sort_filter')}>
                    <button className={cx('button')}>Mã sản phẩm</button>
                    <button className={cx('button')}>Ngày sản xuất</button>
                    <button className={cx('button')}>Giá bán</button>
                    <button className={cx('button')}>Trạng thái</button>


                </div>
            </div>
        </div>
    );
}

export default ProductCategory;
