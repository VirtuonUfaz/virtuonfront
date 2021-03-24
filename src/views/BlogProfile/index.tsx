import { useState, useEffect } from "react";
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoMe from "assets/images/resume.jpg";


const BlogProfile = () => {
  return (
    <section id="sprofile">
        <div className="container">
            
            <div className="row mt-5">

                <div className="col-12 col-md-9">
                    <div className="row">
                        <div className="col-12 col-md-3" style={{padding: "0 30px"}}>
                            <div className="sjimg">
                                 <img src={PhotoMe} style={{maxWidth: "100%", borderRadius: "10px"}} />
                            </div>
                        </div>
                        <div className="col-12 col-md-9">
                            <h4>Murad Ibrahimkhanli</h4>
                            <h6 style={{color: "#898A8E"}}>Ufaz Computer Science Student</h6>
                            <button className="btn btn-primary mt-3">FOLLOW</button>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <div style={{backgroundColor: "#EDEDED", padding: "2px", position: "relative"}}>
                                <h5 className="ml-3" style={{color: "#898A8E"}}>Title</h5>
                                <h5 style={{color: "#898A8E", position: "absolute", right: "50px", top: "2px"}}>Year</h5>
                            </div>

                            <div className="row mt-3">
                                <div className="col-10">
                                    <a style={{fontSize: "18px"}} href="blogJournal">Titration of hydrochloric acid solution by sodium hydroxide solution</a>
                                    <p style={{fontSize: "14px", color: "#898A8E"}}>Murad Ibrahimkhanli<br />Ufaz Chemistry</p>
                                </div>
                                <div className="col-2">
                                    <span style={{marginLeft: "27px"}}>2018</span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-10">
                                    <a style={{fontSize: "18px"}} href="blogJournal">Titration of hydrochloric acid solution by sodium hydroxide solution</a>
                                    <p style={{fontSize: "14px", color: "#898A8E"}}>Murad Ibrahimkhanli<br />Ufaz Chemistry</p>
                                </div>
                                <div className="col-2">
                                    <span style={{marginLeft: "27px"}}>2018</span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-10">
                                    <a style={{fontSize: "18px"}} href="blogJournal">Titration of hydrochloric acid solution by sodium hydroxide solution</a>
                                    <p style={{fontSize: "14px", color: "#898A8E"}}>Murad Ibrahimkhanli<br />Ufaz Chemistry</p>
                                </div>
                                <div className="col-2">
                                    <span style={{marginLeft: "27px"}}>2018</span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-10">
                                    <a style={{fontSize: "18px"}} href="blogJournal">Titration of hydrochloric acid solution by sodium hydroxide solution</a>
                                    <p style={{fontSize: "14px", color: "#898A8E"}}>Murad Ibrahimkhanli<br />Ufaz Chemistry</p>
                                </div>
                                <div className="col-2">
                                    <span style={{marginLeft: "27px"}}>2018</span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-10">
                                    <a style={{fontSize: "18px"}} href="blogJournal">Titration of hydrochloric acid solution by sodium hydroxide solution</a>
                                    <p style={{fontSize: "14px", color: "#898A8E"}}>Murad Ibrahimkhanli<br />Ufaz Chemistry</p>
                                </div>
                                <div className="col-2">
                                    <span style={{marginLeft: "27px"}}>2018</span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-10">
                                    <a style={{fontSize: "18px"}} href="blogJournal">Titration of hydrochloric acid solution by sodium hydroxide solution</a>
                                    <p style={{fontSize: "14px", color: "#898A8E"}}>Murad Ibrahimkhanli<br />Ufaz Chemistry</p>
                                </div>
                                <div className="col-2">
                                    <span style={{marginLeft: "27px"}}>2018</span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-10">
                                    <a style={{fontSize: "18px"}} href="blogJournal">Titration of hydrochloric acid solution by sodium hydroxide solution</a>
                                    <p style={{fontSize: "14px", color: "#898A8E"}}>Murad Ibrahimkhanli<br />Ufaz Chemistry</p>
                                </div>
                                <div className="col-2">
                                    <span style={{marginLeft: "27px"}}>2018</span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-10">
                                    <a style={{fontSize: "18px"}} href="blogJournal">Titration of hydrochloric acid solution by sodium hydroxide solution</a>
                                    <p style={{fontSize: "14px", color: "#898A8E"}}>Murad Ibrahimkhanli<br />Ufaz Chemistry</p>
                                </div>
                                <div className="col-2">
                                    <span style={{marginLeft: "27px"}}>2018</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3">
                    <h4>My Profile:</h4>
                    <h4 style={{marginTop: "100px"}}>My Followers:</h4>
                    <h4 style={{marginTop: "100px"}}>Co-Authors:</h4>
                </div>

            </div>

        </div>
    </section>
  );
};

export default BlogProfile;
