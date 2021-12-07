import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./../assets/scss/app.scss";
import Header from "./Header";
import HomePage from "./pages/Home";
import PageTwo from "./pages/PageTwo";

export const App = (): React.ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page2" element={<PageTwo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
