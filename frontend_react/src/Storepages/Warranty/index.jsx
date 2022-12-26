import classNames from 'classnames/bind';
import styles from './Warranty.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// lodash
const cx = classNames.bind(styles);
let product = {};
let date = new Date();
let curDate = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
function Warranty() {
    const [datas, setDatas] = useState([]);
    const [data, setData] = useState({});
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

    const handleSend = () => {
        data.sell_date = curDate;
        console.log(data);
    };
    const handleSearch = (target) => {
        if (target.length === 5) {
            let searchTarget = datas.find((x) => x.id === parseInt(target));
            if (searchTarget) {
                product = searchTarget;
            } else {
                alert('Không có sản phẩm này, vui lòng tìm kiếm lại');
            }
        } else if (target.length > 6) {
            alert('Mời nhập lại');
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
                        <span></span>
                    </h4>
                </div>
                <button className={cx('send')} onClick={handleSend}>
                    Gửi
                </button>
            </div>
        </div>
    );
}

export default Warranty;
