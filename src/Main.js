import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import PlayerPage from "./PlayerPage";
import SearchPage from "./SearchPage";
import ShowPage from "./ShowPage";

const Main = () => (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/show" element={<ShowPage />} />
            <Route exact path="/play" element={<PlayerPage />} />
            <Route exact path="/search" element={<SearchPage />} />
        </Routes>
);

export default Main;
