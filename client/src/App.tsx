import React from "react";
import Header from "./components/header/Header";
import Router from "./router/Router";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Router />
        </>
    );
};

export default App;
