import React from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "../views/Home";

const Router = () => {
    return ( 
        <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" element={<Home />} />
          </Switch>
        </div>
      </BrowserRouter>
     );
}
 
export default Router;