import pakMap from "../assets/Images/pakistan-map.jpg";
import { IoLocation } from "react-icons/io5";

const VisitUs = () => {
  return (
    <>
      <h1 className="text-center my-12 font-bold text-3xl text-green-800">
        Visit us
      </h1>
      <div className="visit">
        <div className="mapcontainer">
          <img src={pakMap} />
          <IoLocation
            className="icon1"
            onMouseEnter={() => <h1 className="islamabad">islamabad brnach</h1>}
          />
          <IoLocation className="icon2" />
          <IoLocation className="icon3" />
          <IoLocation className="icon4" />
        </div>
        <div className="frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.3561016230346!2d73.09782417554592!3d33.72560677328168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc0632572b191%3A0x8a5c79723f02234e!2sPrime%20Minister%E2%80%99s%20Office!5e0!3m2!1sen!2s!4v1719757410018!5m2!1sen!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VisitUs;
