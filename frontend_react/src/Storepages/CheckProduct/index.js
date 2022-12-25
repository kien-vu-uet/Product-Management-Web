import classNames from 'classnames/bind';
import styles from './CheckProduct.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function CheckProduct() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/product')
            .then((res) => res.json())
            .then((datas) => {
                setDatas(datas);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('return')}>
                Return
            </Link>
            <div className={cx('search')}>
                <input className={cx('input')} placeholder="Tìm kiếm theo mã sản phẩm" />
                <button className={cx('button')}>Search</button>
            </div>
            <div className={cx('container')}>
                <table className={cx('table')} border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Dòng máy</th>
                            <th>Tên máy</th>
                            <th>Giá tiền</th>
                            <th>Ngày nhập</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data, index) => (
                            <tr key={index}>
                                <th>{data.id}</th>
                                <th>{data.type}</th>
                                <th>{data.name}</th>
                                <th>{data.price}</th>
                                <th>{data.import_date}</th>
                                <th>{data.status}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CheckProduct;
