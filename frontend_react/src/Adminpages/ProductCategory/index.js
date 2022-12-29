import classNames from 'classnames/bind';
import styles from './ProductCategory.module.scss';
import { useEffect, useState } from 'react';
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
    const handleSearch = async (target) => {
        await fetchData();
        if (target.length !== 0) {
            datas.map((data) => {
                if (data.type === target) {
                    product.push(data);
                }
            });
        }
    };
    let unique = [...new Set(datas.map((data) => data.type))];

    return (
        <div className={cx('wrapper')}>
            <button className={cx('return')}>
                <Link to="/admin/productcategoryhome">
                    <span className={cx('text_container')}>Return</span>
                </Link>
            </button>
            
            <div className={cx('container')}>
                <table className={cx('table')} border="1">
                    <thead>
                        <tr>
                            <th>Dòng máy</th>
                            <th>Tên máy</th>
                            <th>Số lượng</th>
                            <th>Giá tiền</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data, index) => (
                            <tr key={index}>
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

export default ProductCategory;
