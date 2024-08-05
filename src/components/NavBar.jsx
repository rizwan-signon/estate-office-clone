import React from "react";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  const [ListOpen, setListOpen] = useState(false);
  const toggleList = () => {
    setListOpen((ListOpen) => !ListOpen);
  };
  return (
    <>
      {" "}
      <div className="navbar">
        <div className="image-container">
          <img
            src="https://estate-office.gov.pk/static/media/logo.b75abeb3083f51286150e27254add8f9.svg"
            alt=""
          />
        </div>

        <ul className="list">
          <li onClick={toggleList} className="list-items">
            our offices
            {ListOpen && (
              <ul className="nested-list">
                <li className="nested--items">Estate office islamabad</li>
                <li className="nested--items">Estate office islamabad</li>
                <li className="nested--items">Estate office islamabad</li>
                <li className="nested--items">Estate office islamabad</li>
              </ul>
            )}
          </li>
          <li className="list-items">About us</li>
          <li className="list-items">contact us</li>
          <li className="list-items">Rules/policies</li>
        </ul>

        <div className="menu">
          <IoMdMenu />
          <h3>MENU</h3>
        </div>
        <div className="btns">
          <button className="btn register"> New User Registeration</button>
          <button className="btn login">Existing user Login</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default NavBar;
