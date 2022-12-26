import classNames from 'classnames/bind';
import styles from './Import.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
let typeArr = [];
const cx = classNames.bind(styles);
function Import() {
    const [stocks, setStocks] = useState('');
    const [types, setTypes] = useState('');
    const [amounts, setAmounts] = useState('');

    const [datas, setDatas] = useState([]);
    const handleSubmit = () => {
        console.log(stocks);
        console.log(types);
        console.log(amounts);
    };
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
            <div className={cx('container')}>
                <div className={cx('order')}>
                    <select className={cx('stock')} onSelect={(e) => setStocks(e.target.value)}>
                        <option value="kho1">Kho hàng 1</option>
                        <option value="kho2">Kho hàng 2</option>
                        <option value="kho3">Kho hàng 3</option>
                    </select>
                    <select className={cx('type')} onSelect={(e) => setTypes(e.target.value)}>
                        {datas.map((data, index) => (
                            <option key={index} value={data.type}>
                                {data.type}
                            </option>
                        ))}
                    </select>
                    <input
                        className={cx('input')}
                        placeholder="nhập số lượng"
                        onChange={(e) => setAmounts(e.target.value)}
                    />
                    <FontAwesomeIcon className={cx('icon')} icon={faSquarePlus} />
                </div>
                <button className={cx('submit')} onClick={handleSubmit}>
                    Gửi yêu cầu
                </button>
            </div>
        </div>
    );
}

export default Import;
