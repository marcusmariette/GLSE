import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Help from '../views/Help';
import Header from '../components/header/Header';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/help' element={<Help />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
