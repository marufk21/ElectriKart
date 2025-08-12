import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  // Primary (requested) image + robust fallbacks
  // Electronics gadgets themed images
  const primaryUrl = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=2000&q=80"; // Assorted electronics gadgets
  const fallbackUrl1 =
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"; // Closeup of gadgets
  const fallbackUrl2 = "https://placehold.co/2000x800?text=ElectriKart+Gadgets";

  const [imgSrc, setImgSrc] = useState(primaryUrl);

  const handleImgError = useCallback(() => {
    setImgSrc((prev) => (prev === primaryUrl ? fallbackUrl1 : fallbackUrl2));
  }, []);

  return (
    <>
      <div
        className="mt-1 h-56 sm:h-80 xl:h-[28rem] 2xl:h-[32rem] rounded-xl overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        <img
          className="w-full h-full object-cover"
          src={imgSrc}
          alt="A MacBook with code on screen on a busy desk"
        />
      </div>
    </>
  );
};

export default HeroSection;
