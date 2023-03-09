

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import {Link} from 'react-router-dom';





export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    
     
    
    
    <div>
  
                 
      <ScreenHeading
        title={"Certification and Leaderships"}
        subHeading={"Take a look at it"}
      />
      
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div>
            
          </div>
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      The basics of JavaScript include variables, boolean logic, if/else statements, loops, functions, arrays, and more.
JavaScript that is asynchronous The event loop, async/await, promises, AJAX and APIs, JSON, and HTTPS
The "this" keyword, function constructors, prototypal inheritance, first-class functions, and closures are examples of contemporary features.
                      
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                  
                    <img src= "img/testimonial/Udemy-Emblem.png" alt="no internet connection"></img>
                    <h5>JavaScript Course</h5>
                    <p>By Udemy</p>
                   
                  </div>
                 
                </div>
              </div>
              

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      <b>Learning outcomes</b>:Essential algorithmic techniques

Design efficient algorithms

Practice solving algorithmic interview problems

Implement efficient and reliable solutions
<b>Skills Gained:</b>
              Dynamic Programming
              Debugging
              Software Testing
              Algorithms
              Computer Programming
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src="img/testimonial/coursera.png" alt="no internet connection"></img>
                    <h5>Alogorithmic Toolbox</h5>
                    <p>By Coursera</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      <b>Learning Outcomes:</b>Key problems that Machine Learning can address and ultimately help solve.

How to build intelligent applications using Amazon AI services.
How to build, train and deploy a model using Amazon SageMaker.
<b>Skills Gained:</b>
            Artificial Intelligence (AI)
            Machine Learning
            Amazon SageMaker
            Natural Language Processing (NLP)
            Computer Vision
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src="img/testimonial/coursera.png" alt="no internet connection"></img>
                    <h5>Getting Started with AWS Machine Learning</h5>
                    <p>By Coursera</p>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      At its core, problem-solving focuses on the study, understanding, and usage of data structures and algorithms. This competency area includes basic Data Structures and Algorithms. Key Competencies: Basic Data Structures - Use Data Structures such as Arrays and Strings.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src="img/testimonial/download.jfif" alt="no internet connection"></img>
                    <h5><b>Problem Solving</b> </h5>
                    <p>By hackerRank</p>
                    
                  </div>
                </div>
                
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      
      
      <div className="footer-image">
        <img src="img/testimonial/shape-bg.png" alt="image not responding" />
      </div>
    </div>
  );
}