import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Help from '../views/Help';
import Search from '../views/Search';
import Header from '../components/header/Header';

const Router = ({ searchString, setSearchString, setSearchReload, searchReload }) => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home searchReload={searchReload} setSearchReload={setSearchReload} searchString={searchString} setSearchString={setSearchString} />} />
                <Route path="/help" element={<Help />} />
                <Route path="/search" element={<Search searchReload={searchReload} setSearchReload={setSearchReload} searchString={searchString} setSearchString={setSearchString} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
