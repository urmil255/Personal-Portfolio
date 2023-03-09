// import React,{useState,useEffect} from 'react'
// import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
// import ScrollService from '../../utilities/ScrollService'
// import Animations from '../../utilities/Animations'
// import './Resume.css';

// export default function Resume(props) {
//     const [selectedBulletIndex,setSelectedBullteIndex]=useState(0);
//     const [carousalOffSetStyle,setCarousalOffSetStyle]=useState({});

//     let fadeInScreenHandler = (screen) => {
//         if (screen.fadeScreen !== props.id) return;
//         Animations.animations.fadeInScreen(props.id);
//       };
    
//     const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

//     const ResumeHeading=(props)=>{
//         return (
//             <div className='resume-heading'>
//             <div className='resume-main-heading'>
//                 <div className='heading-bullet'>
//                    <span>{props.heading ? props.heading : ''}</span> 
//                    { props.fromDate && props.toDate ?(
//                     <div className='heading-date'>
//                         {props.fromDate +"-" + props.toDate}
//                         </div>
//                    ) : (
//                     <div></div>
//                    )
//                 }
//                 </div>
//                 <div className='resume-sub-heading'>
//                     <span>{props.subHeading ? props.subHeading : ''}</span>
//                 </div>
//                 <div className='resume-heading-description'>
//                     <span>{props.description ? props.description : ''}</span>
//                 </div>
//             </div>
//         </div>
//         )
        
//     };
//     const resumeBullets=[
//         {label:"Education",logoSrc:"education.svg"},
//         {label:"Work History",logoSrc:"work-history.svg"},
//         {label:"Programming Skills",logoSrc:"programming-skills.svg"},
//         {label:"Projects",logoSrc:"projects.svg"},
//         {label:"interests",logoSrc:"interests.svg"}

//     ];
//     const programmingSkillsDetails=[
//         {skill:"JavaScript",ratingPercentage:85},
//         {skill:"DSA",ratingPercentage:81},
//         {skill:"React Js",ratingPercentage:85},
//         {skill:"Express JS",ratingPercentage:80},
//         {skill:"Node JS",ratingPercentage:78},
//         {skill:"SQL",ratingPercentage:88},
//         {skill:"Core Java",ratingPercentage:85},
//         {skill:"HTML",ratingPercentage:85},
//         {skill:"CSS",ratingPercentage:80},
//     ];
//     const projectDetails=[
//         {
//         title:"Personal Portfolio Website",
//         duration:{fromDate:"Sept2022" , toDate:"Dec2022"},
//         description:
//         "A Personal Portfolio Website to showcase all my details and projects at one place",
//         subHeading:"Technologies Used: React Js, Bootstrap",
//     },
//     {
//         title:"Order-24",
//         duration:{fromDate:"Sept2021" , toDate:"Nov2022"},
//         description:
//         "•	Wesbite constituted of more than 6 webpages including homepage ,delivery page, order tracking page ",
//         subHeading:"Technologies Used: HTML, CSS and Bootstrap,Django,JS,Dbsql",
//     },
//     {
//         title:"Ai-ChatBot",
//         duration:{fromDate:"Jan2021" , toDate:"Feb2021"},
//         description:
//         "It helps in interaction of customers with the firm. It is textbased interfaces that provide support or connect human users with the service.",
//         subHeading:"Technologies Used: Python Programming, TensorFlow, Keras, NLTK, pickle, JSON and PyCharm Library",
//     },
// ];

// const resumeDetails=[
//     <div className='resume-screen-container' key="education">
//         <ResumeHeading
//         heading={"Pace University, Seidenberg School of Computer Science and Information Systems,New York City,UNITED STATES"}
//         subHeading={"Master of Science in Computer Science"}
//         fromDate={"2022"}
//         toDate={"2024"}
//         />
//         <ResumeHeading
//         heading={"L.D College of Engineering, Gujarat Technological University (GTU),Ahmedabad,INDIA"}
//         subHeading={"Bachelor of Engineering in Electronics and Communication"}
//         fromDate={"2018"}
//         toDate={"2022"}
//         />
//     </div>,

    
//     <div className='resume-screen-container' key="work-experience">
//         <ResumeHeading
//         heading={"Beyon data solutions"}
//         subHeading={"Odoo Developer Intern"}
//         fromDate={"Jan2022"}
//         toDate={"April2022"}
//         />
    
