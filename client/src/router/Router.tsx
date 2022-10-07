import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Help from '../views/Help';
import Search from '../views/Search';
import Header from '../components/header/Header';

const Router = ({ firebaseDatabase }) => {
    console.log(firebaseDatabase);
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/help' element={<Help />} />
                <Route path='/search/:query' element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
