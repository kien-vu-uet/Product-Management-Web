// Layout
import Import from '~/Storepages/Import';
import CheckProduct from '~/Storepages/CheckProduct';
import Home from '~/Storepages/Home';
import Warranty from '~/Storepages/Warranty';
import Sell from '~/Storepages/Sell';
import Revoke from '~/Storepages/Revoke';
import NoticeCustomer from '~/Storepages/NoticeCustomer';
import NoticeStock from '~/Storepages/NoticeStock';
import WarrantyHome from '~/Warrantypages/WarrantyHome';
import WarrantyStatistic from '~/Warrantypages/WarrantyStatistic';
import WarrantyReceive from '~/Warrantypages/WarrantyReceive';

export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/store/check',
        component: CheckProduct,
    },
    {
        path: '/store/import',
        component: Import,
    },
    {
        path: '/store/warranty',
        component: Warranty,
    },
    {
        path: '/store/sell',
        component: Sell,
    },
    {
        path: '/store/revoke',
        component: Revoke,
    },
    {
        path: '/store/revoke/customer',
        component: NoticeCustomer,
    },
    {
        path: '/store/revoke/stock',
        component: NoticeStock,
    },
];
export const warrantyRoutes = [
    {
        path: '/',
        component: WarrantyHome,
    },
    { path: '/warranty/bill', component:WarrantyReceive },
    {
        path: '/warranty/statistic',
        component: WarrantyStatistic,
    },
];

export const privateRoutes = [];
