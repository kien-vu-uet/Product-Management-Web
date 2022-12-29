import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, warrantyRoutes, adminRoutes, manufactureRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { useState, useEffect } from 'react';
import LoginForm from './Login';

const admin = {
    username: 'admin',
    password: '123',
};
const store = {
    username: 'store',
    password: '123',
};
const warranty = {
    username: 'warranty',
    password: '123',
};
const manufacture = {
    username: 'manufacture',
    password: '123',
};

function App() {
    const [postStatus, setPostStatus] = useState('');
    const [user, setUser] = useState({ username: '' });

    // useEffect(() => {
    //     // POST request using fetch inside useEffect React hook
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ password: '1234567' }),
    //     };
    //     fetch('http://127.0.0.1:8000/home/users/kienvt/', requestOptions)
    //         .then((response) => response.json())
    //         .then((data) => setPostStatus(data.accepted));

    //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

    // console.log(postStatus);

    const Login = (details) => {
        if (details.username == admin.username && details.password === admin.password) {
            console.log('admin');
            setUser({
                username: details.username,
                password : details.password
            });
        } else if (details.username === store.username && details.password === store.password) {
            console.log('store');
            setUser({
                username: details.username,
                password : details.password
            });
        } else if (details.username === warranty.username && details.password === warranty.password) {
            console.log('warranty');
            setUser({
                username: details.username,
                password : details.password
            });
        } else if(details.username === manufacture.username && details.password === manufacture.password)  {
            console.log('manufacture');
            setUser({
                username: details.username,
                password : details.password
            });
        } else {
            alert('Mời nhập lại !!!');
        }
    };
    // const Logout = () => {
    //     console.log('log out');
    // };
    const render = () => {
        if ((user.username === store.username) && (user.password == store.password)) {
            return (
                <Routes>
                    {publicRoutes.map((routes, index) => {
                        const Page = routes.component;

                        let Layout = DefaultLayout;
                        if (routes.layout) {
                            Layout = routes.layout;
                        } else if (routes.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={routes.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            );
        } else if ((user.username === warranty.username) && (user.password === warranty.password)) {
            return (
                <Routes>
                    {warrantyRoutes.map((routes, index) => {
                        const Page = routes.component;

                        let Layout = DefaultLayout;
                        if (routes.layout) {
                            Layout = routes.layout;
                        } else if (routes.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={routes.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            );
        } else if ((user.username === admin.username) && (user.password === admin.password)) {
            return (
                <Routes>
                    {adminRoutes.map((routes, index) => {
                        const Page = routes.component;

                        let Layout = DefaultLayout;
                        if (routes.layout) {
                            Layout = routes.layout;
                        } else if (routes.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={routes.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            );
        } else if ((user.username === manufacture.username) && (user.password === manufacture.password)) {
            return (
                <Routes>
                    {manufactureRoutes.map((routes, index) => {
                        const Page = routes.component;

                        let Layout = DefaultLayout;
                        if (routes.layout) {
                            Layout = routes.layout;
                        } else if (routes.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={routes.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            );
        } else {
            return <LoginForm Login={Login} />;
        }
    };
    return (
        <Router>
            <div className="App">{render()}</div>
        </Router>
    );
}

export default App;
