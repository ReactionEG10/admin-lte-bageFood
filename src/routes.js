
import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import Store from "views/Store.js";
import RiderTable from "views/RiderTable";
import TableWallet from "views/TableWallet";
import FormLogin from "views/FormLogin";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/table/report",
    name: "Report",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/table/store",
    name: "Store",
    icon: "nc-icon nc-cart-simple",
    component: Store,
    layout: "/admin"
  },
  {
    path: "/table/rider",
    name: "Rider",
    icon: "nc-icon nc-delivery-fast",
    component: RiderTable,
    layout: "/admin"
  },
  {
    path: "/table/wallet",
    name: "Wallet",
    icon: "nc-icon nc-paper-2",
    component: TableWallet,
    layout: "/admin"
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "nc-icon nc-chart-pie-35",
  //   component: FormLogin,
  //   layout: "/admin"
  // },
  
];

export default dashboardRoutes;
