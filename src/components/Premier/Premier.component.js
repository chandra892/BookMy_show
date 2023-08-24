import React from "react";

import Slider from "react-slick";
//componenet
import Poster from "../Poster/Poster.comoponent";
// config settings
import settings from "../../Config/PosterCorousal.config";
// TempPoster. Premier Images
import PremierImages from "../../Config/TempPoster.config";


  export const Premier=()=>{
    
   
    
   

  return(
  <>

  <div className="flex flex-col items-start py-3">
    <h3 className="text-white font-bold text-xl">Premier</h3>
    <p className="text-white text-sm ">Brand Releases Every Friday</p>
  </div>
  <Slider {...settings}>
    {PremierImages.map((image)=>(<Poster {...image}  isDark />))}

  </Slider>
  </>);

};

export default Premier;

