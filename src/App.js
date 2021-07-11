import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import IndexPages from "./pages/index/IndexPages";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={IndexPages} />
      </BrowserRouter>
    </>
  );
}
