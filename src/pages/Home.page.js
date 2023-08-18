import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
//import Premier from "../components/Premier/Premier.component";
  import Premier from "../components/Premier/Premier.component";

const HomePage =()=>{
    return(
      <>
<div className="flex flex-col gap-10">

     <div className=" mx-auto px-0 py-3 w-full">
        <h1 className="text-rgb(51, 51, 51) ml-8 text-2xl font-semibold  py-2">
        The Best Of Live Events  </h1>
     <EntertainmentCardSlider />


<div className="bg-NavCol-200 py-16">
  <div className="container mx-auto px-4 "> 
    <div className="flex ">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
        alt="rupay" className="w-full h-full" />
        </div>
       <Premier /> 
    </div>
  </div>
</div>
</div>
      </>
    );
};
export default HomePage;