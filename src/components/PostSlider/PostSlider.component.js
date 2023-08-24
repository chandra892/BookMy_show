import React from "react";
import Poster from "../Poster/Poster.comoponent";
import Slider from "react-slick";
import settings from "../../Config/PosterCorousal.config";


const PostSlider=(props)=>{
return(
    <>
    <div className="flex flex-col items-start py-3">
    <h3 className={`font-bold text-2xl ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
    <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
  </div>
  <Slider {...settings}>
    {props.images.map((image)=>(<Poster {...image}  isDark={props.isDark} />))}

  </Slider>
    </>
);

};

export default PostSlider;
