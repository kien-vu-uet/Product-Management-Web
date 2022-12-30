import classNames from 'classnames/bind';
import styles from './Export.module.scss';
import React from 'react';
import { useEffect, useState, useMemo } from 'react';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
let uniqueType = [];

function Export() {
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
            <Link className={cx('return')} to="/">
                Return
            </Link>

            <div className={cx('container')}>
                <div className={cx('export')}>
                    <input
                        type="number"
                        className={cx('quantity')}
                        placeholder="Số lượng"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>

                <button className={cx('submit')} onClick={handleSubmit}>
                    Gửi hàng
                </button>
            </div>

            <div className={cx('export_request')}>
                <h2>Yêu cầu</h2>
                <div className={cx('content')}>
                    <h4>Cửa hàng 1 yêu cầu nhập 30 sản phẩm Fx_580_pl</h4>
                </div>
            </div>
        </div>
    );
}

export default Export;
