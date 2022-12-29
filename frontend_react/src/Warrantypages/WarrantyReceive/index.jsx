// import { faAnglesRight, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './WarrantyReceive.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import Waiting from '../Wating';
// import Repairing from '../Repairing';
// import Finish from '../Finish';

const cx = classNames.bind(styles);

function WarrantyReceive() {
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

    const handleClick = () => {
        {
            datas.map((data, index) => {
                if (data.status === 'Đang bảo hành') {
                    data.status = 'Sửa xong';
                }
            });
        }
        // fetchData()
        console.log(datas);
    };

    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('return')}>
                Return
            </Link>

            <div className={cx('container')}>
                <table className={cx('table')} border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Dòng máy</th>
                            <th>Tên máy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data, index) => {
                            if (data.status === 'Đang bảo hành') {
                                return (
                                    <tr key={index}>
                                        <th>{data.id}</th>
                                        <th>{data.type}</th>
                                        <th>{data.name}</th>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
                <button className={cx('repair')} onClick={handleClick}>
                    Sửa chữa tất cả
                </button>
                {/* <div className={cx('queue')}>
                        <Waiting />
                    </div>
                    <div className={cx('repairing')}>
                        <Repairing />
                    </div>
                    <div className={cx('finish')}>
                        <Finish />
                    </div> */}
            </div>
        </div>
    );
}

export default WarrantyReceive;
