import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Color() {
  const { colour } = useParams();
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    setBgColor(colour);
  }, [colour]);

  return (
    <div className='setBG' style={{ backgroundColor: bgColor, fontSize: "50px", width : "100vw", height : "100vh", display : "grid", justifyContent : "center", alignItems : "center", color : (bgColor === "white"? "black" : "white")}}>
      {bgColor}
    </div>
  );
}

export default Color;
