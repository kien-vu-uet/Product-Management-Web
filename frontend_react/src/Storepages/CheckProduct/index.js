import classNames from 'classnames/bind';
import styles from './CheckProduct.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
let product = [];
function CheckProduct() {
    const [datas, setDatas] = useState([]);
    const fetchData = () => {
        fetch('http://127.0.0.1:8000/home/products/')
            .then((res) => res.json())
            .then(async (datas) => {
                await setDatas(datas);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    const handleSearch = async (target) => {
        await fetchData();
        if (target.length !== 0) {
            datas.map((data) => {
                if (data.category.name === target) {
                    product.push(data);
                }
            });
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('return')}>
                Return
            </Link>
            <div className={cx('search')}>
                <input
                    className={cx('input')}
                    placeholder="Tìm kiếm theo mã sản phẩm"
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <button
                    className={cx('button')}
                    onClick={() => {
                        setDatas(product);
                        product = [];
                    }}
                >
                    Search
                </button>
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
                                <th>{data.category.name}</th>
                                <th>{data.name}</th>
                                <th>{data.price}</th>
                                <th>{data.manifactoring_date}</th>
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
