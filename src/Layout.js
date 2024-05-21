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
import Register from './components/Auth/Register';
import ListQuiz from './components/User/ListQuiz';
import DetailQuiz from './components/User/DetailQuiz';
import MangageQuiz from './components/Admin/content/Quiz/MangageQuiz';
import Questions from './components/Admin/content/Question/Questions';

const NotFound=()=>{
    return (
        <div className="container mt-3 alert alert-danger">
            404.Not found data with your current URL
        </div>
    )
}

const Layout = (props) => {
    return (
        <div>
        <Routes>
            <Route path='/' element={ <App />} >
                <Route index element={<Home></Home>} />
                <Route path='/user' element={ <ListQuiz></ListQuiz>} />
            
            </Route>
            <Route path='/quiz/:id' element={<DetailQuiz></DetailQuiz>} />
            <Route path='/admin' element={ <Admin></Admin>}>
                <Route index element={<DashBoard></DashBoard>}></Route>
                <Route path='manage-users' element={<ManageUser></ManageUser>}></Route>
                <Route path='manage-quiz' element={<MangageQuiz></MangageQuiz>}></Route>
                <Route path='manage-questions' element={<Questions></Questions>}></Route>
            </Route>
            <Route path='/login' element={ <Login></Login>} />
            <Route path='/register' element={ <Register></Register>} />
            <Route path='*' element={ <NotFound></NotFound>} />
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