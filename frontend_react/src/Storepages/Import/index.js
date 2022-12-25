import classNames from 'classnames/bind';
import styles from './Import.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Import() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/product')
            .then((res) => res.json())
            .then((datas) => {
                setDatas(datas);
                console.log(datas);
            });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('return')}>
                Return
            </Link>
            <div className={cx('order')}>
                <select className={cx('stock')}>
                    <option value="kho1">Kho hàng 1</option>
                    <option value="kho2">Kho hàng 2</option>
                    <option value="kho3">Kho hàng 3</option>
                </select>
                <select className={cx('type')}>
                    <option value="Fx-580_pl">Fx-580_pl</option>
                    <option value="Fx-580">Fx-580</option>
                    <option value="Fx-570_pl">Fx-570_pl</option>
                    <option value="Fx-560_pl">Fx-560_pl</option>
                </select>
                <input className={cx('input')} placeholder="nhập số lượng" />
                <FontAwesomeIcon className={cx('icon')} icon={faSquarePlus} />
            </div>
            <button className={cx('submit')}>Gửi yêu cầu</button>
        </div>
    );
}

export default Import;
