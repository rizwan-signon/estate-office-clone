import React from "react";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import {
  BsSearch,
  BsSegmentedNav,
  BsKeyFill,
  BsProjector,
  BsKey,
} from "react-icons/bs";
const Services = () => {
  return (
    <section className="services">
      <div>
        <h1 className="service-title">SERVICES</h1>
        <div className="service">
          <div className="container green">
            <BsFillFileEarmarkPdfFill className="icons" />
            <h2>Kohat</h2>
          </div>
          <div className="container yellow">
            <BsSearch className="icons" />
            <h2>Peshawar</h2>
          </div>
          <div className="container red">
            <BsSegmentedNav className="icons" />
            <h2>Islamabad</h2>
          </div>
          <div className="container blue">
            <BsFillFileEarmarkPdfFill className="icons" />
            <h2>Dera Ismaeel khan</h2>
          </div>
          <div className="container aqua">
            <BsKeyFill className="icons" />
            <h2>karak</h2>
          </div>
          <div className="container maroon">
            <BsProjector className="icons" />
            <h2>swat</h2>
          </div>
          <div className="container grey">
            <BsFillFileEarmarkPdfFill className="icons" />
            <h2>Karachi</h2>
          </div>
          <div className="container black">
            <BsKey className="icons" />
            <h2>Services</h2>
          </div>
          <div className="container white">
            <BsProjector className="icons" />
            <h2>organogram</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
