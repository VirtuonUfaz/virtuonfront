import { useState, useEffect } from "react";
import "./style.scss";
import Photo1 from "assets/images/sj1.png";
import Photo2 from "assets/images/sj2.png";
import Photo3 from "assets/images/sj3.png";
import Photo4 from "assets/images/sj4.png";
import Photo5 from "assets/images/sj5.png";
import Photo6 from "assets/images/sj6.png";
import Photo7 from "assets/images/sj7.png";
import Photo8 from "assets/images/sj8.png";
import PhotoUfaz from "assets/images/ufaz.png";

const Blog = () => {
  return (
    <section id="sj">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div
                      className="input-group-text"
                      style={{ backgroundColor: "#5D9CEB" }}
                    >
                      <i className="fas fa-search"></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with checkbox"
                    placeholder="Search Here"
                  />
                </div>
              </div>
              <div className="col-sm-9">
                <div className="row mt-2">
                  <div className="col-12 col-sm-2"></div>
                  <div
                    className="col-12 col-sm-3"
                    style={{ paddingRight: "0 !important" }}
                  >
                    <select
                      id="inputState"
                      className="form-control"
                      style={{
                        fontSize: "14px !important",
                        padding: "0 .75rem !important",
                        height: "30px! important",
                      }}
                    >
                      <option selected>Sort by: Name</option>
                      <option>Sort by: Size</option>
                      <option>Sort by: Type</option>
                      <option>Sort by: Date</option>
                    </select>
                  </div>
                  <div
                    className="col-12 col-sm-2"
                    style={{ padding: "0 !important" }}
                  >
                    <select
                      id="inputState"
                      className="form-control"
                      style={{
                        fontSize: "14px !important",
                        padding: "0 .75rem !important",
                        height: "30px !important",
                      }}
                    >
                      <option selected>Arrange: Des</option>
                      <option>Arrange: Asc</option>
                    </select>
                  </div>
                  <div
                    className="col-12 col-sm-2"
                    style={{ padding: "0 !important" }}
                  >
                    <select
                      id="inputState"
                      className="form-control"
                      style={{
                        fontSize: "14px !important",
                        padding: "0 .75rem !important",
                        height: "30px !important",
                      }}
                    >
                      <option selected>Show: 6 </option>
                      <option>Show: 5 </option>
                      <option>Show: 4 </option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-sm-3">
            <div className="bycategory">
              <div
                className="mb-3"
                style={{ backgroundColor: "#EDEDED", padding: "2px" }}
              >
                <h5 className="ml-3" style={{ color: "#898A8E" }}>
                  By Category
                </h5>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  View all
                </label>
                <label style={{ position: "absolute", right: 0 }}>(230)</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck2"
                />
                <label className="custom-control-label" htmlFor="customCheck2">
                  Chemistry
                </label>
                <label style={{ position: "absolute", right: 0 }}>(37)</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck3"
                />
                <label className="custom-control-label" htmlFor="customCheck3">
                  Algebra
                </label>
                <label style={{ position: "absolute", right: 0 }}>(29)</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck4"
                />
                <label className="custom-control-label" htmlFor="customCheck4">
                  Computer Science
                </label>
                <label style={{ position: "absolute", right: 0 }}>(27)</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck5"
                />
                <label className="custom-control-label" htmlFor="customCheck5">
                  Physics
                </label>
                <label style={{ position: "absolute", right: 0 }}>(23)</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customChecky"
                />
                <label className="custom-control-label" htmlFor="customChecky">
                  Analysis
                </label>
                <label style={{ position: "absolute", right: 0 }}>(22)</label>
              </div>
            </div>
            <div className="bydate mt-5">
              <div
                className="mb-3"
                style={{ backgroundColor: "#EDEDED", padding: "2px" }}
              >
                <h5 className="ml-3" style={{ color: "#898A8E" }}>
                  By Date
                </h5>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  View all
                </label>
                <label style={{ position: "absolute", right: 0 }}>(216)</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck2"
                />
                <label className="custom-control-label" htmlFor="customCheck2">
                  Past 10 years
                </label>
                <label style={{ position: "absolute", right: 0 }}>(37)</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck4"
                />
                <label className="custom-control-label" htmlFor="customCheck4">
                  Past 15 years
                </label>
                <label style={{ position: "absolute", right: 0 }}>(27)</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck5"
                />
                <label className="custom-control-label" htmlFor="customCheck5">
                  Past 20 years
                </label>
                <label style={{ position: "absolute", right: 0 }}>(23)</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customChecky"
                />
                <label className="custom-control-label" htmlFor="customChecky">
                  Past 25 years
                </label>
                <label style={{ position: "absolute", right: 0 }}>(22)</label>
              </div>
            </div>
            <div className="buttons mt-3">
              <button
                type="button"
                className="btn btn-secondary"
                style={{
                  padding: "0.075rem 1.5rem !important",
                  fontSize: "14px !important",
                }}
              >
                Apply Filter
              </button>
              <button
                type="button"
                className="btn btn-danger"
                style={{
                  padding: "0.075rem 2.2rem !important",
                  fontSize: "14px !important",
                }}
              >
                Reset All
              </button>
            </div>
            <div className="img mt-5">
              <img src={PhotoUfaz} style={{ maxWidth: "100%" }} />
            </div>
          </div>

          <div className="col-12 col-sm-9">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <div className="sjpost">
                  <div className="sjimg">
                    <img
                      src={Photo1}
                      style={{ maxWidth: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="sjdate mt-2" style={{ fontSize: "12px" }}>
                    <i className="far fa-calendar-alt"></i> Tuesday, Apr 21,
                    2017
                  </div>
                  <div
                    className="sjname mt-1"
                    style={{ color: "#58A3DA", fontSize: "15px" }}
                  >
                    <a href="blogJournal">
                      Titration of hydrochloric acid solution by sodium
                      hydroxide solution
                    </a>
                  </div>
                  <div className="sjmore mt-2">
                    Titration is a common laboratory method of quantitative
                    chemical... <a href="blogJournal">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="sjpost">
                  <div className="sjimg">
                    <img
                      src={Photo2}
                      style={{ maxWidth: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="sjdate mt-2" style={{ fontSize: "12px" }}>
                    <i className="far fa-calendar-alt"></i> Tuesday, Apr 21,
                    2017
                  </div>
                  <div
                    className="sjname mt-1"
                    style={{ color: "#58A3DA", fontSize: "15px" }}
                  >
                    <a href="blogJournal">
                      Titration of hydrochloric acid solution by sodium
                      hydroxide solution
                    </a>
                  </div>
                  <div className="sjmore mt-2">
                    Titration is a common laboratory method of quantitative
                    chemical... <a href="blogJournal">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="sjpost">
                  <div className="sjimg">
                    <img
                      src={Photo3}
                      style={{ maxWidth: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="sjdate mt-2" style={{ fontSize: "12px" }}>
                    <i className="far fa-calendar-alt"></i> Tuesday, Apr 21,
                    2017
                  </div>
                  <div
                    className="sjname mt-1"
                    style={{ color: "#58A3DA", fontSize: "15px" }}
                  >
                    <a href="blogJournal">
                      Titration of hydrochloric acid solution by sodium
                      hydroxide solution
                    </a>
                  </div>
                  <div className="sjmore mt-2">
                    Titration is a common laboratory method of quantitative
                    chemical... <a href="blogJournal">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="sjpost">
                  <div className="sjimg">
                    <img
                      src={Photo4}
                      style={{ maxWidth: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="sjdate mt-2" style={{ fontSize: "12px" }}>
                    <i className="far fa-calendar-alt"></i> Tuesday, Apr 21,
                    2017
                  </div>
                  <div
                    className="sjname mt-1"
                    style={{ color: "#58A3DA", fontSize: "15px" }}
                  >
                    <a href="blogJournal">
                      Titration of hydrochloric acid solution by sodium
                      hydroxide solution
                    </a>
                  </div>
                  <div className="sjmore mt-2">
                    Titration is a common laboratory method of quantitative
                    chemical... <a href="blogJournal">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="sjpost">
                  <div className="sjimg">
                    <img
                      src={Photo5}
                      style={{ maxWidth: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="sjdate mt-2" style={{ fontSize: "12px" }}>
                    <i className="far fa-calendar-alt"></i> Tuesday, Apr 21,
                    2017
                  </div>
                  <div
                    className="sjname mt-1"
                    style={{ color: "#58A3DA", fontSize: "15px" }}
                  >
                    <a href="blogJournal">
                      Titration of hydrochloric acid solution by sodium
                      hydroxide solution
                    </a>
                  </div>
                  <div className="sjmore mt-2">
                    Titration is a common laboratory method of quantitative
                    chemical... <a href="blogJournal">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="sjpost">
                  <div className="sjimg">
                    <img
                      src={Photo6}
                      style={{ maxWidth: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="sjdate mt-2" style={{ fontSize: "12px" }}>
                    <i className="far fa-calendar-alt"></i> Tuesday, Apr 21,
                    2017
                  </div>
                  <div
                    className="sjname mt-1"
                    style={{ color: "#58A3DA", fontSize: "15px" }}
                  >
                    <a href="blogJournal">
                      Titration of hydrochloric acid solution by sodium
                      hydroxide solution
                    </a>
                  </div>
                  <div className="sjmore mt-2">
                    Titration is a common laboratory method of quantitative
                    chemical... <a href="blogJournal">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="sjpost">
                  <div className="sjimg">
                    <img
                      src={Photo7}
                      style={{ maxWidth: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="sjdate mt-2" style={{ fontSize: "12px" }}>
                    <i className="far fa-calendar-alt"></i> Tuesday, Apr 21,
                    2017
                  </div>
                  <div
                    className="sjname mt-1"
                    style={{ color: "#58A3DA", fontSize: "15px" }}
                  >
                    <a href="blogJournal">
                      Titration of hydrochloric acid solution by sodium
                      hydroxide solution
                    </a>
                  </div>
                  <div className="sjmore mt-2">
                    Titration is a common laboratory method of quantitative
                    chemical... <a href="blogJournal">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
