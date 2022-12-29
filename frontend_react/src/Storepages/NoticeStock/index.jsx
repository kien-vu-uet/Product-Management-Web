import classNames from "classnames/bind";
import styles from './NoticeStock.module.scss'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles)

let unique = []

function NoticeStock() {

    return ( 
        <div className={cx('wrapper')}>
            <Link to="/home/revoke" className={cx('return')}>
                Return
            </Link>
            <div className={cx('container')}>
                     <h1></h1>
            </div>
        </div>
    );
}

export default NoticeStock;