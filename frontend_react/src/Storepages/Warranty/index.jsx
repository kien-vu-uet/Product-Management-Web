import classNames from 'classnames/bind';
import styles from './Warranty.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// lodash
const cx = classNames.bind(styles);
let product = {};
function Warranty() {
    const [datas, setDatas] = useState([]);
    const [data, setData] = useState({});
    useEffect(() => {
        fetch('http://localhost:8000/product')
            .then((res) => res.json())
            .then((datas) => {
                setDatas(datas);
            });
    }, []);
    const handleSearch = (target) => {
        if (target.length === 5) {
            let searchTarget = datas.find((x) => x.id === parseInt(target));
            if (searchTarget) {
                product = searchTarget;
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('return')}>
                Return
            </Link>
            <div className={cx('container')}>
                <input
                    className={cx('input')}
                    placeholder="Nhập ID sản phẩm:"
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <button onClick={() => setData(product)} className={cx('search')}>
                    Tìm
                </button>
                <div className={cx('info')}>
                    <h4>
                        ID: <span>{data.id}</span>
                    </h4>
                    <h4>
                        Tên sản phẩm: <span>{data.name}</span>
                    </h4>
                    <h4>
                        Mã sản phẩm: <span>{data.type}</span>
                    </h4>
                    <h4>
                        Trạng thái: <span>{data.status}</span>
                    </h4>
                    <h4>
                        Tình trạng bảo hành:
                        {data.sell_date !== null ? <span> {data.sell_date}</span> : <span> Không</span>}
                    </h4>
                </div>
                <button className={cx('send')}>Gửi</button>
            </div>
        </div>
    );
}

export default Warranty;
