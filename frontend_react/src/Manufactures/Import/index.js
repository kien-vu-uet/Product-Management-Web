import classNames from 'classnames/bind';
import styles from './Import.module.scss';
import React from 'react';
import { useEffect, useState, useMemo } from 'react';

import { Link } from 'react-router-dom';
import { faC } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Import() {
    const [productCode, setProductCode] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [fracCode, setFracCode] = useState(0);
    const [datas, setDatas] = useState([]);
    const [fac, setFac] = useState([]);
    const [price, setPrice] = useState(0);
    const [serial, setSerial] = useState(0);

    let uniqueType = [...new Set(datas.map((data) => data.name))];
    let uniqueFactory = [...new Set(fac.map((data) => data.name))];

    const fetchDataFac = () => {
        fetch('http://127.0.0.1:8000/home/factories/')
            .then((res) => res.json())
            .then(async (datas) => {
                await setFac(datas);
            });
    };

    const fetchDataCat = () => {
        fetch('http://127.0.0.1:8000/home/categories/')
            .then((res) => res.json())
            .then(async (datas) => {
                await setDatas(datas);
            });
    };
    useEffect(() => {
        fetchDataCat();
        fetchDataFac();
    }, []);

    console.log(uniqueType);
    console.log(uniqueFactory);

    function facName(name) {
        return (fac.find((c) => c.name == name)).id;
    }
    

    function catId(name) {
        return (datas.find((c) => c.name == name)).id;
    }

    const handleSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                factory: facName(fracCode),
                product: {
                    name: 'May Tinh Cam Tay',
                    serial: serial,
                    category: catId(productCode),
                    price: parseInt(price) ,
                    quantity: parseInt(quantity)
                },
            }),
        };
        
        console.log(requestOptions)
        fetch(`http://127.0.0.1:8000/home/warehouse/news/`, requestOptions)
    };

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('return')} to="/manufacture/importhome">
                Return
            </Link>

            <div className={cx('container')}>
                <div className={cx('import')}>
                    <select className={cx('type')} onChange={(e) => setProductCode(e.target.value)}>
                        {uniqueType.map((uni) => (
                            <option key={uni} value={uni}>
                                {uni}
                            </option>
                        ))}
                    </select>
                    <select className={cx('frac')} onChange={(e) => setFracCode(e.target.value)}>
                        {uniqueFactory.map((uni) => (
                            <option key={uni} value={uni}>
                                {uni}
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        className={cx('quantity')}
                        placeholder="Nhập số lượng"
                        onChange={(e) => setQuantity(e.target.value)}
                    />

                    <input
                        type="number"
                        className={cx('price')}
                        placeholder="Nhập giá tiền"
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <input
                        type="text"
                        className={cx('serial')}
                        placeholder="Serial"
                        onChange={(e) => setSerial(e.target.value)}
                    />
                </div>
                <button className={cx('submit')} onClick={handleSubmit}>
                    Nhập sản phẩm
                </button>
            </div>
        </div>
    );
}

export default Import;
