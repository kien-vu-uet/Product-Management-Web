import classNames from "classnames/bind";
import styles from './NoticeCustomer.module.scss'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles)

let unique = []

function NoticeCustomer() {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/product')
            .then((res) => res.json())
            .then((datas) => {
                setDatas(datas);
                console.log(datas);
            });
    }, []);
    unique = [...new Set(datas.map(data => data.type))]

    const handleSend = () => {
        unique.map((uni) => {
            console.log(uni);
        })
    }
    return ( 
        <div className={cx('wrapper')}>
            <Link to="/home/revoke" className={cx('return')}>
                Return
            </Link>
            <div className={cx('container')}>
            <table className={cx('table')} border="1">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên khách hàng</th>
                            <th>Số điện thoại</th>
                            <th>Ngày mua</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data, index) => (
                            <tr key={index}>
                                <th>{data.type}</th>
                                <th>{data.type}</th>
                                <th>{data.type}</th>
                                <th>{data.sell_date}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className={cx('send')} onClick = {handleSend}>Gửi</button>
            </div>
    );
}

export default NoticeCustomer;