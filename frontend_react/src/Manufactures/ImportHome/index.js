import classNames from 'classnames/bind';
import styles from './Import.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ImportHome() {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('return')} to="/">
                Return
            </Link>

            <div className={cx('container')}>
                <div className={cx('function')}>
                    <Link className={cx('button')} to="/manufacture/import">
                        Nhập sản phẩm
                    </Link>
                    <Link className={cx('button')} to="/manufacture/create">
                        Tạo sản phẩm mới
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ImportHome;
