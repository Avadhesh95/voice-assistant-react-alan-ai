import React from 'react'
import Section1Image from "./Images/1.jpg";

const Home = () => (
    <div
        style={{  
            backgroundImage: `url(${Section1Image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100%',
        }}
    >
    </div>
);
export default Home
