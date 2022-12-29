// Layout
import Import from '~/Storepages/Import';
import CheckProduct from '~/Storepages/CheckProduct';
import Home from '~/Storepages/Home';
import Warranty from '~/Storepages/Warranty';
import Sell from '~/Storepages/Sell';
import Revoke from '~/Storepages/Revoke';
// <<<<<<< HEAD
import NoticeCustomer from '~/Storepages/NoticeCustomer';
import NoticeStock from '~/Storepages/NoticeStock';
import WarrantyHome from '~/Warrantypages/WarrantyHome';
import WarrantyStatistic from '~/Warrantypages/WarrantyStatistic';
import WarrantyReceive from '~/Warrantypages/WarrantyReceive';
// =======
// import Admin from '~/Adminpages/Admin';
// import ProductCategoryHome from '~/Adminpages/ProductCategoryHome';
// import ProductCategory from '~/Adminpages/ProductCategory';
// import AdminRevoke from '~/Adminpages/Revoke'
// import AccountManagement from '~/Adminpages/AccountManagement';
// import AdminStatics from '~/Adminpages/Statics';

// >>>>>>> 1ffd3057ab3c545a97d4d4046079d669e47cb267

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
// <<<<<<< HEAD
// =======
//     {
//         path: '/admin',
//         component: Admin,
//     },
//     {
//         path: '/admin/productcategoryhome',
//         component: ProductCategoryHome,
//     },
//     {
//         path: '/admin/productcategory',
//         component: ProductCategory,
//     },
//     {
//         path: '/admin/revoke',
//         component: AdminRevoke,
//     },
//     {
//         path: '/admin/accountmanagement',
//         component: AccountManagement,
//     },
//     {
//         path: '/admin/statics',
//         component: AdminStatics,
//     },
// ];
// export const homeRoutes = [
// >>>>>>> 1ffd3057ab3c545a97d4d4046079d669e47cb267
    {
        path: '/store/revoke/customer',
        component: NoticeCustomer,
    },
    {
        path: '/store/revoke/stock',
        component: NoticeStock,
    },
];
// <<<<<<< HEAD
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

// =======
// export const adminRoutes = [
//     {
//         path: '/admin',
//         component: Admin,
//     },
//     {
//         path: '/admin/productcategoryhome',
//         component: ProductCategoryHome,
//     },
//     {
//         path: '/admin/productcategory',
//         component: ProductCategory,
//     },
//     {
//         path: '/admin/revoke',
//         component: AdminRevoke,
//     },
//     {
//         path: '/admin/accountmanagement',
//         component: AccountManagement,
//     },
//     {
//         path: '/admin/statics',
//         component: AdminStatics,
//     },
// ]
// >>>>>>> 1ffd3057ab3c545a97d4d4046079d669e47cb267
export const privateRoutes = [];

