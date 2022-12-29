import classNames from 'classnames/bind';
import styles from './Import.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
let unique = []
function Import() {
    const [stocks, setStocks] = useState('kho1');
    const [types, setTypes] = useState('Fx_580_pl');
    const [amounts, setAmounts] = useState(50);
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
                console.log(datas);
            });
    }, []);

    unique = [...new Set(datas.map(data => data.type))]

    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('return')}>
                Return
            </Link>
            <div className={cx('container')}>
                <div className={cx('order')}>
                    <select className={cx('stock')} onChange={(e) => setStocks(e.target.value)}>
                        <option value="kho1">Kho hàng 1</option>
                        <option value="kho2">Kho hàng 2</option>
                        <option value="kho3">Kho hàng 3</option>
                    </select>
                    <select className={cx('type')} onChange={(e) => setTypes(e.target.value)}>
                        {unique.map((uni) => (
                            <option key={uni} value={uni}>
                                {uni}
                            </option>
                        ))}
                    </select>
                    <div className={cx('amount')}>
                    <span>{amounts}</span>
                        <input
                            type="range"
                            className={cx('input')}
                            placeholder="nhập số lượng"
                            onChange={(e) => setAmounts(e.target.value)}
                        />
                    </div>
                </div>
                <button className={cx('submit')} onClick={handleSubmit}>
                    Gửi yêu cầu
                </button>
            </div>
        </div>
    );
}

export default Import;
