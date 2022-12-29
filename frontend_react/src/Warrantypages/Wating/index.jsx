import { faAnglesRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames/bind"
import styles from './Waiting.module.scss'


const cx = classNames.bind(styles)

function Waiting() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>Chờ bảo hành</h2>
                <div className={cx('content')}>
                    <h3>
                        ID: <span>12</span>
                    </h3>
                    <button className={cx('icon')}>
                        <FontAwesomeIcon icon={faAnglesRight} />
                        Tiếp
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Waiting;