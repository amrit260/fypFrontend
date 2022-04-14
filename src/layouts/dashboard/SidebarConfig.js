// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

export const AdminSidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'users',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'Tours',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill')
  },
  {
    title: 'My Profile',
    path: '/dashboard/myaccount',
    icon: getIcon('healthicons:ui-user-profile')
  },
  {
    title: 'Manage Bookings',
    path: '/dashboard/managebookings',
    icon: getIcon('bi:book-fill')
  },
  // {
  //   title: 'MyPrfile',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill')
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill')
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill')
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill')
  // }
];

export const userSidebarConfig = [
  {
    title: 'My Profile',
    path: '/dashboard/myaccount',
    icon: getIcon('healthicons:ui-user-profile')
  },
  {
    title: 'My Bookings',
    path: '/dashboard/mybookings',
    icon: getIcon('bi:book-fill')
  },
]