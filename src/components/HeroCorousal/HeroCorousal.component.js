import React from "react";
import HeroSlider from "react-slick";
//component
import { NextArrow,PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCorousal=()=>{

    const settingsLg={
       
       arrows:true,
       autoplay:true,
       centerMode:true,
       slidesToShow:1,
       slidesToScroll:1,
       centerPadding:"100px",
       infinite:true ,
       nextArrow:<NextArrow />,
       prevArrow:<PrevArrow/>
    }

    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow/>
      };
    const images=[
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1690793879048_motogpbharat2023desktop.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1692348338226_lollapaloozadesktop.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1690965948939_virdasreviseddesktop.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1692178676624_sunburndesktop.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1692261768446_smdesktop.jpg"
    ]


    return(
     <>
    <div className="lg:hidden">
    <HeroSlider {...settings}>
    {
     images.map((images)=>(
        <div className="w-full h-44 md:h-80 py-3">
        <img src={images} alt="tesing" className="w-full h-full rounded-md" />
        </div>
     ))
    }
        
    </HeroSlider>
    </div>

    <div className="hidden lg:block">
    <HeroSlider {...settingsLg}>
    {
     images.map((images)=>(
        <div className="w-full h-96 px-2 py-3 ">
        <img src={images} 
        alt="tesing"
        className="w-full h-full rounded-md  " />
        </div>
     ))
    }
        
    </HeroSlider>
    </div>
 </>
    );
};

export default HeroCorousal;