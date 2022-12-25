import classNames from 'classnames/bind';
import styles from './Warranty.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Warranty() {
    const handleSearch = () => {
        console.log(id);
    };
    const [id, setId] = useState('');
    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('return')}>
                Return
            </Link>
            <div className={cx('container')}>
                <input
                    className={cx('input')}
                    placeholder="Nhập ID sản phẩm:"
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                />
                <button onClick={handleSearch} className={cx('search')}>
                    Tìm
                </button>
                <div className={cx('info')}>
                    <h4>
                        ID: <span>10001</span>
                    </h4>
                    <h4>
                        Tên sản phẩm: <span>Máy tính FX-580 Plus 2022</span>
                    </h4>
                    <h4>
                        Mã sản phẩm: <span>Fx_580_pl</span>
                    </h4>
                    <h4>
                        Trạng thái: <span>Đã bán</span>
                    </h4>
                    <h4>
                        Tình trạng bảo hành: <span>Còn</span>
                    </h4>
                </div>
                <button className={cx('send')}>Gửi</button>
            </div>
        </div>
    );
}

export default Warranty;
