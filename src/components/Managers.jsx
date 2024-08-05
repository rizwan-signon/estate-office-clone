import React from "react";
import logo from "../assets/Images/image5.jpg";
import logo1 from "../assets/Images/image3.jpg";
import logo2 from "../assets/Images/image4.jpg";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
const Managers = () => {
  return (
    <>
      <div className="managers">
        <div className="managers-details">
          <h2>ORGANIZATIONAL SETUP</h2>
          <h2>MANAGERIAL HAIRARCHEY</h2>
          <div className="content">
            <div className="manager managerdetails ">
              <div className="images">
                <img src={logo} alt="" />
              </div>
              <div className="details">
                <h3>Rizwan Hameed</h3>
                <h3>prime miniter of pakistan</h3>
              </div>
            </div>
            <div className="manager managerdetails ">
              <div className="images">
                <img src={logo1} alt="" />
              </div>
              <div className="details">
                <h3>Rizwan Hameed</h3>
                <h3>prime miniter of pakistan</h3>
              </div>
            </div>
            <div className="manager managerdetails ">
              <div className="images">
                <img src={logo2} alt="" />
              </div>
              <div className="details">
                <h3>Rizwan Hameed</h3>
                <h3>prime miniter of pakistan</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pdfs">
        <div>
          <div className="pdf1">
            <h2>ORGANOGRAM</h2>
            <div className="card card1 hover:bg-green-700 transition-all ">
              <BsFillFileEarmarkPdfFill />
              <h2>organogram</h2>
            </div>
          </div>
          <div className="pdf1">
            <h2>REGULATORY FRAMEWORK</h2>
            <div className=" card card2">
              <BsFillFileEarmarkPdfFill />
              <h2>function</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Managers;
