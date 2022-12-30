
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



import Admin from '~/Adminpages/Admin';
import ProductCategoryHome from '~/Adminpages/ProductCategoryHome';
import ProductCategory from '~/Adminpages/ProductCategory';
import AdminRevoke from '~/Adminpages/AdminRevoke';
import AccountManagement from '~/Adminpages/AccountManagement';
import AdminStatics from '~/Adminpages/AdminStatics';
import ManufactureHome from '~/Manufactures/ManufactureHome';
import ImportHome from '~/Manufactures/ImportHome';
import ManufactureImport from '~/Manufactures/Import';
import Create from '~/Manufactures/Create';
import Export from '~/Manufactures/Export';
import DefectiveProduct from '~/Manufactures/DefectiveProduct';
import Statics from '~/Manufactures/Statics';



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

export const adminRoutes = [
    {
        path: '/',
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
        component: AdminStatics ,
    },
];
export const manufactureRoutes = [
    {
        path: '/',
        component: ManufactureHome,
    },
    {
        path: '/manufacture/importhome',
        component: ImportHome,
    },
    {
        path: '/manufacture/import',
        component: ManufactureImport,
    },
    {
        path: '/manufacture/create',
        component: Create,
    },
    {
        path: '/manufacture/export',
        component: Export,
    },
    {
        path: '/manufacture/defectiveproduct',
        component: DefectiveProduct,
    },
    {
        path: '/manufacture/statics',
        component: Statics,
    },
];
export const privateRoutes = [];

