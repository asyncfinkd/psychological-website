import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AdminPages from "./pages/Admin/AdminPages";
import IndexPages from "./pages/index/IndexPages";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={IndexPages} />
        <Route path="/admin" exact component={AdminPages} />
      </BrowserRouter>
    </>
  );
}
