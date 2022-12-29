import classNames from 'classnames/bind';
import styles from './Import.module.scss';
import React from 'react';
import { useEffect, useState, useMemo } from 'react';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Import() {
    const [productCode, setProductCode] = useState('');
    const [quantity, setQuantity] = useState(0);

    const [datas, setDatas] = useState([]);
    let uniqueType = [...new Set(datas.map((data) => data.type))];

    const fetchData = () => {
        fetch('http://localhost:8000/product')
            .then((res) => res.json())
            .then(async (datas) => {
                await setDatas(datas);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    console.log(uniqueType);
    const handleSubmit = () => {
        if (uniqueType.find((element) => element === productCode) != -1) {
            alert(`Đã nhập thành công ${quantity} sản phẩm: ${productCode}`);
            console.log(productCode);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <button className={cx('return')}>
                <Link to="/manufacture/importhome">
                    <span className={cx('text_container')}>Return</span>
                </Link>
            </button>

            <div className={cx('container')}>
                <div className={cx('import')}>
                    <div className={cx('import_product_code')}>
                        <span className={cx('title')}>Nhập mã sản phẩm</span>
                        <input
                            type="text"
                            className={cx('product_code')}
                            placeholder="Mã sản phẩm"
                            onChange={(e) => setProductCode(e.target.value)}
                        />
                    </div>
                    <div className={cx('import_quantity')}>
                        <span className={cx('title')}>Nhập số lượng</span>
                        <input
                            type="text"
                            className={cx('quantity')}
                            placeholder="Nhập số lượng"
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                </div>
                <button className={cx('submit')} onClick={handleSubmit}>
                    <span className={cx('text_container')}>Nhập sản phẩm</span>
                </button>
            </div>
        </div>
    );
}

export default Import;
