import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import "./scss/main.scss";
import Login from './page/Login/Login';
import Dashboard from './page/Dashboard/Dashboard';
import Layout from './Layout/Layout';
import Protected from './functions/Protected';
import AllRecords from './page/AllRecords/AllRecords';
import LaptopRequests from './page/LaptopRequests/LaptopRequests';
import Repairs from './page/Repairs/Repairs';
import Store from './page/Store/Store';
import RegisterUser from './page/Users/RegisterUser';
import CreateClient from './page/Users/CreateClient';
import CreateRole from './page/Users/LoginUser';
import LoginUser from './page/Users/LoginUser';
import ViewInventory from './page/LaptopRequests/ViewInventory';

const App: React.FC<any> = () => {
  // @ts-ignore
  const user = JSON.parse(localStorage.getItem("userin"));

  const auth = <Protected loggedIn={user && user?.token}><Layout /></Protected>

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        {/* protected routes for auth */}
        <Route path="/" element={auth} >
          <Route index element={<Dashboard />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="inventory">
            <Route index element={<LaptopRequests />} />
            <Route path="/inventory/viewinventory/:id/view" element={<ViewInventory />} />
          </Route>

          <Route path="/repairs" element={<Repairs />} />
          <Route path="/store" element={<Store title={''} />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/createclient" element={<CreateClient />} />
          <Route path="/loginuser" element={<LoginUser />} />
          <Route path="/allRecords" element={<AllRecords />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
