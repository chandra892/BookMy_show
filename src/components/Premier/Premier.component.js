import React from "react";

import Slider from "react-slick";
//componenet
import Poster from "../Poster/Poster.comoponent";


  export const Premier=()=>{
    const settings={
        Infinity:true,
        autoplay:false,

        slidesToShow:5,
        slidesToScroll:2,
        initialSlide:0
    };
    const PremierImages=[
        {
           src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00366613-gsxsbpsrzd-portrait.jpg",
           alt:"logo",
           title:"It Aints Over ",
           subtitle:"English"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00365790-qvnakqfjvq-portrait.jpg",
            alt: "jailer",
            title:"Stories Not to Be Told" ,
            subtitle:"English"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00366377-dcnrvavckc-portrait.jpg",
            alt:"bola",
            title:"Welcome To Demon School Iruma Kun Season 1",
            subtitle:"Japanees"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00366724-qalsluzdal-portrait.jpg",
            alt:"logo 4",
            title:"Control",
            subtitle:"English"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00357727-xvfwuvjlyk-portrait.jpg",
            alt:"logo 5",
            title:"Insidious: The Red Door",
            subtitle:"English"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00365921-qzzpdqegwp-portrait.jpg",
            alt:"logo 6",
            title:"Return To Soul",
            subtitle:"English"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00366939-tbrjhyfjuv-portrait.jpg",
            alt:"logo 7",
            title:"Dampyre",
            subtitle:"English"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00365828-pthvdgzjgl-portrait.jpg",
            alt:"logo 8",
            title:"Follow Me",
            subtitle:"English"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00365763-bjwheakkud-portrait.jpg",
            alt:"logo 9",
            title:"Babylon 5: The Road Home",
            subtitle:"English"
         },
    ]


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

