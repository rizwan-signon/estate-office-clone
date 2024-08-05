import logo from "../assets/Images/image5.jpg";
import logo1 from "../assets/Images/image3.jpg";
import logo2 from "../assets/Images/image4.jpg";
import { useInView } from "react-intersection-observer";
const MediaCenter = () => {
  const { ref: mediaRef, inView: mediavisible } = useInView({
    threshold: 1,
  });
  return (
    <>
      <h1
        ref={mediaRef}
        className={`${
          mediavisible ? "mediavisible" : ""
        } text-center my-12 font-bold text-3xl text-green-800`}
      >
        Media Center
      </h1>
      <h2 className=" my-6 font-semibold text-2xl text-green-800">GALLERY</h2>

      <div className="media-center">
        <div className="media-images">
          <div className=" image image1">
            <img src={logo} />
          </div>
          <div className=" image image2">
            <img src={logo} />
          </div>
          <div className=" image image3">
            <img src={logo2} />
          </div>
          <div className=" image image4">
            <img src={logo} />
          </div>
          <div className=" image image5">
            <img src={logo2} />
          </div>
          <div className=" image image6">
            <img src={logo1} />
          </div>
          <div className=" image image7">
            <img src={logo} />
          </div>
          <div className=" image image8">
            <img src={logo2} />
          </div>
        </div>
        <div className="right">
          <div className="position position1">
            <img src={logo} />
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et.
            </h3>
          </div>
          <div className="position position1">
            <img src={logo} />
            <h1>Launching Of Web Portal</h1>
            <h3>Launching of Web Portal on Dec 06 ,2018</h3>
          </div>
          <div className="position position1">
            <img src={logo} />
            <h1>Meeting With Secretery</h1>
            <h3>Briefing to Federal Secretery about Estate Office</h3>
          </div>
          <div className="position position1">
            <img src={logo} />
            <h1>Meeting With Federal Minister</h1>
            <h3>
              Briefing to Federal Minister for Ministry of Housing & Works about
              Estate Office
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaCenter;
