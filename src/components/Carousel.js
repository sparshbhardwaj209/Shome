import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        className="relative"
        style={{
          backgroundImage: "url(../Images/carouserImg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          width: "100%",
        }}
      >
        <div className="absolute text-white my-40 mx-36">
          <h2 className="text-lg pb-4">UP TO 30% OFF</h2>
            <h1 className="text-4xl pb-2">EXCLUSISVE</h1>
            <h1 className="text-5xl pb-10 font-bold">NEW SHOES</h1>
            <button className="text-xl font-semibold border-2 px-4 py-2"
            >Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
