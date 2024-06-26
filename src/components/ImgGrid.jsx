import React from "react";
import { Container } from "react-bootstrap";
import img from "../assets/image/jpeg/red-img.jpg";
import img2 from "../assets/image/jpeg/close-up-squirrel-wooden-post_1048944-30370286.avif";
import img3 from "../assets/image/jpeg/full-shot-kid-father-living-countryside_23-2150642400.avif";
const ImgGrid = () => {
  return (
    <div className="my-20">
      <Container>
        <div class="grid-container">
          <div class="grid-item">
            <img className="w-full" src={img} alt="" />
          </div>
          <div class="grid-item">
            <img className="w-full" src={img2} alt="" />
          </div>
          <div class="grid-item">
            <img className="w-full" src={img} alt="" />
          </div>
          <div class="grid-item">
            <img className="w-full" src={img3} alt="" />
          </div>
          <div class="grid-item">
            <img className="w-full" src={img} alt="" />
          </div>
          <div class="grid-item">
            <img className="w-full" src={img} alt="" />
          </div>
          <div class="grid-item">
            <img className="w-full" src={img} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImgGrid;
