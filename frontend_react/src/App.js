import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, warrantyRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { useState } from 'react';
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

function App() {

    const [user, setUser] = useState({ username: '' });
    const Login = (details) => {
        if (details.username === admin.username && details.password === admin.password) {
            console.log('admin');
            setUser({
                username: details.username,
            });
        } else if (details.username === store.username && details.password === store.password) {
            console.log('store');
            setUser({
                username: details.username,
            });
        } else if (details.username === warranty.username && details.password === warranty.password) {
            console.log('warranty');
            setUser({
                username: details.username,
            });
        } else {
            alert('Mời nhập lại !!!')
            
        }
    };
    const Logout = () => {
        console.log('log out');

    };
    const render = () => {
        if(user.username === store.username) {
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
            )
        } else if(user.username === warranty.username) {
            return(
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
            )
        } else {
            return (
                <LoginForm Login={Login} />
            )
        }
    }
    return (
        <Router>
            <div className="App">
                {render()}                
            </div>
        </Router>
    );
}

export default App;
