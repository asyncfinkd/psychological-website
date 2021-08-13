import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import { EventsContext } from "../../../context/events/EventsContext";

export default function EventsDetailPages({ match }) {
  const { events, setEvents } = useContext(EventsContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    events.map((item) => {
      if (item.route === match.params.id) {
        setData(item);
      }
    });
  });
  return (
    <>
      <p>{data.title}</p>
      <p>{data.description}</p>
    </>
  );
}
