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
import AdminRevoke from '~/Adminpages/Revoke';
import AccountManagement from '~/Adminpages/AccountManagement';
import AdminStatics from '~/Adminpages/Statics';

import ManufactureHome from '~/Manufactures/ManufactureHome';
import ManufactureImportHome from '~/Manufactures/ImportHome';
import ManufactureImport from '~/Manufactures/Import';
import ManufactureCreate from '~/Manufactures/Create';
import ManufactureExport from '~/Manufactures/Export';
import ManufactureDefectiveProduct from '~/Manufactures/DefectiveProduct';
import ManufactureStatics from '~/Manufactures/Statics';

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
    {
        path: '/manufacture',
        component: ManufactureHome,
    },
    {
        path: '/manufacture/importhome',
        component: ManufactureImportHome,
    },
    {
        path: '/manufacture/import',
        component: ManufactureImport,
    },
    {
        path: '/manufacture/create',
        component: ManufactureCreate,
    },
    {
        path: '/manufacture/export',
        component: ManufactureExport,
    },
    {
        path: '/manufacture/defectiveproduct',
        component: ManufactureDefectiveProduct,
    },
    {
        path: '/manufacture/statics',
        component: ManufactureStatics,
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
];
export const privateRoutes = [];
