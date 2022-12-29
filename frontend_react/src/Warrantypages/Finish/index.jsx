import { faAnglesRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames/bind"
import styles from './Finish.module.scss'


const cx = classNames.bind(styles)

function Finish() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>Hoàn thành</h2>
                <div className={cx('content')}>
                    <h3>
                        ID: <span>9</span>
                    </h3>
                    <button className={cx('icon')}>
                        <FontAwesomeIcon icon={faAnglesRight} />
                        Trả khách
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Finish;