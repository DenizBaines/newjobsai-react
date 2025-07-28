import React, { useState, useEffect } from 'react';
import './Advisors.css'; // Ensure you have the CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../navbar/Navbar'; // Adjust the import path as necessary
//import Footer from './footer/Footer'; // Adjust the import path as necessary
import Footer from '../footer/Footer'; // Adjust the import path as necessary

const advisors = [
  {
    name: 'Mr. R.V. Verma',
    title: <>Chairman, <br /> AU Small Finance Bank</>,
    shortBio: 'Mr. Verma is a veteran finance leader with 35+ years of experience, known for pioneering reforms in housing finance and leading global collaborations.',
    fullBio: 'Mr. Verma is a seasoned industry professional who brings immense experience and exposure of 35 years in Finance & as an industry leader. He has held leadership positions across industries as Chairman and CEO. He has been instrumental in turn around many institutions with his leadership capabilities and expertise over financial aspects. He is responsible for many pathbreaking interventions in low income and affordable housing sector. He has been involved in bringing reforms in financial sector and promoting collaboration with international organizations like World Bank, USAID, ADB, and many more. He is responsible for setting up of the Asia Pacific Union for Housing Finance (APUHF) and served as its chairman for two terms.',
    image: './newjobs/images/advisors/RV_Verma.jpg'
  },
  {
    name: 'Ms. Rahul Banerjee',
    title: <>Vice President & Head Corporate Affairs, <br /> Quess Corp Limited</>,
    shortBio: 'Mr. Rahul Banerjee is a public policy expert with 19+ years of experience, currently serving as VP & Head of Corporate Affairs at Quess Corp, and actively contributing to key national industry councils.',
   
    fullBio: 'Mr. Rahul Banerjee is a public policy expert with 19+ years of experience in the field of Government Affairs & External Communications. His major expertise lies in Policy Advocacy with Government & Non-Government Bodies, Crisis Management & Developing Communication Strategies with multi-lateral forums. Currently, he is working as Vice President & Head Corporate Affairs with Quess Corp Limited, Indias leadning business service provider, leveraging domain knowledge and future-ready digital platform to drive productivity and having Indias laregest staffing team. He is also the member of CII National Committee on Skill Development and Livelihood, Member of FICCI National Council of Sports, Executive Council Member of All India Organization of Employers (AIOE) & Executive Member of AIIMA Young Leadership Council.',
    image: './newjobs/images/advisors/Rahul_Banerjee.jpg'
  },
  {
    name: 'Mr. Manoj Vermani',
    title: <>Associate Vice President, <br />Reliance Industries Ltd</>,
    shortBio: 'He is a senior Reliance professional with 26+ years of diverse experience, an IIT-IIM alumnus, avid reader, and speaker passionate about learning and mentoring future leaders.',
    
    fullBio: 'A professional with over 26 years of experience handling quite a wide and diversified profile within Reliance. Manoj started his career as a Mechanical Engineer with Reliance, did his Mechanical Engineering from IIT Roorkee in 1995 and then a specialized residential management program with IIM Banglore in 2000. He is an avid reader clicking close to 50 books a year and a Tony Buzan-certified Mind Mapper who is forever keen to learn new things and sharing knowledge with the younger generation. He has been an eminent speaker in IITs & IIMs sharing corporate learnings.',
    
    image: './newjobs/images/advisors/Manoj_Vermani.jpg'
  },
  {
    name: 'Mr. Manish Gupta',
    title: <>Managing Director & Lead - Products, <br />Accenture India</>,
    shortBio: 'Manish Gupta, MD & India Business Head at Accenture for consumer industries, is a CA and strategic digital transformation leader with deep expertise in consulting, technology, and emerging innovations like Industry X.O and analytics.',
    
    fullBio: 'Manish Gupta is the Managing Director & India Business Head for consumer-centric Industries Accenture. In this role, he is responsible for the business across all types of consulting, outsourcing and technology services. Manish is a trusted C-suite advisors and outcome focused leader and has been providing strategic insights to help clients digitalize their business. Prior to assuming this role, Manish served as the regional Consumer Goods & Services Industry lead across Australia and New Zealand, Southeast Asia, India, Africa and the Middle East. He got deep intrest in new areas - industry X.O., Digital Supply Chain, S4 Transformation, Advance Analytics, Ecommerce & Cloud. He is a certified Chartered Accountant from Institute of Chartered Accountants of India and a Certified Information Auditor.',
    
    image: './newjobs/images/advisors/Manish_Gupta.jpg'
  },
  {
    name: 'Mr. Ankit Jhamb',
    title: <>Senior Associate Director, <br />KPMG</>,
    shortBio: 'Ankit Jhamb is a senior L&D leader at KPMG with 15+ years of experience, known for designing agile capability frameworks by blending social sciences, analytics, and branding.',
    
    fullBio: <>Ankit Jhamb is a senior leader with one of the world's largest consulting firm. He got 15 plus years of experience across financial and professional services. His approach to solution design, building agile and effective L&D engines by leveraging social sciences, analytics, and branding is unique and the same is widely recognized in the sector. He is presently associated as a Senior Associate Director, Capability Development, with KPMG.</>,
    
    image: './newjobs/images/advisors/Ankitt_Jhamb.jpeg'
  },
  {
    name: 'Ms. Abhilasha Gupta',
    title: <>Global Head - Corporate Communication & Public Affairs, <br />Tech Mahindra</>,
    shortBio: 'Abhilasha Gupta is a seasoned communication expert with rich experience across top media and IT firms, specializing in strategic PR, crisis communication, and corporate affairs.',
   
    fullBio: <>An experienced Communication professional with a demonstrated history of working in the information technology and digital service industry. Abhilasha is a highly skilled professional in strategic Communication, public relations, crisis communication, and corporate affairs. She has previously worked with HCL, The Practice, NDTV 24x7, Hindustan Times, and The Pioneer. She is a Post-Graduate i English Journalism from the Indian Institute of Mass Communication (IIMC), Delhi. She is also a gold medalist in her bachelor's degree in English Literature from Ramjas College (University of Delhi).</>,
    
    image: './newjobs/images/advisors/Abhilasha_Gupta.jpg'
  },
  {
    name: 'Mr. Arsh Goyal',
    title: <>Senior Software Lead, <br />Samsung</>,
    shortBio: 'Arsh Goyal, Senior Software Lead at Samsung, is a tech leader in Industry 4.0 and renowned mentor, known for his expertise in algorithms, big data, and guiding thousands towards careers at top tech firms via his talks and 200K+ subscriber YouTube channel.',
    
    fullBio: <>Arsh Goyal is a Senior Software Lead at Samsung, Banglore. He has previously worked for organizations like ISRO & Codechef. He is a highly IT skilled professional with command over large-scale systems, Data Structures & Big Data. His passion for algorithmsand coding makes him the Technology Leader in Industry 4.0. He along with his professional commitment highly involved as a motivational professional and deliver talks in universities and colleges. His talks focus on goals setting and helping youth to effectively face interviews. He helped thousands of youths to prepare for interviews that helped selectionin brands like Google, Microsoft, Amazon, etc. He has began running his YouTube Channel with over 200K+ Subscribers and around 80K on LinkedIn.</>,
    
    image: './newjobs/images/advisors/Arsh_Goyal.jpg'
  },
];

