import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MobileNav from './components/MobileNav';
import { Switch, Route } from "react-router-dom";
import BottomNavBar from "./components/BottomNavBar";
import DesktopApp from "./DesktopApp";
import Footer from "./Footer";
import "./App.css";
import logo from "./giffile.gif";
import logo1 from "./1.png";
import logo2 from "./2.png";
import logo3 from "./3.png";
import logo4 from "./4.png";
import logo5 from "./5.png";
import logo6 from "./6.png";
import logo7 from "./zoho.png";
import logo8 from "./digital.png";
import logo9 from "./enterprise.png";
import logo10 from "./consumer.png";
import logo11 from "./ecomerce.png";
import logo12 from "./saas.png";
import logo13 from "./team.jpeg";
import logo14 from "./our.jpeg";
import logo16 from "./mission.jpeg";
import logo17 from "./contact.jpeg";
import logo18 from "./reward.jpeg";
import logo19 from "./hand.jpeg";
import logo20 from "./pools.jpeg";
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const [currentSection, setCurrentSection] = useState("section1");

  const handleSectionClick = (sectionId) => {
    setCurrentSection(sectionId);
  };
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <>
      <Navbar />
      
      <section className="home_content">
      
        <div className="heading_content">
          <h1>Solutions For Building </h1>
          <h2> A Smart World!</h2>
          
          <div className="paragraph">
            <p>
              Standing at the forefront of innovation, we are the premier IT
              solutions company in Maharashtra, India. With a decade of
              delivering digital solutions globally, we harness the power of
              emerging technologies to revolutionize the way you do business.
            </p>
          </div>

          <div className=" contact-button">
            <a
              href="https://in.linkedin.com/company/dreamsguider?trk=public_profile_topcard-current-company"
              target="_blank"
            >
              <button type="button"  >Contact Us</button>
            </a>
          </div>
        </div>

        <div className="gif">
          <img src={logo} alt="loading..." />
        </div>
      </section>
      <section className="ourclients">
        <h3>Our Esteemed Clients</h3>
        <h4 className="centered-text"> </h4>

        <div className="row">
          <div class="col-12 m-auto">
            <div className="image-slider-container">
              <div className="image-slider">
                {/* Add your images here */}
                <img src={logo1} alt="Image 1" />
                <img src={logo2} alt="Image 2" />
                <img src={logo3} alt="Image 3" />
                <img src={logo4} alt="Image 4" />
                <img src={logo5} alt="Image 5" />
                <img src={logo6} alt="Image 6" />
                <img src={logo1} alt="Image 1" />
                <img src={logo2} alt="Image 2" />
                <img src={logo3} alt="Image 3" />
                <img src={logo4} alt="Image 4" />
                <img src={logo5} alt="Image 5" />
                <img src={logo6} alt="Image 6" />

                {/* Add more images as needed */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="zohocompany">
        <h1> </h1>
        <h2>
          {" "}
          The Future-Proof Technology That Your
          <br />
          Company Deserves
        </h2>

        <div className="zohocontent">
          <div className="box-zohocontent">
            <div className="box">
              <img src={logo7} alt="Image 8" />
              <a href="#" class="btn">
                {" "}
                <h5>ZOHO ONE Implementation</h5>
                <p>
                  Digitize. Optimize. Personalize. Organize. Power up your
                  business with countless integrations from Zoho. As an
                  authorized Zoho partner, dreamsguider IT streamlines your
                  operational procedures in the most flexible way.{" "}
                </p>
              </a>
            </div>
            <div className="box">
              <img src={logo12} alt="Image 12" />
              <a href="#" class="btn">
                {" "}
                <h5>SaaS & Cloud Service</h5>
                <p>
                  Reinvent your business with futuristic solutions through
                  Software as a Service (SaaS). Our adept team of SaaS product
                  developers leverages nimble and innovative technology to craft
                  avant-garde software that fuels your business with the best of
                  the web.{" "}
                </p>
              </a>
            </div>
            <div class="box">
              <img src={logo9} alt="Image 1" />
              <a href="#" class="btn">
                {" "}
                <h5>Enterprise Solutions</h5>
                <p>
                  Our expert team swiftly identifies potential issues that could
                  harm your business, and provide a comprehensive suite of
                  services to enhance your business value. As your business
                  sails through the sea of competition.
                </p>
              </a>
            </div>
            <div class="box">
              <img src={logo8} alt="Image 1" />
              <a href="#" class="btn">
                {" "}
                <h5>Digital Transformation</h5>
                <p>
                  At our core, we're problem-solvers. So when you bring us your
                  e-commerce business idea, we dive deep into analysis,
                  identifying solutions that will blow your mind. We then use
                  our expertise to carefully craft an optimal technology stack
                  that's perfectly suited to your needs. ?
                </p>
              </a>
            </div>
            <div class="box">
              <img src={logo10} alt="Image 1" />
              <a href="#" class="btn">
                {" "}
                <h5>Consumer Applications</h5>
                <p>
                  The future is in Apps. Our team of experts is fluent in the
                  latest programming languages and frameworks, enabling us to
                  create efficient, high-speed, and scalable desktop, android
                  and iOS solutions that align with your business needs and
                  budget.
                </p>
              </a>
            </div>
            <div class="box">
              <img src={logo11} alt="Image 1" />
              <a href="#" class="btn">
                <h5>E-Commerce Platforms</h5>
                <p>
                Whether you're a savvy shopper or a thriving business,welcomes you to a world of possibilities.
                 Explore, shop, and connect with us – your trusted e-commerce partner.
                 Join the Dreamsguider community and redefine the way you experience online shopping.
                </p>
              </a>
            </div>
          </div>
        </div>

       
      </section>
      <section className="threeparts"></section>

    
      <Footer />
    </>
  );
};

