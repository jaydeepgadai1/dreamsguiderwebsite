import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import './DesktopApp.css';
import './ContentDisplay.css';
import ImageDisplay from './ImageDisplay.js';
import ContentDisplay from './ContentDisplay.js';

const App = () => {

  const [selectedItem, setSelectedItem] = useState('A');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#3e7ddb'); // Set initial background color

  useEffect(() => {
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      <Navbar />
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const items = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const index = Math.floor(scrollPosition / 50);
    const newItem = items[index] || 'G';

    setSelectedItem(newItem);

    // Update background color smoothly based on the selected item
    const colors = {
      A: '#3e7ddb',
      B: '#28ab28',
      C: '#3e7ddb',
      D: '#351ba8',
      E: '#9e2828',
      F: '#451ad6',
      G: '#f26224',
    };

    setBackgroundColor(colors[newItem] || '#54b8d6');
  }, [scrollPosition]);

  const handleItemClick = (item) => {
    setSelectedItem(item);

    // Update background color smoothly based on the selected item
    const colors = {
      A: '#3e7ddb',
      B: '#28ab28',
      C: '#3e7ddb',
      D: '#351ba8',
      E: '#9e2828',
      F: '#451ad6',
      G: '#f26224',
    };

    setBackgroundColor(colors[item] || '#54b8d6');
  };

  return (
    <div className="container" style={{ minHeight: '100vh' }}>
      <div className="firstcolmn" style={{ backgroundColor, padding: '20px', transition: 'background-color 0.3s' }}>
        <h1 style={{ color: 'white',fontSize:'25px' }}>Our Strategic IT solutions Deliver -</h1>
        <div className="item-links">
          {/* Your existing links */}
          <a
            href="#"
            onClick={() => handleItemClick('A')}
            className={selectedItem === 'A' ? 'bg-blue' : ''}
            style={{
              marginLeft: selectedItem === 'A' ? '20px' : '',
              fontWeight: selectedItem === 'A' ? 'bold' : 'normal',
              textDecoration: selectedItem === 'A' ? 'underline' : 'none',
            }}
          >
            WEB APPLICATION
          </a>
          {/* ... Repeat for other links */}
          <br></br>
          <a
  href="#"
  onClick={() => handleItemClick('B')}
  className={selectedItem === 'B' ? 'selected' : ''}
  style={{
    marginLeft: selectedItem === 'B' ? '20px' : '',
    fontWeight: selectedItem === 'B' ? '600' : 'normal',
    textDecoration: selectedItem === 'B' ? 'underline' : 'none',
  }}
>
  WEB DESIGING
</a>
{/* ... Repeat for other links */}
<br />
<a
  href="#"
  onClick={() => handleItemClick('C')}
  className={selectedItem === 'C' ? 'selected' : ''}
  style={{
    marginLeft: selectedItem === 'C' ? '20px' : '',
    fontWeight: selectedItem === 'C' ? '600' : 'normal',
    textDecoration: selectedItem === 'C' ? 'underline' : 'none',
  }}
>
E-COMMERCE WEBSITE
</a>
{/* ... Repeat for other links */}
<br />
<a
  href="#"
  onClick={() => handleItemClick('D')}
  className={selectedItem === 'D' ? 'selected' : ''}
  style={{
    marginLeft: selectedItem === 'D' ? '20px' : '',
    fontWeight: selectedItem === 'D' ? '600' : 'normal',
    textDecoration: selectedItem === 'D' ? 'underline' : 'none',
  }}
>
MOBILE APP DEVLOPEMENT
</a>
{/* ... Repeat for other links */}
<br />
<a
  href="#"
  onClick={() => handleItemClick('E')}
  className={selectedItem === 'E' ? 'selected' : ''}
  style={{
    marginLeft: selectedItem === 'E' ? '20px' : '',
    fontWeight: selectedItem === 'E' ? '600' : 'normal',
    textDecoration: selectedItem === 'E' ? 'underline' : 'none',
  }}
>
DESKTOP APPLICATION
</a>
{/* ... Repeat for other links */}
<br />
<a
  href="#"
  onClick={() => handleItemClick('F')}
  className={selectedItem === 'F' ? 'selected' : ''}
  style={{
    marginLeft: selectedItem === 'F' ? '20px' : '',
    fontWeight: selectedItem === 'F' ? '600' : 'normal',
    textDecoration: selectedItem === 'F' ? 'underline' : 'none',
  }}
>
SEARCH ENGINE OPTIMIZATION
</a>
{/* ... Repeat for other links */}
<br />
<a
  href="#"
  onClick={() => handleItemClick('G')}
  className={selectedItem === 'G' ? 'selected' : ''}
  style={{
    marginLeft: selectedItem === 'G' ? '20px' : '',
    fontWeight: selectedItem === 'G' ? '600' : 'normal',
    textDecoration: selectedItem === 'G' ? 'underline' : 'none',
  }}
>
  SOCIAL MEDIA MARKETING
</a>
{/* ... Repeat for other links */}
<br />

        </div>
      </div>

      <ImageDisplay selectedItem={selectedItem} backgroundColor={backgroundColor} />
      
      <ContentDisplay selectedItem={selectedItem} backgroundColor={backgroundColor} />
    </div>
  );
};

export default App;
