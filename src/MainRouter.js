import React from "react";
import {Route, Routes} from "react-router-dom";
import AddLand from "./pages/AddLand";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/land/add" element={<AddLand/>}></Route>
            </Routes>
        </div>
    );
};

export default MainRouter;