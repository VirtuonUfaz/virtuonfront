import { useState, useEffect } from "react";
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo2 from "assets/images/sj2.png";


const BlogJournal = () => {
  return (
    <section id="journal">
        <div className="container">
            
            <div className="jtitle mt-5">
                <h3>Titration of hydrochloric acid solution by sodium hydroxide solution</h3>
            </div>
            <div className="sjimg">
                <img src={Photo2} style={{maxWidth: "100%", borderRadius: "10px"}} />
            </div>
            <div className="jauthors">
                <span className="info">Authors</span> <a href="blogProfile">Ibrahimkhanli Murad</a>
            </div>
            <div className="jdate">
                <span className="info">Publication date</span> Apr 21, 2017
            </div>
            <div className="jjournal">
                <span className="info">Journal</span> Chemistry-Titration
            </div>
            <div className="jissue">
                <span className="info">Issue</span> 2
            </div>
            <div className="jpages">
                <span className="info">Pages</span> 12
            </div>
            <div className="jpublisher">
                <span className="info">Publisher</span> Ufaz
            </div>
            <div className="jdescription">
                <span className="info">Description</span> 
                <p> 
                    The aim of the experiment is to find out the concentration of the given analyte by titrating it with an analyte which has a known concentration (in our case NaOH) and to detect the equivalence point with the help of the the pH-meter, at which the moles of base are equal to the moles of acid.
                </p>
            </div>
            <div className="jdownload">
                <span style={{color: "red"}} className="download">Download (only users): <a href="#">[PDF] from bookufaz.com</a></span>
            </div>
            <div className="jreferences mt-5">
                <span className="info">References</span><br />
                1. Safety:
                https://www.msdsonline.com/2014/09/10/hydrochloric-acid-hazards-safety-tips/<br />

                2. Procedure: 
                Austin Peay State University Department of Chemistry, Chem 1011<br />

                3. Khan Academy. Acid-Base titration curves. Available from: https://www.khanacademy.org/test-prep/mcat/chemical-processes/titrations-and-solubility-equilibria/a/acid-base-titration-curves<br />

                4.Titration:
                Acid-Base Crime Scene Titration, Angelica Rodriguez, Period 4, 05/14/13<br />

                5. Instrumental Methods of chemical Analysis B.K Sharma.<br />

            </div>

        </div>
    </section>
  );
};

export default BlogJournal;
