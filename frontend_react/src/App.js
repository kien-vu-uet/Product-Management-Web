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
let data = {}

function App() {
    const [postStatus, setPostStatus] = useState('');
    const [user, setUser] = useState({ username: '' });


    const fetchData = async (user) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: `${user.password}` }),
        };
        fetch(`http://127.0.0.1:8000/home/users/${user.username}/`, requestOptions)
            .then((response) => response.json())
            .then((data) => setPostStatus(data));
    };

    const Login = (details) => {
        fetchData(details);
    };

    const render = () => {
        console.log(postStatus.accepted)

        if (postStatus.accepted === true && postStatus.role == 'store') {
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
        } else if (postStatus.accepted === true && postStatus.role == 'warranty') {
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
        } else if (postStatus.accepted === true && postStatus.role == 'admin') {
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
        } else if (postStatus.accepted === true && postStatus.role == 'manufacture') {
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
