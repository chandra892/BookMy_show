import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component";


const HomePage =()=>{
    return(
      <>
     <div className="container mx-auto px-4 py-3">
        <h1 className="text-rgb(51, 51, 51)  text-2xl font-semibold  py-2">
        The Best Of Live Events  </h1>
     <EntertainmentCardSlider />
     <Premier />
     </div>
      </>
    );
};
export default HomePage;