//     <div className='experience-description'>
//             <span className='resume-description-text'>
//             	- Design, Development and testing of Odoo (OpenERP) modules, projects, products and interfaces.
//             </span>
//         </div>

//     <div className='experience-description'>
//             <span className='resume-description-text'>
//             -Upkeep of current modules. complete and understandable documentation for all tasks and work completed. In accordance with application support, test new features or adjustments to current application modules. 
//             </span>
//             <br/>
//             <span className='resume-description-text'>
//             •	Troubleshoot and fix odoo problems. Ensuring the security of the Odoo application to safeguard crucial
// company data. 

//             </span>
//             <br/>
//             <span className='resume-description-text'>
//             •	Created an University management system in odoo using system architecture which includes
// presentation tier which is combination of HTML5, JavaScript and CSS, the logic tier exclusively written in
// Python, and data tier which only supports PostgreSQL as an RDBMS 
//             </span>
//     </div>
    
            
    
//         <div className='resume-screen-container programming-skills-container'
//         key="programming-skills"
//         >
//             {programmingSkillsDetails.map((skill,index)=>(
//             <div className='skill-parent' key={index}>
//                 <div className='heading-bullet'></div>
//                 <span>{skill.skill}</span>
//                 <div className='skill-percentage'>
//                     <div style={{width: skill.ratingPercentage + "%"}}
//                     className='active-percentage'>

//                     </div>
//                     </div>
//                     </div>
//             ))}
//         </div>,
        
        
        

//         <div className='resume-screen-container' key="projects">
//             {projectDetails.map((projectDetails,index)=>(
//                 <ResumeHeading 
//                 key={index}
//                 heading={projectDetails.title}
//                 subHeading={projectDetails.subHeading}
//                 description={projectDetails.description}
//                 fromDate={projectDetails.duration.fromDate}
//                 toDate={projectDetails.duration.toDate}
//                 />
//             ))}
//         </div>
        
            
//         <div className='resume-screen-container' key="interests">
//             <ResumeHeading
//             heading='Coding'
//             description='While the names of the coding paradigms sometimes vary, most experts agree on four primary types of code: imperative, functional, logical, and object-oriented.'
//             />
//              <ResumeHeading
//             heading='teaching'
//             description='While the names of the coding paradigms sometimes vary, most experts agree on four primary types of code: imperative, functional, logical, and object-oriented.'
//             />
//              <ResumeHeading
//             heading='playing'
//             description='While the names of the coding paradigms sometimes vary, most experts agree on four primary types of code: imperative, functional, logical, and object-oriented.'
//             />
//         </div>
//         </div>,
     

    
// ];
// const handleCarousal=(index)=>{
//     let offsetHeight=360;
//     let newCarousalOffset={
//         style:{transform:"translateY("+ index * offsetHeight*-1+"px)"}
//     };
//     setCarousalOffSetStyle(newCarousalOffset);
//     setSelectedBullteIndex(index);
//     };

//     const getBullets=()=>{
//         return resumeBullets.map((bullet,index)=>(
//             <div 
//             onClick={()=>handleCarousal(index)}
//             className={index===selectedBulletIndex? "bullet selected-bullet" : "bullet"}
//             key={index}
//             >
//                 <img className='bullet-logo'
//                 src={require (`../../assets/Resume/${bullet.logoSrc}`)}
//                 alt="B"
//                 />
//             <span className='bullet-label'>{bullet.label}</span>
//             </div>
//         ));
//     };
//     const getResumeScreen=()=>{
//         return (
//             <div 
//             style={carousalOffSetStyle.style}
//             className="resume-details-carousal"
//             >
//                 {resumeDetails.map((ResumeDetail)=>ResumeDetail)}
//             </div>
//         );
//     };

   
    
