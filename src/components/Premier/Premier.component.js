import React from "react";

import Slider from "react-slick";
//componenet
import Poster from "../Poster/Poster.comoponent";


  export const Premier=()=>{
    const settings={
        Infinity:true,
        autoplay:true,
        slidesToShow:5,
        slidesToScroll:2,
        initialSlide:0
    };
    const PremierImages=[
        {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAyMzkuN0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-hetavytkex-portrait.jpg",
            alt:"Goomer" ,
            title:"Goomer" ,
            subtitle:" Drama/Sports",
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC42LzEwICAxNDIuMUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg" ,
            alt: "jailer",
            title:"Jailer" ,
            subtitle:"Action/Drama/Thrillee",
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NS42LzEwICA0MS4ySyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00354849-twjhuhesqf-portrait.jpg",
            alt:"bola",
            title:"Bhola Shankar",
            subtitle:"Action, drama"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICA3Mi4xSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361712-npjeqfmyrt-portrait.jpg",
            alt:"logo",
            title:"OMG 2",
            subtitle:" Action, drama"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NjAuNUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331565-jhkevnbnfj-portrait.jpg",
            alt:"logo",
            title:"Blue Beetle",
            subtitle:"Action, drama"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OTAyIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367113-bpbnekdgvc-portrait.jpg",
            alt:"logo",
            title:"DD returns",
            subtitle:"Action, drama"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjAuN0sgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365396-jncefytjbm-portrait.jpg",
            alt:"logo",
            title:"Mr Pregnent",
            subtitle:"Action, drama"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-My4ySyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367107-yrtdlvmmeh-portrait.jpg",
            alt:"logo",
            title:"Jilebi",
            subtitle:"Action, drama"
         },
         {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-My44SyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00366421-rkdefeaejm-portrait.jpg",
            alt:"logo",
            title:"Prem Kumar",
            subtitle:"Action, drama"
         },
    ]


  return(
  <>
  <Slider {...settings}>
    {PremierImages.map((image)=>(<Poster {...image}/>))}

  </Slider>
  </>);

};

export default Premier;

