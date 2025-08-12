import { Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <>
      <div className="mt-1 h-56 sm:h-80 xl:h-[28rem] 2xl:h-[32rem] rounded-xl overflow-hidden">
        <Carousel slide={false} className="rounded-xl">
          <img
            onClick={handleClick}
            className="w-full"
            src="https://source.unsplash.com/bRq7Cfn7zDs/1800x1600"
            alt=""
          />
          <img
            onClick={handleClick}
            className="w-full"
            src="https://source.unsplash.com/qDHwqQ05pVQ/1500x1000"
            alt=""
          />
          <img
            onClick={handleClick}
            className="w-full"
            src="https://source.unsplash.com/y0_vFxOHayg/1500x1000"
            alt=""
          />
          <img
            onClick={handleClick}
            className="w-full"
            src="https://source.unsplash.com/y1yQQmozTBw/1200x800"
            alt=""
          />
          <img
            onClick={handleClick}
            className="w-full"
            src="https://source.unsplash.com//nHsXs9FgIsk/1900x1200"
            alt=""
          />
        </Carousel>
      </div>
    </>
  );
};

export default HeroSection;
