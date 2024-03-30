import React, { useEffect, useState, useRef } from 'react';

const ContentDisplay = ({ selectedItem }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const listItems = document.querySelectorAll('.custom-list li');
      const contentOffset = contentRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = window.scrollY + window.innerHeight;

      // Check if the content section is visible
      if (scrollPosition > contentOffset && !visibleSections.includes('content')) {
        setVisibleSections(['content']);
      }

      // Check if individual list items are visible
      listItems.forEach((item, index) => {
        const itemOffset = item.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition > itemOffset && !visibleSections.includes(`item${index}`)) {
          setVisibleSections((prevSections) => [...prevSections, `item${index}`]);

          // Scroll smoothly to the next section when a list item becomes visible
          if (index < listItems.length - 1) {
            const nextItemOffset = listItems[index + 1].getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: nextItemOffset,
              behavior: 'smooth',
            });
          } else {
            // If it's the last list item, scroll to the end of the content
            const contentHeight = contentRef.current.clientHeight;
            window.scrollTo({
              top: contentOffset + contentHeight - window.innerHeight,
              behavior: 'smooth',
            });
          }
        }
      });
    };

    // Attach event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSections]);

  return (
    <div className="section content-display" ref={contentRef}>
      {selectedItem === 'A' && (
         <div className="w3-center">
         <h2 className="responsive-heading w3-animate-top">
     
          Building next-gen <b>Web Applications </b>while seamlessly integrating all facets of your business-
          </h2>
          <ul className="custom-list">
            <div className="w3-containerr">
              <li>1. E-commerce website</li>
              <li>2. Mobile App Development</li>
              <li>3. Desktop Applications</li>
            </div>
          </ul>
          <br></br>
         
        </div>
      )}

      {selectedItem === 'B' && (
        <div className="w3-center">
          <h2 className="responsive-heading w3-animate-top">
            Creating industry-specific <b>Web Designs </b>by strategically blending brand storytelling and User Experience-
            </h2>
                    <ul className="custom-list">
                                
                                <li>1. Appealing Visuals & Innovative Designs</li>
                                <li>2. High Accessibility & Adaptability</li>
                                <li>3. Consistent Branding with Clear CTAs</li>
                                
                    </ul>
            <br></br>
           
        </div>
      )}

      {selectedItem === 'C' && (
        <div className="w3-center">
        <h2 className="responsive-heading w3-animate-top">
           Developing simple, intuitive, high-performance <b>E-commerce Websites</b> for taking your business to the next level-
          </h2>
          <ul className="custom-list">
          <div className="w3-container w3-center w3-animate-bottom">
            <li>1. Responsive & Interactive Sites</li>
            <li>2. Secure & Streamlined Payments</li>
            <li>3. Enhanced Shopping Experience</li>
            </div>
          </ul>
          <br></br>
         
        </div>
      )}

      {selectedItem === 'D' && (
        <div className="w3-center">
        <h2 className="responsive-heading w3-animate-top">
           Serving unique experiences and solving business challenges through intelligent<b> Mobile Apps-</b>
          </h2>
          <ul className="custom-list">
          <div className="w3-container w3-center w3-animate-bottom">
            <li>1. Ease of use & simplified integration</li>
            <li>2. Improved Productivity & Security</li>
            <li>3. Customized for Scalability & Flexibility</li>
            </div>
          </ul>
          <br></br>
        
        </div>
      )}
      {selectedItem === 'E' && (
        <div className="w3-center">
        <h2 className="responsive-heading w3-animate-top">
         Providing a competitive edge with customized <b>Desktop Applications</b> that accelerate business processes-</h2>
          <ul className="custom-list">
          <div className="w3-container w3-center w3-animate-bottom">
            <li>1. Ease of use & simplified integration</li>
            <li>2. Improved Productivity & Security</li>
            <li>3. Customized for Scalability & Flexibility</li>
            </div>
          </ul>
          <br></br>
         
        </div>
      )}
      {selectedItem === 'G' && (
        <div className="w3-center">
        <h2 className="responsive-heading w3-animate-top">
         Unlocking your Business' true potential & revamping it through smart<b> Digital Marketing-</b></h2>
          <ul className="custom-list">
          <div className="w3-container w3-center w3-animate-bottom">
            <li>1. Global Reach & Increased Awareness</li>
            <li>2. Effective Targeting & Measurable Results</li>
            <li>3. Improved Engagement & Conversions</li>
            </div>
          </ul>
          <br></br>
         
        </div>
      )}
      {selectedItem === 'F' && (
       <div className="w3-center">
       <h2 className="responsive-heading w3-animate-top">  Outdoing your competition with Increased website traffic through <b> Search Engine Optimization</b> for impactful ranking-</h2>
          <ul className="custom-list">
          <div className="w3-container w3-center w3-animate-bottom" style={{ display: 'inline'}}>
            <li>1. Boost your Visibility - 10x your business</li>
            <li>2. Generate more Leads - Increase your Sales</li>
            <li>3. Get more Customers - Improve your ROI</li>
            </div>
          </ul>
          <br></br>
         
        </div>
      )}
    </div>
  );
};

export default ContentDisplay;
