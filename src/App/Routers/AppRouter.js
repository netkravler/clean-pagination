import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Partials/Footer";
import Header from "../../components/Partials/Header";

import { Home } from "../../Pages/Home";


import { NotFound } from "../../Pages/NotFound";
import { Pagination } from "../../Pages/Pagination";


const AppRouter = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="/paginate" element={<Pagination />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
