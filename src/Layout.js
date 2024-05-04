import React from 'react';
import App from './App';

import { Routes, Route } from "react-router-dom";
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import ManageUser from './components/Admin/content/ManageUser';
import DashBoard from './components/Admin/content/DashBoard';
import Login from './components/Auth/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
    return (
        <div>
        <Routes>
            <Route path='/' element={ <App />} >
                <Route index element={<Home></Home>} />
                <Route path='/user' element={ <User></User>} />
            
            </Route>
            <Route path='/admin' element={ <Admin></Admin>}>
                <Route index element={<DashBoard></DashBoard>}></Route>
                <Route path='manage-users' element={<ManageUser></ManageUser>}></Route>
            </Route>
            <Route path='/login' element={ <Login></Login>} />
        </Routes>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            
        </div>
    );
};

export default Layout;