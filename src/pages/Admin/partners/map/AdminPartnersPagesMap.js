import React, { useState } from "react";
import axios from "axios";
import env from "../../../../application/environment/env.json";

export default function AdminPartnersPagesMap({
  image,
  route,
  title,
  host,
  type,
}) {
  const [edit, setEdit] = useState(false);
  const deleteCollection = () => {};
  return (
    <>
      <div className="flex__partner__container" style={{ marginLeft: "15px" }}>
        <div className="row no-gutters" style={{ alignItems: "center" }}>
          <div className="col-md-3 col-lg-3">
            <div className="partner__featured__thumbnail">
              <img
                src={type === "url" ? image : `${host}/public/${image}`}
                className="img-fluid partners__image__fluid"
                style={{ height: "100px" }}
                alt="qwe"
              />
            </div>
          </div>
          <div className="col-md-9 col-lg-9">
            <div className="partner__featured__content">
              <div>
                <span className="partner__featured__metaLine">
                  <a href={route} target="_blank" rel="noreferrer">
                    <img src="https://epsy.ge/images/icons/web.svg" alt="" />
                    <span>{route}</span>
                  </a>
                </span>
              </div>
              <div>
                <h5 className="partner__featured__title">{title}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginLeft: "15px",
          marginBottom: "30px",
          flexWrap: "wrap",
          gap: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          className="btn btn-danger"
          style={{
            fontFamily: "BPG Mrgvlovani Caps",
            fontSize: "12px",
          }}
          onClick={() => deleteCollection()}
        >
          წაშლა
        </button>
        <button
          className="btn btn-success"
          style={{
            fontFamily: "BPG Mrgvlovani Caps",
            fontSize: "12px",
          }}
        >
          რედაქტირება
        </button>
      </div>
    </>
  );
}
