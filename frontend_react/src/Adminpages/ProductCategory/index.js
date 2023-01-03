import classNames from 'classnames/bind';
import styles from './ProductCategory.module.scss';
import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
let product = [];

function ProductCategory() {
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
    
    let uniqueType = [...new Set(datas.map((data) => data.type))];
    let uniqueStatus = [...new Set(datas.map((data) => data.status))];

    const [stocks, setStocks] = useState('kho1');
    const [types, setTypes] = useState('Fx_580_pl');

    const columns = ['Mã sản phẩm', 'Tên máy', 'Giá tiền'];

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('return')} to="/admin/productcategoryhome">
                <span className={cx('text_container')}>Return</span>
            </Link>

            <div className={cx('container')}>
                <table className={cx('table')} border="1">
                    <thead>
                        <tr>
                            {columns.map((uni) => (
                                <th key={uni} value={uni}>
                                    {uni}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data, index) => (
                            <tr key={index}>
                                <th>{data.type}</th>
                                <th>{data.name}</th>
                                <th>{data.price}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductCategory;
