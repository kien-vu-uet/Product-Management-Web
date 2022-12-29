import classNames from 'classnames/bind';
import styles from './AccountManagement.module.scss';
import React from 'react';
import { useEffect, useState, useMemo } from 'react';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);


function AccountManagement() {
    const [accountType, setAccountType] = useState('store');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = () => {
        if ((username != '') && (password != '')) {
            alert(`Đã tạo tài khoản thành công cho ${accountType}`);
            console.log(accountType);
            console.log(username);
            console.log(password);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <button className={cx('return')}>
                <Link to="/admin">
                    <span className={cx('text_container')}>Return</span>
                </Link>
            </button>

            <div className={cx('container')}>
                <div className={cx('account')}>
                    <input
                        type="text"
                        className={cx('username')}
                        placeholder="Tên tài khoản"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        className={cx('password')}
                        placeholder="Mật khẩu"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <select className={cx('account_type')} onChange={(e) => setAccountType(e.target.value)}>
                        <option value="store">Cửa hàng</option>
                        <option value="manufacture">Nhà sản xuất</option>
                        <option value="warranty_center">Trung tâm bảo hành</option>
                    </select>
                </div>
                <button className={cx('submit')} onClick={handleSubmit}>
                    <span className={cx('text_container')}>Tạo tài khoản</span>
                </button>
            </div>
        </div>
    );
}

export default AccountManagement;
