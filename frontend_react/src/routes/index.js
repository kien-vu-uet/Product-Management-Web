// Layout
import Import from '~/Storepages/Import';
import CheckProduct from '~/Storepages/CheckProduct';
import Home from '~/Storepages/Home';
import Warranty from '~/Storepages/Warranty';
import Sell from '~/Storepages/Sell';
import Revoke from '~/Storepages/Revoke';
import Admin from '~/Adminpages/Admin';
import ProductCategoryHome from '~/Adminpages/ProductCategoryHome';
import ProductCategory from '~/Adminpages/ProductCategory';
import AdminRevoke from '~/Adminpages/Revoke'
import AccountManagement from '~/Adminpages/AccountManagement';
import AdminStatics from '~/Adminpages/Statics';


export const publicRoutes = [
    {
        path: '/',
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
    {
        path: '/admin',
        component: Admin,
    },
    {
        path: '/admin/productcategoryhome',
        component: ProductCategoryHome,
    },
    {
        path: '/admin/productcategory',
        component: ProductCategory,
    },
    {
        path: '/admin/revoke',
        component: AdminRevoke,
    },
    {
        path: '/admin/accountmanagement',
        component: AccountManagement,
    },
    {
        path: '/admin/statics',
        component: AdminStatics,
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
export const adminRoutes = [
    {
        path: '/admin',
        component: Admin,
    },
    {
        path: '/admin/productcategoryhome',
        component: ProductCategoryHome,
    },
    {
        path: '/admin/productcategory',
        component: ProductCategory,
    },
    {
        path: '/admin/revoke',
        component: AdminRevoke,
    },
    {
        path: '/admin/accountmanagement',
        component: AccountManagement,
    },
    {
        path: '/admin/statics',
        component: AdminStatics,
    },
]
export const privateRoutes = [];

