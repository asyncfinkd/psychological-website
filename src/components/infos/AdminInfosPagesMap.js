import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import env from "../../application/environment/env.json";

export default function AdminInfoPagesMap({ item }) {
  const [change, setChange] = useState(false);
  const [title, setTitle] = useState(item?.title);
  const [subTitle, setSubTitle] = useState(item?.subTitle);
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div
          className="features-small-item"
          style={{
            height: "200px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h5 className="features-title helvetica:medium">{title}</h5>
          {change ? (
            <>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  style={{
                    fontFamily: "BPG Mrgvlovani Caps",
                    fontSize: "13px",
                  }}
                  value={subTitle}
                  onChange={(e) => setSubTitle(e.target.value)}
                >
                  {subTitle}
                </textarea>
              </div>
            </>
          ) : (
            <>
              <p className="helvetica:regular">{subTitle}</p>
            </>
          )}
        </div>
        <div className="d-flex m-auto text-center justify-content-center align-items-center">
          <button
            className="btn btn-success"
            style={{
              fontFamily: "BPG Mrgvlovani Caps",
              fontSize: "13px",
              marginBottom: "2rem",
            }}
            onClick={() => {
              if (change) {
                axios
                  .post(`${env.host}/api/change/info`, {
                    title: title,
                    subTitle: subTitle,
                  })
                  .then((result) => {
                    if (result.data.success) {
                      setChange(!change);
                      Swal.fire("გილოცავთ!", "წარმატებით შეიცვალა!", "success");
                    }
                  });
              } else {
                setChange(!change);
              }
            }}
          >
            {change ? "შენახვა" : "რედაქტირება"}
          </button>
        </div>
      </div>
    </>
  );
}
