import React from "react";
import { BiAlignJustify } from "react-icons/bi";

export const NextArrow=(props)=>{
  // const {onClick,className,style} =props
  return(
    <>
    <div 
    className={props.className}
    style={{ ...props.style,backgroundColor:"lightGray", height:40, width:60, display:"flex",alignItems:"center"  ,justifyContent:"center" , borderRadius:4}}
    onClick={props.onClick}
    />
    </>
  );
};

 export const PrevArrow=(props)=>{
    return(
        <>
        <div 
    className={props.className}
    style={{ ...props.style,backgroundColor:"lightGray", height:40, width:60, display:"flex",alignItems:"center"  ,justifyContent:"center" , borderRadius:4}}
    onClick={props.onClick}
    />
        </>
    );
};