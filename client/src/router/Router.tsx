import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from "../views/Home";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" element={<Home />} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Router;
