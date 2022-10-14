import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Help from '../views/Help';
import Search from '../views/Search';
import Header from '../components/header/Header';

const Router = ({ searchString, setSearchString, setSearchReload, searchReload, setFetchingData, fetchingData }) => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home searchString={searchString} setSearchString={setSearchString} setSearchReload={setSearchReload} fetchingData={fetchingData} />
                    }
                />
                <Route path="/help" element={<Help />} />
                <Route
                    path="/search"
                    element={
                        <Search
                            searchString={searchString}
                            setSearchString={setSearchString}
                            searchReload={searchReload}
                            setSearchReload={setSearchReload}
                            fetchingData={fetchingData}
                            setFetchingData={setFetchingData}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
