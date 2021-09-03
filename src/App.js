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
import AdminEventsPages from "./pages/Admin/events/AdminEventsPages";
import AdminAdd from "./pages/Admin/add/AdminAdd";
import AdminAboutPages from "./pages/Admin/about/AdminAboutPages";
import AdminPartnersPages from "./pages/Admin/partners/AdminPartnersPages";
import AdminPartnersAddPages from "./pages/Admin/partners/add/AdminPartnersAddPages";
import ErrorPages from "./pages/404/ErrorPages";
import AdminReports from "./pages/Admin/reports/AdminReports";
import ContactPages from "./pages/contact/ContactPages";

export default function App() {
  const [events, setEvents] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [abouts, setAbouts] = useState([]);
  const [partners, setPartners] = useState([]);
  const header = localStorage.getItem("header");
  const [check, setCheck] = useState(false);
  
  const changeLanguageHandler = (lang) => {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
  useEffect(() => {
    if(localStorage.getItem("lang") == "en") {
      document.body.classList.add("en");
    }
    axios.post(`${env.host}/api/events`).then((res) => {
      setEvents(res.data);
    });
    axios.post(`${env.host}/api/about`).then((res) => {
      setAbouts(res.data);
    });
    axios.post(`${env.host}/api/partners`).then((res) => {
      setPartners(res.data);
    });
    axios
      .post(
        `${env.host}/api/checkifadmin`,
        {},
        { headers: { Authorization: `Bearer ${header}` } }
      )
      .then((res) => {
        if (res.data.success) {
          setCheck(res.data.success);
        } else {
          setCheck(false);
        }
      });
  }, []);
  return (
    <>
    <div className="floating__action" onClick={() => {
      let el = document.querySelector(".floating__action");
      el.classList.toggle("active");
    }}>
      <span>
        <img src="http://simpleicon.com/wp-content/uploads/global1.png" alt="" style={{height: '25px', width: "25px"}} />
      </span>
      <ul>
        <li onClick={() => changeLanguageHandler("ge")} style={{fontFamily: "BPG Mrgvlovani Caps"}}><img src="https://i0.wp.com/worldflags.com/wp-content/uploads/Flag-of-Georgia.png?fit=2000%2C1333" alt="" /> ქართული</li>
        <li onClick={() => changeLanguageHandler("en")} style={{fontFamily: "sans-serif"}}><img src="http://wallpoper.com/images/00/35/72/59/british-flag_00357259.jpg" alt="" /> English</li>
      </ul>
    </div>
      <EventsContext.Provider
        value={{
          events,
          setEvents,
          clicked,
          setClicked,
          abouts,
          setAbouts,
          partners,
          setPartners,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={IndexPages} />
            <Route path="/admin" exact component={AdminPages} />
            <Route path="/partners" exact component={PartnersPages} />
            <Route path="/about" exact component={AboutPages} />
            <Route path="/events" exact component={EventsPages} />
            <Route path="/events/:id" exact component={EventsDetailPages} />
            <Route path="/contact" exact component={ContactPages} />
            {check && (
              <>
                <Route
                  path="/admin/events"
                  exact
                  component={AdminEventsPages}
                />
                <Route path="/admin/events/add" exact component={AdminAdd} />
                <Route path="/admin/about" exact component={AdminAboutPages} />
                <Route
                  path="/admin/partners"
                  exact
                  component={AdminPartnersPages}
                />
                <Route
                  path="/admin/partners/add"
                  exact
                  component={AdminPartnersAddPages}
                />
                <Route path="/admin/reports" exact component={AdminReports} />
              </>
            )}
            <Route component={ErrorPages} />
          </Switch>
        </BrowserRouter>
      </EventsContext.Provider>
    </>
  );
}