const Advisor = () => {
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
   
    <div> 
 
   <div className="advisor-page"> 
     <Navbar />
      <section className="advisor-hero">
        <h1>Our Board of Advisors</h1>
        <p>Guided by industry experts and academic leaders ensuring world-class training and skill alignment.</p>
      </section>

      <section className="advisor-grid-section">
        <div className="advisor-grid">
          {advisors.map((advisor, index) => (
            <div className="advisor-card" data-aos="fade-up" key={index}>
              <img src={advisor.image} alt={advisor.name} className="advisor-image" />
              <h3>{advisor.name}</h3>
              <h4>{advisor.title}</h4>
              <p>{advisor.shortBio}</p>
              <button
                className="read-more-btn"
                onClick={() => setSelectedAdvisor(advisor)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Full Bio */}
      {selectedAdvisor && (
        <div className="modal-overlay" onClick={() => setSelectedAdvisor(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedAdvisor(null)}>✖</button>
            <img src={selectedAdvisor.image} alt={selectedAdvisor.name} />
            <h3>{selectedAdvisor.name}</h3>
            <h4>{selectedAdvisor.title}</h4>
            <p>{selectedAdvisor.fullBio}</p>
          </div>
        </div>
      )}

     
    </div>

    <Footer />
    </div>
    
     
  );
};

export default Advisor;
