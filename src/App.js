
import React from "react";
//hoc
import DefaultHoc from "./HOC/default.hoc";
//temp

//homepage
import HomePage from "./pages/Home.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App(){
return(

       <>
       
       < DefaultHoc  path="/" exact Component={HomePage} />
     
       </>
  );
};

export default App;

















