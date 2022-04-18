import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import RawMaterials from "../views/admin/RawMaterials";
import FinishedProducts from "../views/admin/FinishedProducts";
import OrdersTable from "../components/Cards/OrdersTable";
import ProductDetails from "../views/admin/ProductDetails";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Header */}
        <AdminNavbar />
        {/*<HeaderStats />*/}
        <div className="px-4 mx-auto w-full">
          <Switch >
            <Route path="/admin/inventory" exact component={Dashboard} />
            <Route path="/admin/products" exact component={FinishedProducts} />
            <Route path="/admin/product/:productId" exact component={ProductDetails} />
            <Route path="/admin/orders" exact component={OrdersTable} />
            <Route path="/admin/rawmaterials" exact component={RawMaterials} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
