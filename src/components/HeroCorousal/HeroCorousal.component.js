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
        "https://images.unsplash.com/photo-1621305747788-815ac915a354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "https://plus.unsplash.com/premium_photo-1667771850963-82071c136728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1573995012741-eb49887f8732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80",
        "https://images.unsplash.com/photo-1579737834653-10a16d9be79e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
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