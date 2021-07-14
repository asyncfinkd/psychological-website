import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AdminPages from "./pages/Admin/AdminPages";
import IndexPages from "./pages/index/IndexPages";
import PartnersPages from "./pages/partners/PartnersPages";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={IndexPages} />
        <Route path="/admin" exact component={AdminPages} />
        <Route path="/partners" exact component={PartnersPages} />
      </BrowserRouter>
    </>
  );
}
