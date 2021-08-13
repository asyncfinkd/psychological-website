import React, { useContext } from "react";
import { EventsContext } from "../../context/events/EventsContext";

export default function Events() {
  const { events, setEvents } = useContext(EventsContext);
  return (
    <>
      {events.map((item) => {
        return <p>{item.title}</p>;
      })}
      {/* <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="blog-post-thumb">
            <div class="img">
              <img src="assets/images/blog-item-01.png" alt="" />
            </div>
            <div class="blog-content">
              <h3>
                <a href="#test">Vivamus ac vehicula dui</a>
              </h3>
              <div class="text">
                Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
                Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam
                egestas augue.
              </div>
              <a href="#test" class="main-button">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="blog-post-thumb">
            <div class="img">
              <img src="assets/images/blog-item-02.png" alt="" />
            </div>
            <div class="blog-content">
              <h3>
                <a href="#test">Phasellus convallis augue</a>
              </h3>
              <div class="text">
                Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac.
                Vestibulum finibus urna ut velit venenatis, vel ultrices sapien
                mattis.
              </div>
              <a href="#test" class="main-button">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="blog-post-thumb">
            <div class="img">
              <img src="assets/images/blog-item-03.png" alt="" />
            </div>
            <div class="blog-content">
              <h3>
                <a href="#test">Nam gravida purus non</a>
              </h3>
              <div class="text">
                Maecenas eu erat vitae dui convallis consequat vel gravida
                nulla. Vestibulum finibus euismod odio, ut tempus enim varius
                eu.
              </div>
              <a href="#test" class="main-button">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
