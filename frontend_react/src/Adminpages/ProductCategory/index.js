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
            <Link to="/admin/productcategoryhome" className={cx('return')}>
                <span className={cx('text_container')}>Return</span>
            </Link>
            <div className={cx('container')}>
                <div className={cx('order')}>
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
                    <input
                        className={cx('input')}
                        placeholder="nhập số lượng"
                        onChange={(e) => setAmounts(e.target.value)}
                    />
                </div>
                <button className={cx('submit')} onClick={handleSubmit}>
                    Gửi yêu cầu
                </button>
            </div>
        </div>
    );
}

export default ProductCategory;
