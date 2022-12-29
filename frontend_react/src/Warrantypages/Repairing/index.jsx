import { faAnglesRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames/bind"
import styles from './Repairing.module.scss'


const cx = classNames.bind(styles)

function Repairing() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>Đang sửa</h2>
                <div className={cx('content')}>
                    <h3>
                        ID: <span>10</span>
                    </h3>
                    <button className={cx('icon')}>
                        <FontAwesomeIcon icon={faXmark} />
                        Trả
                    </button>
                    <button className={cx('icon')}>
                        <FontAwesomeIcon icon={faAnglesRight} />
                        Tiếp
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Repairing;