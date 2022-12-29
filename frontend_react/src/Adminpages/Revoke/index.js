import classNames from 'classnames/bind';
import styles from './Revoke.module.scss';
import React from 'react';
import { useEffect, useState, useMemo } from 'react';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);


function Revoke() {
    const [productCode, setProductCode] = useState('');
    
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
    console.log(uniqueType)
    const handleSubmit = () => {
        if (uniqueType.find(element => element === productCode) != -1) {
            alert(`Đã tạo yêu cầu thu hồi thành công cho mã sản phẩm: ${productCode}`);
            console.log(productCode);
            // console.log(username);
            // console.log(password);
        }
    };


    return (
        <div className={cx('wrapper')}>
            <button className={cx('return')}>
                <Link to="/admin">
                    <span className={cx('text_container')}>Return</span>
                </Link>
            </button>

            <div className={cx('container')}>
                <div className={cx('revoke')}>
                    <span className={cx('title')}>Nhập mã sản phẩm cần thu hồi </span>
                    <input
                        type="text"
                        className={cx('product_code')}
                        placeholder="Mã sản phẩm cần thu hồi"
                        onChange={(e) => setProductCode(e.target.value)}
                    />
                </div>
                <button className={cx('submit')} onClick={handleSubmit}>
                    <span className={cx('text_container')}>Thu hồi sản phẩm</span>
                </button>
            </div>
        </div>
    );
}

export default Revoke;
