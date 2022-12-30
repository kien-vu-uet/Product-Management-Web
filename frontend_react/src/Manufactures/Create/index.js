import classNames from 'classnames/bind';
import styles from './Create.module.scss';
import React from 'react';
import { useEffect, useState, useMemo } from 'react';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Create() {
    const [productCode, setProductCode] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

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
                alert(`Đã tạo thành công ${name} có mã sản phẩm: ${productCode} có đơn giá: ${price}`);
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
                    <div className={cx('import_product_code')}>
                        <span className={cx('title')}>Nhập mã sản phẩm</span>
                        <input
                            type="text"
                            className={cx('product_code')}
                            placeholder="Mã sản phẩm"
                            onChange={(e) => setProductCode(e.target.value)}
                        />
                    </div>
                    <div className={cx('product_name')}>
                        <span className={cx('title')}>Nhập tên sản phẩm</span>
                        <input
                            type="text"
                            className={cx('input_product_name')}
                            placeholder="Nhập tên sản phẩm"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={cx('product_price')}>
                        <span className={cx('title')}>Nhập giá sản phẩm</span>
                        <input
                            type="text"
                            className={cx('input_product_price')}
                            placeholder="Nhập tên sản phẩm"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <button className={cx('submit')} onClick={handleSubmit}>
                    Tạo sản phẩm
                </button>
            </div>
        </div>
    );
}

export default Create;
