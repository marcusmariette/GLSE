import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Help from '../views/Help';
import NLPTesting from '../views/NLPTesting';

import Header from '../components/header/Header';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/help' element={<Help />} />
                <Route path='/NLPTesting' element={<NLPTesting />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
