import React from "react";
import Section2Image from "./Images/2.jpg";

const ShowPage = () => (
  <div
    style={{  
      backgroundImage: `url(${Section2Image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '130%',
    }}
  >
  </div>
);

export default ShowPage;
