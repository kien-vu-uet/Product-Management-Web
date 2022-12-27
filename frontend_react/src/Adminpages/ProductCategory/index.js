import classNames from 'classnames/bind';
import styles from './ProductCategory.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function ProductCategory() {
    const [stocks, setStocks] = useState('kho1');
    const [types, setTypes] = useState('Fx_580_pl');
    const [amounts, setAmounts] = useState('');

    const [datas, setDatas] = useState([]);
    const handleSubmit = () => {
        console.log(stocks);
        console.log(types);
        console.log(amounts);
    };
    useEffect(() => {
        fetch('http://localhost:8000/product')
            .then((res) => res.json())
            .then((datas) => {
                setDatas(datas);
            });
    }, []);
    let unique = [...new Set(datas.map((data) => data.type))];
    return (
        <div className={cx('wrapper')}>
            <button className={cx('return')}>
                {/* Return to Product Category Home page*/}
                <Link to="/admin/productcategoryhome">
                    <span className={cx('text_container')}>Return</span>
                </Link>
            </button>

            <div className={cx('container')}>
                <div className={cx('category')}>
                    <select className={cx('stock')} onChange={(e) => setStocks(e.target.value)}>
                        <option value="kho1">Kho hàng 1</option>
                        <option value="kho2">Kho hàng 2</option>
                        <option value="kho3">Kho hàng 3</option>
                    </select>
                    <select className={cx('type')} onChange={(e) => setTypes(e.target.value)}>
                        {unique.map((uni) => (
                            <option key={uni} value={uni}>
                                {uni}
                            </option>
                        ))}
                    </select>

                    <select className={cx('price')} onChange={(e) => setStocks(e.target.value)}>
                        <option value="1">Giá thấp</option>
                        <option value="2">Chưa bán</option>
                        <option value="3">Chờ thu hồi</option>
                        <option value="4">Đã thu hồi</option>
                    </select>
                </div>
                <button className={cx('submit')} onClick={handleSubmit}>
                    <span className={cx('text_container')}>Lọc sản phẩm</span>
                </button>
            </div>
        </div>
    );
}

export default ProductCategory;
