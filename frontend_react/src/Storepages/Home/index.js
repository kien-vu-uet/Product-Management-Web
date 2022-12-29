import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <div className={cx('function')}>
                <Link className={cx('button')} to="store/check">
                    Kiểm tra sản phẩm
                </Link>

                    <Link className={cx('button')} to="store/import">
                    Yêu cầu nhập hàng
                </Link>
                <Link className={cx('button')} to="store/warranty">
                    Trung tâm bảo hành
                </Link>
                <Link className={cx('button')} to="store/sell">
                    Bán hàng
                </Link>
                <Link className={cx('button')} to="store/revoke">
                    Triệu hồi
                </Link>
            </div>
            <div className={cx('notification')}>
                <h2>Noti</h2>
                <div className={cx('content')}>
                    <h4>
                        Nhập sản phẩm
                        <span> Fx_580</span> Thành công !!!
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Home;
