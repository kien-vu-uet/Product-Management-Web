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
            if (productCode.length != 0) {
                alert(`Đã nhập thành công ${quantity} sản phẩm: ${productCode}`);
                console.log(productCode);
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('return')} to="/manufacture/importhome">
                Return
            </Link>

            <div className={cx('container')}>
                <div className={cx('import')}>
                    <span className={cx('title')}>Nhập mã sản phẩm</span>
                    <input
                        type="text"
                        className={cx('product_code')}
                        placeholder="Mã sản phẩm"
                        onChange={(e) => setProductCode(e.target.value)}
                    />

                    <span className={cx('title')}>Nhập số lượng</span>
                    <input
                        type="text"
                        className={cx('quantity')}
                        placeholder="Nhập số lượng"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <button className={cx('submit')} onClick={handleSubmit}>
                    Nhập sản phẩm
                </button>
            </div>
        </div>
    );
}

export default Import;