const OurServices = () => {
  return (
    <>
      
     <Navbar/>
      <section className="hero-section">
       
      </section>
    <Footer/>
    </>
  );
};

const OurProducts = () => {
  return (
    <>
     <Navbar />
      <section className="hero-section">
       <DesktopApp/>
      </section>
      
    <Footer />
    </>
  );
};

const AboutUs = () => {
  return (
    <>
     <Navbar />
     


      <section className="about_section">
        <div className="image_i">
          <img src={logo13} alt="Image " />
        </div>
        <div className="about_heading">
          <h1>About</h1>
          <h2 className="border_i"> </h2>

          <h3>Dreams Guider®</h3>

          <div className="three_paragraph">
            <p>
              we're much more than just your average IT service provider. As a
              customer-centric team of tech visionaries, we're dedicated to
              innovating new products that meet the evolving needs of our
              clients & delivering exceptional service that helps them stay
              ahead of the curve.
            </p>
            <p>
              Our goal is simple - to help our clients achieve their business
              goals & maximize RoI through reliable and creative web-based
              solutions that are tailored to their unique needs. With over a
              decade of industry experience, a dedicated team of innovators and
              our founder,
              <a
                href="https://in.linkedin.com/in/vikram-waykar-768226211"
                target="_blank"
                className="ceo"
              >
                Mr.Vikram Waykar{" "}
              </a>
              , at the helm of it all, you can rest assured that you're in safe
              hands.
            </p>
            <p>
              But we're not content with just delivering great services - we're
              also dedicated to transforming digital journeys and shaping the
              future of business. From IT strategy consulting to custom software
              development, we're focused on delivering real results that drive
              real change. Whether you're an individual, a startup, or a Fortune
              500 company, we're here to help you achieve your goals and realize
              your full potential.
            </p>
          </div>
        </div>
      </section>
      <section className="About_ii">
      
             
                  <div className="div_i">
                    <h1> </h1>
                    <h2>WHO</h2>
                    <h3>WE ARE? </h3>

                    <h4> </h4>
                  </div>
             
              
                    <div className="description">
                      <h8>We Are The Preferred Digital Transformation </h8>
                      <h9>
                        <b>Partners For 650+ Companies.</b>
                      </h9>

                      <div className="desc">
                        <p>
                          We're a team of passionate problem solvers, tech enthusiasts, and
                          digital innovators. We help clients win in the markets they
                          operate in. Our mission is simple - deliver disruptive,
                          industry-oriented technology ing, software platforms, and IT
                          services that transform our clients' businesses. At DreamsGuider®,
                          there's no such thing as a one-size-fits-all solution. That’s why
                          we work closely with our clients to identify their challenges,
                          needs, and goals.
                        </p>
                        <p>
                          We're not just tech experts - we're digital alchemists who turn
                          ideas into reality. We take pride in delivering digital
                          experiences that are not just impactful but also awe-inspiring.
                          So, whether you need a tech sidekick, a digital strategist, or a
                          full-on IT superhero team, DreamsGuider® has got your back.
                        </p>

                        <img
                          src="https://www.instanceit.com/assets/images/qus.png"
                          alt="Question"
                        />
                      </div>
                      </div>
                 
        
      </section>
      <section>
        <div className="wedo">
          <div className="intro">
            <h1> </h1>
            <h2>WHAT</h2>
            <h3>WE DO? </h3>
            <h4> </h4>
          </div>
          <div className="intro_desc">
            <h7>We Harness The Power Of</h7>
            <h8>Technology To Build A</h8>
            <h9>Better World.</h9>

            <p>
              From designing, developing, and marketing desktop, web, and mobile
              applications, customized ERP solutions, e-commerce websites and
              much more, we do it all. In simple terms, we are the
              one-stop-solution for all our clients’ tech needs. We help bridge
              the gap between technology and business goals. leveraging the
              latest technologies and industry best practices, our team of
              experts accelerates brands' digital transformation journey and
              navigates them towards the future. With our full-cycle product
              development services and strategic gap filling, we are committed
              to delivering exceptional value and unparalleled results to our
              clients.
            </p>
            <img
              src="https://www.instanceit.com/assets/images/qus.png"
              alt="Question"
            />
            <div className="fot">
              <p1>Here’s what sets us apart-</p1>
            </div>
            <div className="for_this">
              <ul>
                <li>
                  1. Ensuring Customer Success through Commitment and
                  Dedication.
                </li>
                <li>
                  2. Integrating Domain Expertise with Cutting-Edge Technology.
                </li>
                <li>
                  3. Continuously Improving Software Development Practices
                  through Iterative Feedback.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="our_ceo">
        <div className="ivision">
          <img src={logo14} alt="our vision"></img>
        </div>
        <div className="header_our">
          <h2> </h2>
          <h1>Our Vision</h1>

          <h3>Excellence for betterment of life</h3>
          <p>
            Our vision is to be the most trusted and beloved partner for digital
            transformation, globally. We aspire to empower businesses and
            organizations of all sizes, across industries, to achieve their full
            potential by leveraging the latest technologies and innovation.
          </p>
          <p>
            At our core, we are driven by a deep commitment to excellence, with
            a focus on delivering transformative solutions and services that
            enhance people's lives. Our goal is to create a positive and lasting
            impact on our clients, their customers, and society at large, by
            enabling digital change that drives growth, innovation.
          </p>
        </div>
      </section>
      <section className="our_mission">
        <div className="mission_desc">
          <h4> </h4>
          <h1>Our Mission</h1>

          <h2>To automate businesses through Smart IT Solutions</h2>
          <p>
            Our mission is to help the world thrive by making the most out of
            technology. We aim to deliver best in the industry custom solutions
            that enhance efficiency, streamline operations, and maximize
            productivity. We are committed to providing exceptional customer
            service and support, ensuring our clients' success in the rapidly
            evolving digital landscape.
          </p>
          <h3>To excel Business Operating Processes </h3>
          <p>
            As A technology partner, we are committed to supporting business
            growth every step of the way. When your business succeeds, we
            succeed, and that's why our mission is to work hand in hand with our
            clients to ensure continuous success. Trust us to make technology
            work for your business, not the other way around.
          </p>
        </div>
        <div className="mission_img">
          <img src={logo16} alt="teamimg"></img>
        </div>
      </section>
      <section className="core_value">
      <div className="headingss">
      <h5> </h5>
        <h6>Core Value</h6>
        </div>
       
        <div className="header_core">
               

                <div className="con">
                  <div className="con_Image">
                     <img src={logo17} alt="hands"></img>
                  </div>
                  <div className="con_Discription">
                    <h1>Betterment</h1>
                    <p>Continuous learning for Betterment</p>
                  </div>
                </div>

                <div className="con">
                  <div className="con_Image">
                     <img src={logo19} alt="hands"></img>
                  </div>
                  <div className="con_Discription">
                    <h1>Accountability</h1>
                    <p>Accountability for providing finest solutions</p>
                  </div>
                </div>

                <div className="con">
                  <div className="con_Image">
                     <img src={logo18} alt="hands"></img>
                  </div>
                  <div className="con_Discription">
                    <h1>Success</h1>
                    <p>Success for us is to Employing a great management team.</p>
                  </div>
                </div>
                
                <div className="con">
                  <div className="con_Image">
                     <img src={logo20} alt="hands"></img>
                  </div>
                  <div className="con_Discription">
                    <h1>Excellence</h1>
                    <p>Excellence by constructing a sustainable and respectable future.</p>
                  </div>
                </div>







        </div>
      </section>
    <Footer/>
    </>
  );
};
const Blog = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome </p>
        <h1>DreamsGuider Blog Page</h1>
      </section>
    <Footer/>
    </>
  );
};
const ContactUs = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome </p>
        <h1>DreamsGuider Contact Page</h1>
      </section>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <OurServices />
      </Route>

      <Route path="/service">
        <OurProducts />
      </Route>

      <Route path="/contact">
        <AboutUs />
      </Route>

      <Route path="/blog">
        <Blog />
      </Route>

      <Route path="/contact">
        <ContactUs />
      </Route>
    </Switch>
  );
};

export default App;
