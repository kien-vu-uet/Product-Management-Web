import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('contact')}>
                    <a href="https://www.facebook.com/lamdat2802/">
                        <FontAwesomeIcon icon={faFacebook} className={cx('icon')} />
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                        <FontAwesomeIcon icon={faEnvelopeOpen} className={cx('icon')} />
                    </a>
                    <a href="https://www.instagram.com/lamdat__2802/">
                        <FontAwesomeIcon icon={faInstagramSquare} className={cx('icon')} />
                    </a>
                </div>
                <div className={cx('about')}>
                    <h4>DaKiSon corporation</h4>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
