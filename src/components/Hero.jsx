import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image_1 from "../assets/Images/image-1.jpg";
import image_2 from "../assets/Images/image2.jpg";
import image_3 from "../assets/Images/image3.jpg";
import image_4 from "../assets/Images/image4.jpg";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slider-container">
        <Slider className="slider" {...settings}>
          <div className="image-div">
            <img src={image_1} />
          </div>
          <div className="image-div">
            <img src={image_2} />
          </div>
          <div className="image-div">
            <img src={image_3} />
          </div>
          <div className="image-div">
            <img src={image_4} />
          </div>
        </Slider>
        <marquee behavior="scroll" scrollamount="10" direction="left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          molestiae, ea quo dolore sequi animi totam aperiam enim sapiente
          accusamus?
        </marquee>
        {/* <h3 className="animated-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          expedita dignissimos ad?
        </h3> */}
      </div>
    </>
  );
}