//   return (
//     <div className="resume-container screen-container"  id={props.id || ""}>
//         <div className='resume-content'>
//             <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"}/>
//             <div className='resume-card'>
//                 <div className='resume-bullets'>
//                     <div className='bullet-container'>
//                         <div className='bullet-icons'></div>
//                             <div className='bullets'>{getBullets()}</div>
//                         </div>
//                     </div>
//                     <div className='resume-bullet-details'>{getResumeScreen()}</div>
//                 </div>
                
//             </div>
//         </div>
      
    
//   );
// }
import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    // { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Odoo Development", ratingPercentage: 80 },
    { skill: "PostgreSql", ratingPercentage: 80 },
    { skill: "DSA", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "OCT-2022", toDate: "DEC-2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS,Node JS,EXpress JS, Bootsrap"
    },
    {
      title: "Order24",
      duration: { fromDate: "MAY-2020", toDate: "JULY-2020" },
      description:
        "•	Collaborated with 3 team members and developed A multi-responsive website.",
      subHeading:
        "Technologies Used: JavaScript, Dbsqlite, Jquery,Django,HTML,CSS",
    },
    {
      title: "Chatbot (Artifical Intelligence)",
      duration: { fromDate: "JAN-2021", toDate: "FEB-2021" },
      description:
        "•	It helps in interaction of customers with the firm. It is textbased interfaces that provide support or connect human users with the service.",
      subHeading:
        "Technologies Used: Python Programming, TensorFlow, Keras, NLTK, pickle, JSON and PyCharm Library.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Pace University, Seidenberg School of Computer Science and Information Systems, New York City, United States "}
        subHeading={"Master of Science in Computer Science"}
        fromDate={"2022"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"L.D College of Engineering, Gujarat Technological University (GTU)"}
        subHeading={"Bachelor of Engineering in Electronics and Communication"}
        fromDate={"2018"}
        toDate={"2022"}
      />     
    </div>,
  
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      
      <div className="experience-container">
        <ResumeHeading
          heading={"Beyon Data Solutions"}
          subHeading={"Odoo DEVELOPER INTERN"}
          fromDate={"JAN-2022"}
          toDate={"APRIL-2022"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div> */}
        <div className="experience-description">
          <span className="resume-description-text">
         • Design, Development and testing of Odoo (OpenERP) modules, projects, products and interfaces.
          </span>
          <br />
          <span className="resume-description-text">
            • Created an University management system in odoo using system architecture 
            which includes presentation tier which is combination of HTML5, JavaScript and CSS, the logic tier exclusively written in Python, and data tier which only supports PostgreSQL as an RDBMS.
          </span>
          <br />
          {/* <span className="resume-description-text">
          •	Developed and customized applications for odoo erp systems in collaboration with the team of five and accounting staff
          </span>
          <br /> */}
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Exposys Data Labs"}
          subHeading={"Web DEVELOPER INTERN"}
          fromDate={"APRIL-2021"}
          toDate={"JUNE-2021"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div> */}
        <div className="experience-description">
          {/* <span className="resume-description-text">
          •	Falicitated in the investigation of problems with web-based systems. Content, postings, and pages on the website should be updated.
          </span> */}
          {/* <br /> */}
          <span className="resume-description-text">
            • Created a blogging e-commerce website utilizing the DBsqlite database.
•	This project makes use of HTML, CSS, Bootstrap, and Jquery. Back-end development is carried out with the Django Framework.

          </span>
          <br />
           </div>
      </div>
    </div>,
    
    
    

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container " key="interests">
      <ResumeHeading
        heading="Data Structure and algorithms"
        description="DSA is the building block of the software development process.
        You develop logical thinking from it, which improves your programming."
      />
      <ResumeHeading
        heading="Sports"
        description="Sports has helped me learn moral principles like respect, perseverance, inclusivity, justice, and teamwork. Sport has the potential to offer a framework for learning values that is universal, helping to foster the soft skills."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);


  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};


export default Resume;

