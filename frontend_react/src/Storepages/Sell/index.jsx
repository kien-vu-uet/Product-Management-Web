import classNames from 'classnames/bind';
import styles from './Sell.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Sell() {
    const [datas, setDatas] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState('');

    const fetchData = () => {
        fetch('http://localhost:8000/product')
            .then((res) => res.json())
            .then(async (datas) => {
                await setDatas(datas);
            });
    };
    fetchData();
    const handleSubmit = async () => {
        console.log('dat');
        let find = datas.find((x) => x.type === type);
        if (find) {
            alert('Thành công');
        } else {
            // console.log('that bai');
            alert('Mã sản phẩm chưa đúng');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('return')}>
                Return
            </Link>
            <div className={cx('container')}>
                <input className={cx('name')} placeholder="Tên khách hàng" onChange={(e) => setName(e.target.value)} />
                <input className={cx('phone')} placeholder="Số điện thoại" onChange={(e) => setPhone(e.target.value)} />
                <input className={cx('type')} placeholder="Mã sản phẩm" onChange={(e) => setType(e.target.value)} />
                <button className={cx('submit')} onClick={handleSubmit}>
                    Hoàn tất
                </button>
            </div>
        </div>
    );
}

export default Sell;
