
import React from "react";
//hoc's
import DefaultHoc from "./HOC/default.hoc";
import MovieHoc from "./HOC/Movie.HOC";
//component


//pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App(){
return(

       <>
       
       < DefaultHoc  path="/" exact Component={HomePage} />
       < MovieHoc path="/movie/:id" exact Component={Movie}/>
       </>
  );
};

export default App;

















