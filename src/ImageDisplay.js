import React from 'react';
import { useSpring, animated,config } from 'react-spring';
import "./ImageDisplay.css";
import logo29 from "./img/3.png";
import logo30 from "./img/4.png";
import logo31 from "./img/4.png";
import logo32 from "./img/5.png";
import logo33 from "./img/10.png";
import logo34 from "./img/11.png";
import logo35 from "./img/7.png";
import logo36 from "./img/8.png";
import logo37 from "./img/9.png";

const ImageDisplay = ({ selectedItem }) => {
  const topImageAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 1, transform: 'translateY(-20px)' },
  });

  const bottomImageAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 1, transform: 'translateY(20px)' },
  });

  return (
    
    <div className="section image-display">
      {selectedItem === 'A' && (
        <div style={{ position: 'relative' }}>
          <animated.img
            src={logo29} 
            alt="Image 1"
            className="w3-animate-top"
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-43%)', }}
          />
          <animated.img
            src={logo30} 
            alt="Image 2"
            className="w3-animate-top"
            style={{
             
              position: 'absolute',
              top: '100%', 
              left: '28%',
              transform: 'translateY(55%)',
            }}
          />
                </div>
      )}

{selectedItem === 'B' && (
        <div style={{ position: 'relative' }}>
          <animated.img
            src={logo31} // Adjust the path accordingly
            alt="Image 1"
            className="w3-animate-top"
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-43%)', }}
          />
          <animated.img
            src={logo32} // Adjust the path accordingly
            alt="Image 2"
            className="w3-animate-top"
            style={{
              
              position: 'absolute',
              top: '100%', // Set the top property to be below the first image
              left: '28%',
              transform: 'translateY(55%)',
            }}
          />


          
        </div>
      )}

{selectedItem === 'C' && (
        <div style={{ position: 'relative' }}>
          <animated.img
            src={logo33} // Adjust the path accordingly
            alt="Image 1"
            className="w3-animate-top"
            style={{ ...topImageAnimation, position: 'absolute', width:'300px',top: '-6px', left: '28%', transform: 'translateX(-43%)', }}
          />
          <animated.img
            src={logo34} // Adjust the path accordingly
            alt="Image 2"
            className="w3-animate-top"
            style={{
             ...bottomImageAnimation,
              position: 'absolute',
              top: '100%',
              width:'300px', // Set the top property to be below the first image
              left: '28%',
              transform: 'translateY(55%)',
            }}
          />


          
        </div>
      )}

{selectedItem === 'D' && (
        <div style={{ position: 'relative' }}>
          <animated.img
            src={logo35} // Adjust the path accordingly
            alt="Image 1"
            className="w3-animate-top"
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-43%)', }}
          />
          <animated.img
            src={logo36}// Adjust the path accordingly
            alt="Image 2"
            className="w3-animate-top"
            style={{
             
              position: 'absolute',
              top: '100%', // Set the top property to be below the first image
              left: '28%',
              transform: 'translateY(55%)',
            }}
          />
              </div>
      )}
      {selectedItem === 'E' && (
        <div style={{ position: 'relative' }}>
          <animated.img
            src={logo37} // Adjust the path accordingly
            alt="Image 1"
            className="w3-animate-top"
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-30%)', }}
          />
          


          
        </div>
      )}
      {/* Similar blocks for other items... */}
    </div>
  );
};

export default ImageDisplay;
