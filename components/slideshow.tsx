import React from "react";

const Slideshow = () => {
  return (
    <>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img src="/" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Pizza"
          />
        </div>
      </div>
    </>
  );
};

export default Slideshow;
