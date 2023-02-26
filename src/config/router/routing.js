import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import CardDetails from "../../pages/carddetails";
// import CardPost from "../../pages/cardpost";
import Store from "../../pages/store";

export default function AppRouting() {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<Store />} />
                <Route path="card" element={<CardDetails />} />
                {/* <Route path="postcard" element={<CardPost />} /> */}

            </Routes>

        </Router>
    );
}