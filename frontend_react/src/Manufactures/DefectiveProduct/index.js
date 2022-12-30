import classNames from 'classnames/bind';
import styles from './DefectiveProduct.module.scss';
import React from 'react';
import { useEffect, useState, useMemo } from 'react';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
let uniqueType = [];

function DefectiveProduct() {
    const [datas, setDatas] = useState([]);
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

    uniqueType = [...new Set(datas.map((data) => data.type))];

    const [productCode, setProductCode] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [store, setStore] = useState('');

    const handleSubmit = () => {
        if (quantity >= 1) {
            alert(`Đã gửi hàng thành công cho cửa hàng ${store} - ${quantity} sản phẩm: ${productCode}`);
            console.log(productCode);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('return')} to="/manufacture/importhome">
                Return
            </Link>

            <div className={cx('container')}>
                <span className={cx('title')}>Nhập Serial Number</span>
                <input
                    type="text"
                    className={cx('productCode')}
                    placeholder="Nhập Serial Number"
                    onChange={(e) => setProductCode(e.target.value)}
                />

                <button className={cx('submit')} onClick={handleSubmit}>
                    Gửi trung tâm bảo hành
                </button>
            </div>
        </div>
    );
}

export default DefectiveProduct;
