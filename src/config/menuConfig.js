export const MenuConfig = [
  {
    title: '首页工作台',
    key: '/admin/home',
  },
  {
    title: '订单管理',
    key: '/admin/order',
    children: [
      {
        title: '订单列表',
        key: '/admin/order/list',
      },
      {
        title: '新增订单',
        key: '/admin/order/add',
      },
    ],
  },
  {
    title: '员工管理',
    key: '/admin/user',
  },
  {
    title: '权限设置',
    key: '/admin/permission',
  },
];
