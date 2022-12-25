// Layout
import Import from '~/Storepages/Import';
import CheckProduct from '~/Storepages/CheckProduct';
import Home from '~/Storepages/Home';
import Warranty from '~/Storepages/Warranty';
import Sell from '~/Storepages/Sell';
import Revoke from '~/Storepages/Revoke';

export const publicRoutes = [
    {
        path: '',
        component: Home,
    },
    {
        path: '/home/check',
        component: CheckProduct,
    },
    {
        path: '/home/import',
        component: Import,
    },
    {
        path: '/home/warranty',
        component: Warranty,
    },
    {
        path: '/home/sell',
        component: Sell,
    },
    {
        path: '/home/revoke',
        component: Revoke,
    },
];
export const homeRoutes = [
    {
        path: '/home/check',
        component: CheckProduct,
    },
    {
        path: '/home/import',
        component: Import,
    },
    {
        path: '/home/warranty',
        component: Warranty,
    },
    {
        path: '/home/sell',
        component: Sell,
    },
    {
        path: '/home/revoke',
        component: Revoke,
    },
];
export const privateRoutes = [];
