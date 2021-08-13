import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPages from "./pages/about/AboutPages";
import AdminPages from "./pages/Admin/AdminPages";
import IndexPages from "./pages/index/IndexPages";
import PartnersPages from "./pages/partners/PartnersPages";
import EventsPages from "./pages/events/EventsPages";
import { EventsContext } from "./context/events/EventsContext";
import axios from "axios";
import EventsDetailPages from "./pages/events/detail/EventsDetailPages";
import env from "./application/environment/env.json";

export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.post(`${env.host}/api/events`).then((res) => {
      setEvents(res.data);
    });
  }, []);
  return (
    <>
      <EventsContext.Provider value={{ events, setEvents }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={IndexPages} />
            <Route path="/admin" exact component={AdminPages} />
            <Route path="/partners" exact component={PartnersPages} />
            <Route path="/about" exact component={AboutPages} />
            <Route path="/events" exact component={EventsPages} />
            <Route path="/events/:id" exact component={EventsDetailPages} />
          </Switch>
        </BrowserRouter>
      </EventsContext.Provider>
    </>
  );
}
