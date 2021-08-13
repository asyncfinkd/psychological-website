import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutPages from "./pages/about/AboutPages";
import AdminPages from "./pages/Admin/AdminPages";
import IndexPages from "./pages/index/IndexPages";
import PartnersPages from "./pages/partners/PartnersPages";
import { EventsContext } from "./context/events/EventsContext";
import axios from "axios";

export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:3002/api/events").then((res) => {
      setEvents(res.data);
    });
  }, []);
  return (
    <>
      <EventsContext.Provider value={{ events, setEvents }}>
        <BrowserRouter>
          <Route path="/" exact component={IndexPages} />
          <Route path="/admin" exact component={AdminPages} />
          <Route path="/partners" exact component={PartnersPages} />
          <Route path="/about" exact component={AboutPages} />
        </BrowserRouter>
      </EventsContext.Provider>
    </>
  );
}
