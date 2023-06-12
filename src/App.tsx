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
import CreateRole from './page/Users/CreateRole';

const App: React.FC<any> = () => {
  const user = "user"
  const token = "ihkuhuhajibbibib"
  const auth = <Protected loggedIn={user && token}><Layout /></Protected>

  return (
    <BrowserRouter>
      <Routes>
        {/* @ts-ignore */}
        <Route path="/" element={<Login />} exact />
        {/* protected routes for auth */}
        <Route path="/" element={auth} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/laptoprequests" element={<LaptopRequests />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/store" element={<Store title={''} />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/createclient" element={<CreateClient />} />
          <Route path="/createrole" element={<CreateRole />} />
          <Route path="/allRecords" element={<AllRecords />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
