import classNames from "classnames/bind";
import { useState } from "react";
import styles from './LoginForm.module.scss'


const cx = classNames.bind(styles)

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({username: "", password : ""});
    const handleSubmit = e => {
        e.preventDefault();
        Login(details)
    }
    return ( 
        <div className={cx('wrapper')} >
            <div className={cx('container')}>
                <h1 className={cx('heading')}>Đăng nhập</h1>
                <input className={cx('username')} placeholder = "Nhập tên tài khoản" onChange={e => setDetails({...details, username: e.target.value})} value = {details.username}/>
                <input type="password" className={cx('password')} placeholder = "Nhập mật khẩu" onChange={e => setDetails({...details, password: e.target.value})} value ={details.password}/>
                <button className={cx('login')} onClick = {handleSubmit}>Login</button>
            </div>
        </div>
    );
}

export default LoginForm;