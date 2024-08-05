import React from "react";
import logo from "../assets/Images/image5.jpg";
import logo1 from "../assets/Images/image3.jpg";
import logo2 from "../assets/Images/image4.jpg";
const OurOffices = () => {
  return (
    <>
      <h1 className="text-center text-2xl text-green-700 font-bold my-9">
        OUR OFFICES
      </h1>
      <div className="offices">
        <div className="officepictures">
          <div className=" office-pic office-pic1">
            <img src={logo} />
            <h5 className=" bg-gray-600">peshawar</h5>
          </div>
          <div className=" office-pic office-pic2">
            <img src={logo1} />
            <h5 className=" bg-yellow-500">hello</h5>
          </div>
          <div className=" office-pic office-pic3">
            <img src={logo2} />
            <h5 className=" bg-green-700">karachi</h5>
          </div>
          <div className=" office-pic office-pic4">
            <img src={logo} />
            <h5 className=" bg-amber-900">islamabad</h5>
          </div>
          <div className=" office-pic office-pic5">
            <img src={logo2} />
            <h5 className="bg-red-700">Quetta</h5>
          </div>
        </div>

        <div className="Quick-links">
          <h1 className="text-green-600 text-2xl font-bold">QuickLinks</h1>
          <ul>
            <li className="QuickLink-items ">Ministry of housing and works</li>
            <li className="QuickLink-items">kohat university </li>
            <li className="QuickLink-items">islamabad the capital city</li>
            <li className="QuickLink-items">peshawar the city of flowers</li>
            <li className="QuickLink-items">visit pakistan if you are happy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurOffices;
