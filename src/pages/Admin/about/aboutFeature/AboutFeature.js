import React, { useState } from "react";
import axios from "axios";
import env from "../../../../application/environment/env.json";
import Swal from "sweetalert2";

export default function AboutFeature({ title, description, i }) {
  const [editStatus, setEditStatus] = useState(false);
  const [changed, setChanged] = useState(false);
  const [changedTitle, setChangedTitle] = useState(title);
  const [changedDescription, setChangedDescription] = useState(description);

  const request = (title, description) => {
    window.scrollTo(0, 0);
    document.body.classList.add("append__body");
    axios
      .post(`${env.host}/api/about/change`, {
        title: title,
        changedDescription: changedDescription,
        changedTitle: changedTitle,
      })
      .then((res) => {
        if (res.data.success) {
          Swal.fire("გილოცავთ!", "წარმატებით შეიცვალა აღწერა!", "success").then(
            () => {
              window.location.reload();
            }
          );
          document.body.classList.remove("append__body");
        } else {
          Swal.fire({
            icon: "error",
            title: "უფს...",
            text: "დაფიქსირდა შეცდომა!",
          }).then(() => {
            window.location.reload();
          });
          document.body.classList.remove("append__body");
        }
        setEditStatus(false);
        setChanged(true);
      });
  };
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
        <div className="features-small-item">
          <div className="icon">
            <i>
              <img src="../assets/images/featured-item-01.png" alt="" />
            </i>
          </div>
          {editStatus ? (
            <>
              <div class="form-group">
                <textarea
                  class="form-control"
                  value={changedTitle}
                  onChange={(e) => setChangedTitle(e.target.value)}
                  id="exampleFormControlTextarea1"
                  rows="2"
                  style={{
                    fontFamily: "BPG Mrgvlovani Caps",
                    fontSize: "13px",
                  }}
                ></textarea>
              </div>
            </>
          ) : (
            <h5 className="features-title helvetica:medium">
              {changed ? changedTitle : title}
            </h5>
          )}
          {editStatus ? (
            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                value={changedDescription}
                onChange={(e) => setChangedDescription(e.target.value)}
                rows="3"
                style={{ fontFamily: "BPG Mrgvlovani Caps", fontSize: "13px" }}
              ></textarea>
            </div>
          ) : (
            <p className="helvetica:regular">
              {changed ? changedDescription : description}
            </p>
          )}
        </div>
        <div className="d-flex m-auto text-center justify-content-center align-items-center">
          <button
            className="btn btn-success"
            onClick={
              editStatus
                ? () => request(title, description)
                : () => setEditStatus(!editStatus)
            }
            style={{
              fontFamily: "BPG Mrgvlovani Caps",
              fontSize: "13px",
              marginBottom: "2rem",
            }}
          >
            {editStatus ? "შენახვა" : "რედაქტირება"}
          </button>
        </div>
      </div>
    </>
  );
}
