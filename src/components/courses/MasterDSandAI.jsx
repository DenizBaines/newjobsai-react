// components/courses/MasterDSandAI.jsx

import React, { useState } from 'react';
import './MasterDSandAI.css'; // Import the CSS file

const MasterDSandAI = () => {
    // State to manage the open/close state of accordion items
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    // Data for the course curriculum accordion
    const curriculumData = [
        {
            id: 'collapseOne',
            title: 'Introduction to Analytics',
            content: (
                <>
                    <p>What is Data Science</p>
                    <p>Artificial Intelligence</p>
                    <p>Machine learning</p>
                    <p>Real world AI and ML application</p>
                    <p>What is Big Data</p>
                </>
            ),
        },
        {
            id: 'collapseTwo',
            title: 'Introduction to "R" Programming',
            content: (
                <>
                    <p>R Overview: What is R and why use R?</p>
                    <p>R preliminaries: Writing basic R commands</p>
                    <p>Basic Data Types in R</p>
                    <p>Data Structures in R: Vectors</p>
                    <p>Data Structures in R: Matrices</p>
                    <p>Data Structures in R: Data frames</p>
                    <p>Data Structures in R: List</p>
                    <p>Installing Packages in R</p>
                    <p>Importing data sets into R</p>
                </>
            ),
        },
        {
            id: 'collapseThree',
            title: 'Data Visualization',
            content: (
                <>
                    <p>Matplotlib</p>
                    <p>Seaborn</p>
                </>
            ),
        },
        {
            id: 'collapseFour',
            title: 'Statistics',
            content: (
                <>
                    <p>Intro to statistics</p>
                    <p>Population,sample</p>
                    <p>sampling techniques</p>
                    <p>quartile,decile</p>
                </>
            ),
        },
        {
            id: 'collapse5',
            title: 'Introduction to Python Programming : Mathematical Preliminaries',
            content: (
                <>
                    <p>Anaconda Software</p>
                    <p>Conditional statements and Loops</p>
                    <p>String,List,Tuple,Dictionary,Sets</p>
                    <p>User defined functions</p>
                    <p>Modules and Packages</p>
                </>
            ),
        },
        {
            id: 'collapse6',
            title: 'Dimensionality Reduction',
            content: (
                <>
                    <p>Principal Component Analysis (PCA)</p>
                    <p>Non-negative matrix factorization (NMF)</p>
                    <p>Linear discriminant analysis (LDA)</p>
                    <p>Generalized discriminant analysis (GDA)</p>
                </>
            ),
        },
        {
            id: 'collapse7',
            title: 'Unsupervised and Supervised learning',
            content: (
                <>
                    <p>Regression(Linear,Multilinear)</p>
                    <p>R square,Adjusted RSquare</p>
                    <p>Classification</p>
                    <p>KNN</p>
                    <p>Clustering (k MEANS, HIERARCHIAL, DBSCAN)</p>
                    <p>SVM</p>
                    <p>Logistics Regression</p>
                    <p>Random Forest</p>
                </>
            ),
        },
        {
            id: 'collapse8',
            title: 'Deep Learning, Neural Networks',
            content: (
                <>
                    <p>ANN</p>
                    <p>Activation Function (Relu, Leaky, Relu, PReluTanh, Sigmoid, Softmax)</p>
                    <p>Loss Function like Cross Entropy,MSE</p>
                    <p>Optimizers i.e GD,SGD,SGD with momentum,Adam,Adagrad etc..</p>
                    <p>Demo on creating simple architecture</p>
                </>
            ),
        },
        {
            id: 'collapse9',
            title: 'Natural Language Processing',
            content: (
                <>
                    <p>RNN intro</p>
                    <p>Word Embedding</p>
                    <p>Data Preprocessing</p>
                    <p>LSTM</p>
                    <p>GRU</p>
                    <p>BERT</p>
                </>
            ),
        },
        {
            id: 'collapse10',
            title: 'Image detection and Recognition using Computer vision Library',
            content: (
                <>
                    <p>Image Classification models</p>
                    <p>Resnet</p>
                    <p>inception</p>
                    <p>Object Detection</p>
                    <p>SSD,Yolo</p>
                    <p>image Segmentation</p>
                </>
            ),
        },
        {
            id: 'collapse11',
            title: 'Introduction to SQL',
            content: (
                <>
                    <p>Data Definition Language</p>
                    <p>Data Manipulation Language</p>
                    <p>Data Query Language</p>
                    <p>Joins</p>
                    <p>Subquery</p>
                    <p>Function and procedures</p>
                </>
            ),
        },
        {
            id: 'collapse12',
            title: 'Health and Safety',
            content: (
                <>
                    <p>Health and Safety Hazards</p>
                    <p>Accident prevention at workplace</p>
                    <p>Personal Hygiene</p>
                    <p>Electrical Equipment Hazards</p>
                    <p>CPR</p>
                </>
            ),
        },
        {
            id: 'collapse13',
            title: 'Manage a Team',
            content: (
                <>
                    <p>Team building</p>
                    <p>Team performance</p>
                    <p>Feedbacks for team</p>
                </>
            ),
        },
    ];

    // Data for Course Highlights
    const courseHighlights = [
        { img: '../assets/front/img/Course-uration.png', hoverImg: '../assets/front/img/whiteCourse-uration.png', text: 'Course Duration : 500 hrs' },
        { img: '../assets/front/img/80-hrs-of-Assignment-&-projects.png', hoverImg: '../assets/front/img/white80-hrs-of-Assignment-&-projects.png', text: '100 hrs of Assignment & Projects' },
        { img: '../assets/front/img/100-Case-studies.png', hoverImg: '../assets/front/img/white100-Case-studies.png', text: '100+ Case Studies & Real World Projects' },
        { img: '../assets/front/img/IndustryProfessionalgray.png', hoverImg: '../assets/front/img/IndustryProfessionalwhite.png', text: 'Industry Professional & Academia faculty' },
        { img: '../assets/front/img/dataangray100-Case-studies.png', hoverImg: '../assets/front/img/dataanwhite100-Case-studies.png', text: 'Top Data Analytics Tools Covered' },
        { img: '../assets/front/img/Access-to-e-contnent.png', hoverImg: '../assets/front/img/whiteAccess-to-e-contnent.png', text: 'Access to E-Content' },
        { img: '../assets/front/img/24X7-Support-&-LMS.png', hoverImg: '../assets/front/img/white-Support-&-LMS.png', text: '24x7 Support & LMS Access' },
        { img: '../assets/front/img/conversation.png', hoverImg: '../assets/front/img/whiteconversation.png', text: 'Active Q/A Forum' },
        { img: '../assets/front/img/gray-Trained-form-Google-Certified-partner.png', hoverImg: '../assets/front/img/white-Trained-form-Google-Certified-partner.png', text: 'Globally Recognized Certification' },
        { img: '../assets/front/img/AssuredPlacements_gray.png', hoverImg: '../assets/front/img/AssuredPlacements_white.png', text: 'Guaranteed Placement*' },
    ];

    // Data for Career Path
    const careerPaths = [
        { img: '/assets/front/img/MIS-ananger.png', title: 'Data Engineer' },
        { img: '../assets/front/img/DataAnalystPath.jpg', title: 'Data Analyst' },
        { img: '../assets/front/img/DataScientistpath.jpg', title: 'Data Scientist' },
        { img: '../assets/front/img/ManagerDataAnalytics.jpg', title: 'Data and Analytics Manager' },
    ];

    // Data for Why newjobs.ai
    const whyNewjobs = [
        { img: '/assets/front/img/NSQF-Vector-new.png', text: 'NSQF (National Skill Qualification Framework) aligned program' },
        { img: '/assets/front/img/Blended-model-of-tranining.png', text: 'Blended model of training delivery – Virtual Master Class with face-to-face training' },
        { img: '/assets/front/img/E-Learning-content.png', text: 'E-Learning content with 24X7 access' },
        { img: '/assets/front/img/Internship-emvedded.png', text: 'Internship embedded with Master & Advance Program' },
        { img: '/assets/front/img/LivePRojectswithhelpof-new.png', text: 'Live Projects with the help of specially developed stimulators' },
        { img: '/assets/front/img/Assured-Placements-new.png', text: 'Assured Placements' },
        { img: '/assets/front/img/Get -rained-from-the master.png', text: 'Get trained from the Master Trainers with extensive experience of industry' },
        { img: '/assets/front/img/Master-Certification-programme.png', text: 'Free Tools (Worth INR 80,000) with Master Certification program' },
    ];

    // Data for other programs
    const otherPrograms = [
        {
            img: 'assets/front/img/Businessanalytic-other-Program.jpg',
            title: 'Advanced Certification in Data Analytics (240HRS)',
            description: [
                'Introduction to Analytics Domain',
                'Basics of Statistics',
                'Data Summarization and Data Exploration',
                'Data Distribution and Testing',
                'Starting with R Environment, Data Import and Export, Manipulations & Looping',
                'Using dplyr package and Pipe (%>%) operator',
                'Data Analysis: Univariate and Bivariate',
                'Statistics in R, Sampling Distribution, Central Limit Theorem and Confidence Intervals',
                'Data Pre-Processing: Clean & Transform the Data',
                'Machine Learning',
            ],
        },
        {
            img: 'assets/front/img/ProficiencyCertificationin.jpg',
            title: 'Proficiency Certification in \'R\' (80HRS)',
            description: [
                'Understanding different windows of R Studio',
                'Basics of R Programming and some important rules for coding in R',
                'Installing predefined packages',
                'Entering inputs and R objects (Vector, Matrix, Data frames and Factors)',
                'R Datatypes',
                'Loading data into R - Data input, Importing data from Excel, SPSS, Web etc.',
                'Subsetting dataset',
                'Date and Time in R',
                'Loops and Conditional statements',
                'Functions: Defining functions',
                'Apply family of functions and Anonymous functions',
                'Using dplyr Package',
            ],
        },
        {
            img: 'assets/front/img/thpp(1).jpg',
            title: 'Proficiency Certification in Python (80hrs)',
            description: [
                'Introduction to Python Programming Language and its basic features',
                'Learn about different distributions,interpreters of Python',
                'What are Jupyter notebooks and how to install them',
                'Knowledge of working on Jupyter notebooks',
                'Create strings and use different string methods',
                'List datatypes, operations and basic properties',
                'How to create list iterations and comprehensions',
                'How to create dictionaries and manipulate them',
                'Review the different simple statements in Python such as assignment, pass, break, continue and their usage',
                'Review the structure of Python compound statements such as the if ,elif, else if, while and for statement',
                'How to create and define a function, the syntax and arguments of a function',
                'Understanding different File Objects, their modes and attributes and their operations',
                'Work with OS and SYS module for various file operations',
                'Create classes and instance attributes in Python',
                'Create generators and use generators methods',
                'Create and use iterators and understand difference between iterables and generators',
                'Use functions like Ufuncs, Aggregates,Broadcasting to perform operations on data',
            ],
        },
    ];

    // Data for academies (footer)
    const academies = [
        {
            name: 'Safdarjung Enclave',
            address: 'AB-6, First Floor, Safdarjung Enclave, New Delhi -110029',
            bgColor: '#005387',
            borderColor: '#005387',
        },
        {
            name: 'Lucknow',
            address: 'C-1759, 2nd Floor, above Bank of India, Sect C, Sector 18, Indira Nagar, Lucknow, Uttar Pradesh 226016 +91-522-4108930',
            bgColor: '#9e0c0c',
            borderColor: '#9e0c0c',
        },
        {
            name: 'Kamla Nagar Centre',
            address: 'A-11, Second Floor, Main GT Rd, Above Sardar Di Hatti, Kamla Nagar, New Delhi, Delhi 110007, +91-11-42481242',
            bgColor: '#03ac13',
            borderColor: '#03ac13',
        },
        {
            name: 'Jaipur',
            address: 'Near Torawati School, Amai Road, Kothputli, District Jaipur (Rural), Rajasthan-303108',
            bgColor: '#03ac13',
            borderColor: '#03ac13',
        },
        {
            name: 'Jodhpur',
            address: 'Jassi Tower Plot No.3, Kh No.22, Village Nandri, On Main Banar Road, District Jodhpur Rajasthan - 342015',
            bgColor: '#005387',
            borderColor: '#005387',
        },
        {
            name: 'Sirohi',
            address: 'Ajmer Tower Abu Road, Akra Bhatta Mount Abu Road, Near BS Petrol Pump Opp Housing Board Colony, District Sirohi, Rajasthan - 307026',
            bgColor: '#9e0c0c',
            borderColor: '#9e0c0c',
        },
        {
            name: 'Barmer',
            address: 'Jivraj Mali Ward No. 3, Behind Agrawal Colony, Balotra, District-Barmer, Rajasthan - 344022',
            bgColor: '#9e0c0c',
            borderColor: '#9e0c0c',
        },
        {
            name: 'Telangana',
            address: '15-167/20/A, Post Office Achampet, District Nagarkurnool Telangana - 509375',
            bgColor: '#03ac13',
            borderColor: '#03ac13',
        },
        {
            name: 'Dehradun',
            address: 'Khasra No. 957, Central Hope Town, Meelu Complex, Chakrata Road, Selaqui, Vikasnagar, Dehradun - 248197',
            bgColor: '#005387',
            borderColor: '#005387',
        },
        {
            name: 'Haridwar',
            address: 'Khasra No.49, Raipur Tehsil Bhagwanpur, Roorkee, District Haridwar, Uttrakhand - 247661',
            bgColor: '#005387',
            borderColor: '#005387',
        },
        {
            name: 'Uttarkashi',
            address: 'Gangotri Highway, Near Petrol Pump, Matli, District Uttarkashi, Uttarakhand',
            bgColor: '#9e0c0c',
            borderColor: '#9e0c0c',
        },
        {
            name: 'Karawal Nagar',
            address: '141A, Kh. No. 37 & 40, Chandu Nagar, Main Karawal Nagar Road, Delhi, Pin Code 110094.+91 8882196889',
            bgColor: '#03ac13',
            borderColor: '#03ac13',
        },
    ];

    return (
        <div className="master-ds-ai-container">
            {/* Banner Section */}
            <section className="banner-sub">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ml-auto p-0">
                            <div className="subpagetext">
                                <div className="item">
                                    <div className="bannerImgsub" style={{ backgroundImage: 'url(../assets/front/img/Data-Science-Banner-gary.png)' }}></div>
                                </div>
                                <div className="item">
                                    <div className="bannerImgsub" style={{ backgroundImage: 'url(../assets/front/img/Data-Science-Banner-gary.png)' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 banner-content-sub custom_inner_banner">
                            <div className="subpageimg">
                                <div className="item">
                                    <div>
                                        <h1>Master Certification <br /> in Data Science & AI</h1>
                                        <h6><span className="red">Disruptive Technologies are changing the <br /> landscape of employability</span></h6>
                                        <br />
                                        <button className="btn pika-btn w-50 custome toprightHeader mobilecolorfff" onClick={() => console.log('Enquire Now clicked')}>Enquire Now</button>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <h1>Advance Certification <br /> In Data Analytics</h1>
                                        <h6><span className="red">Disruptive Technologies are changing the <br /> landscape of employability</span></h6>
                                        <br />
                                        <button className="btn pika-btn w-50 custome" onClick={() => console.log('Enquire Now clicked')}>Enquire Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="kids-learn course-kids-learn" id="container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 learn-right">
                            <div className="background-icons"></div>
                            <div className="row home-showLarge">
                                <div className="col-12 col-md-3 pt-5 course-to-box">
                                    <div className="learn-icons badge">
                                        <img src="../assets/front/img/badge1.png" className="img-fluid" alt="clipboard" />
                                    </div>
                                    <div className="learn-content">
                                        <h6>100% placement</h6>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 pt-5 pb-3 course-to-box">
                                    <div className="learn-icons live">
                                        <img src="../assets/front/img/live1.png" className="img-fluid" alt="clipboard" />
                                    </div>
                                    <div className="learn-content">
                                        <h6>Live sessions</h6>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 pt-5 pb-3 course-to-box">
                                    <div className="learn-icons checklist">
                                        <img src="../assets/front/img/checklist1.png" className="img-fluid" alt="clipboard" />
                                    </div>
                                    <div className="learn-content">
                                        <h6>NSQF Aligned Courses</h6>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 pt-5 pb-3 course-to-box">
                                    <div className="learn-icons industry">
                                        <img src="../assets/front/img/industry1.png" className="img-fluid" alt="clipboard" />
                                    </div>
                                    <div className="learn-content">
                                        <h6>Hands-on-practical exposure</h6>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile device carousel (static for now) */}
                            <div className="owl-carousel smallscreen-home">
                                <div className="item course-to-box">
                                    <div className="learn-icons badge">
                                        <img src="../assets/front/img/badge1.png" className="img-fluid" alt="clipboard" />
                                    </div>
                                    <div className="learn-content">
                                        <h6>100% placement</h6>
                                    </div>
                                </div>
                                <div className="item course-to-box">
                                    <div className="learn-icons live">
                                        <img src="../assets/front/img/live1.png" className="img-fluid" alt="clipboard" />
                                    </div>
                                    <div className="learn-content">
                                        <h6>Live sessions</h6>
                                    </div>
                                </div>
                                <div className="item course-to-box">
                                    <div className="learn-icons checklist">
                                        <img src="../assets/front/img/checklist1.png" className="img-fluid" alt="clipboard" />
                                    </div>
                                    <div className="learn-content">
                                        <h6>NSQF Aligned Courses</h6>
                                    </div>
                                </div>
                                <div className="item course-to-box">
                                    <div className="learn-icons industry">
                                        <img src="../assets/front/img/industry1.png" className="img-fluid" alt="clipboard" />
                                    </div>
                                    <div className="learn-content">
                                        <h6>Hands-on-practical exposure</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Course Section */}
            <section className="glimpse kindsBgImg courseAbout">
                <ul className="roww" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <li className="colmd-5">
                        <div className="Why-Image-left digimark" style={{ backgroundImage: 'url(\'/assets/front/img/Data-science-home-page-new.png\')' }}></div>
                    </li>
                    <li className="colmd-7">
                        <h2 className="customHeading left">Master Certification in Data Science & AI</h2>
                        <p>Data Science is not restricted to IT industry. It is equally important for every industry as companies are relying increasingly everyday on data-driven decisions. This is revolutionizing the whole process of how decisions are taken in every sector, and that is leading to ever-increasing demand of skilled workforce in Data Science. Because of this, the popularity Master Certification in Data Science and Artificial Intelligence is increasing.</p>
                        <p>79 % of CEOs are concerned about employees’ lack of essential skills and identify the issue as a threat to growth. 60 % of employees believe their current skill set will be outdated in the next three to five years. 46 % of CEOs cite significant retraining and upskilling as the top strategy to close a potential skills gap in their organization. According to Analytics Insight, there will be 137630 jobs for Data Science in India by 2025. Median salary of a data scientist in India is 9.8 lakh per annum. A Masters in AI and Data Science can help a student get a job.</p>
                    </li>
                </ul>
            </section>

            {/* Career Awaits Section */}
            <section className="container-fluid text-center mt-4 mb-2" style={{ background: '#005387', color: '#fff' }}>
                <div className="container pt-4 pb-4">
                    <h2 className="pt-4 pb-4">A Bright Career Awaits you <br />in Data Science & AI</h2>
                    <p className="pb-4">There is a demand for experts in data science & AI in information technology and services companies. One can work as a data scientist, data architect or data analyst after pursuing Master Certification in Data Science and Artificial Intelligence. The jobs in the field requires one to capture and process the data that provide solutions to a wide range of industrial, commercial, and professional activities. Data analyst and AI professionals have to collaborate with engineers, the banking system, doctors, biologists, HR professionals, IT systems, statistics, marketing, managers, economists, and even startups.</p>
                </div>
            </section>

            {/* Course Curriculum Section */}
            <section className="pika-lists pt-2 pb-2 mt-2 duel duelcourseCerti">
                <div className="container-fluid">
                    <hr />
                    <div className="heading pt-5">
                        <h2 className="text-center customHeading">Course Curriculum</h2>
                    </div>
                    <div className="container">
                        <div className="accordion" id="myAccordion">
                            <div className="row justify-content-center">
                                {/* First Column of Accordion */}
                                <div className="col-md-4">
                                    {curriculumData.slice(0, 5).map((item) => (
                                        <div className="accordion-item" key={item.id}>
                                            <h2 className="accordion-header" id={`heading${item.id}`}>
                                                <button
                                                    type="button"
                                                    className={`accordion-button ${openAccordion === item.id ? '' : 'collapsed'}`}
                                                    onClick={() => toggleAccordion(item.id)}
                                                >
                                                    {item.title}
                                                </button>
                                            </h2>
                                            <div id={item.id} className={`accordion-collapse collapse ${openAccordion === item.id ? 'show' : ''}`}>
                                                <div className="card-body">
                                                    {item.content}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Second Column of Accordion */}
                                <div className="col-md-4">
                                    {curriculumData.slice(5, 10).map((item) => (
                                        <div className="accordion-item" key={item.id}>
                                            <h2 className="accordion-header" id={`heading${item.id}`}>
                                                <button
                                                    type="button"
                                                    className={`accordion-button ${openAccordion === item.id ? '' : 'collapsed'}`}
                                                    onClick={() => toggleAccordion(item.id)}
                                                >
                                                    {item.title}
                                                </button>
                                            </h2>
                                            <div id={item.id} className={`accordion-collapse collapse ${openAccordion === item.id ? 'show' : ''}`}>
                                                <div className="card-body">
                                                    {item.content}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Third Column of Accordion */}
                                <div className="col-md-4">
                                    {curriculumData.slice(10, 13).map((item) => (
                                        <div className="accordion-item" key={item.id}>
                                            <h2 className="accordion-header" id={`heading${item.id}`}>
                                                <button
                                                    type="button"
                                                    className={`accordion-button ${openAccordion === item.id ? '' : 'collapsed'}`}
                                                    onClick={() => toggleAccordion(item.id)}
                                                >
                                                    {item.title}
                                                </button>
                                            </h2>
                                            <div id={item.id} className={`accordion-collapse collapse ${openAccordion === item.id ? 'show' : ''}`}>
                                                <div className="card-body">
                                                    {item.content}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Highlights Section */}
            <section className="pt-4 pb-5 courseHighwrapSec">
                <div className="container">
                    <br /><br />
                    <h2 className="text-center customHeading">Course Highlights</h2> <br /><br />
                    <div className="row home-showLarge">
                        <div className="col-12 customPadding">
                            <ul className="courseHigh row">
                                {courseHighlights.map((item, index) => (
                                    <li className="col-sm-3" key={index}>
                                        <div className="Coursebox cardd">
                                            <div className="CourseboxImg" style={{ backgroundImage: `url(${item.img})` }}></div>
                                            <div className="CourseboxImgHover img-top" style={{ backgroundImage: `url(${item.hoverImg})` }}></div>
                                            {item.text}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Mobile device carousel (static for now) */}
                    <ul className="owl-carousel smallscreen-home courseHigh">
                        {courseHighlights.map((item, index) => (
                            <li className="item" key={index}>
                                <div className="Coursebox">
                                    <div className="CourseboxImg" style={{ backgroundImage: `url(${item.img})` }}></div>
                                    {item.text}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Career Path Section */}
            <section className="pb-3 pt-4 courseHighwrap careerPathwrap">
                <div className="container-fluid">
                    <h2 className="text-center customHeading pb-5 pt-5">Career Path</h2>
                    <div className="row justify-content-center">
                        <div className="col-10 customPadding">
                            <ul className="courseHigh owl-carousel careerPathSlider">
                                {careerPaths.map((path, index) => (
                                    <li className="item" style={{ textAlign: 'center' }} key={index}>
                                        <div className="careersBox">
                                            <div className="careersBoximg" style={{ backgroundImage: `url(${path.img})` }}></div>
                                            <h6>{path.title}</h6>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why newjobs.ai Section */}
            <section className="pika-lists pika-listsmob">
                <div className="container-fluid">
                    <h2 className="text-center customHeading">Why newjobs.ai</h2> <br /><br />
                    <div className="row home-showLarge">
                        <div className="col-12 p-0 customPadding">
                            <ul className="WhyftechUl">
                                {whyNewjobs.map((item, index) => (
                                    <li key={index}>
                                        <img src={item.img} className="img-fluid" alt="coaching" />
                                        <p>{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Mobile device carousel (static for now) */}
                    <ul className="owl-carousel smallscreen-home WhyftechUl">
                        {whyNewjobs.map((item, index) => (
                            <li className="item" key={index}>
                                <img src={item.img} className="img-fluid" alt="coaching" />
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Other Programs Section */}
            <section className="programs">
                <div className="container">
                    <div className="heading">
                        <h2>Other Programs</h2>
                    </div>
                </div>
                <div className="container">
                    <ul className="owl-carousel otherprogram2">
                        {otherPrograms.map((program, index) => (
                            <li className="item" key={index}>
                                <div className="img__wrap">
                                    <img style={{ height: '294px' }} className="img__img" src={program.img} alt={program.title} />
                                    <div className="img__description_layer">
                                        <p className="img__description">
                                            <h6>{program.title}</h6><br />
                                            <ul>
                                                {program.description.map((desc, idx) => (
                                                    <li key={idx}>{desc}</li>
                                                ))}
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="bottomHeading">
                                    <h6 style={{ color: '#000' }} className="card-title">{program.title}</h6>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="contactus" style={{ backgroundImage: 'url(assets/front/img/blog.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-12 col-lg-6 col-xl-6 col-12">
                            <div className="heading">
                                <h2>We are happy to help you with more insights about the program</h2>
                                <p>Please fill your personal details to assist our professional team of experts to connect with you to support and answer your queries</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-12 col-lg-6 col-xl-6 col-12">
                            <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="controls">
                                    <div className="contact_form">
                                        <div className="form-group">
                                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Please Enter Your Name *" required="required" data-error="Name is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group">
                                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Please Enter Your Email *" required="required" data-error="Valid email is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group">
                                            <input id="form_city" type="text" name="city" className="form-control" placeholder="Please Enter Your city *" required="required" data-error="city is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group">
                                            <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your Mobile Number" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-sm-6 col-sm-6 col-12 col-md-6 col-xl-6 col-lg-6">
                                                <button type="submit" className="btn btn-send mob_full" style={{ color: '#fff' }}>Send message</button>
                                            </div>
                                            <div className="form-group col-sm-6 col-sm-6 col-12 col-md-6 col-xl-6 col-lg-6">
                                                <a href="../assets/front/pdf/f-tec-brochure.PDF" download style={{ color: '#fff' }} className="btn btn-send mob_full">Download brochure</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="know knowNew" style={{ background: '#005387' }}>
                <div className="container">&nbsp;
                    <div className="row">
                        <div className="col-md-7 align-self-center">
                            <h1>Testimonials</h1>
                            <div className="achievers-nav1">
                                <div className="item">
                                    <p>F-TEC was definitely a paradise for students who aspire to achieve par excellence in the field of &lsquo;Marketing&rsquo;. With an astute attention to detail, backed up by current market trends, Marketing and various techniques have been made interesting by the faculty of F-TEC <span style={{ fontSize: '13px !important', paddingLeft: '13px', fontWeight: 'bold' }}> - Mukesh</span></p>
                                </div>
                                <div className="item">
                                    <p>The quality of education imparted by the F-TEC faculty is exhaustive and helpful for a career oriented student. The regular learning with live examples approach enabled me to take a step forward, motivated me to work hard and get the latest skills and helped getting placed with an exceptional offer <span style={{ fontSize: '13px !important', paddingLeft: '13px', fontWeight: 'bold' }}> - Ankit</span></p>
                                </div>
                                <div className="item">
                                    <p>F-TEC is the symbol of Enhancement and Excellence as it gives opportunities to youth and helps them to get a better career. F-TEC bridged the gap between Institution and the corporate world by providing a helping hand <span style={{ fontSize: '13px !important', paddingLeft: '13px', fontWeight: 'bold' }}> - Keerti</span></p>
                                </div>
                                <div className="item">
                                    <p>I have completed Master certification in Digital Marketing & Brand Management from newJobs.ai . Here I get a good environment in which I will be able to groom myself. Our master trainer Mr. Kunal sir teaches us very well. With the help of my teacher, I will be able to explore various modules of digital marketing. Here i got on job live training project which help me to get practical knowledge. I also get an internship. And in the end, i would suggest this is the best place for learning digital marketing.<br />Thank you<span style={{ fontSize: '13px !important', paddingLeft: '13px', fontWeight: 'bold' }}> - Kanika</span></p>
                                </div>
                                <div className="item">
                                    <p>I am Shubham Negi. I had completed the Master Certificate course in Digital Marketing& Brand Management from newJobs.ai Safdarjung Enclave. I am pursuing graduation from a school of open learning at Delhi University. My experience regarding this course was good because I explore and learned so many new things in this field. I would like to do an internship in this field. It helps me a lot to boom my existing knowledge. I am a very disciplined person. I completed all assigned work on time. In my leisure time, I explore so many new things like social media, tech news, etc. I also like to do chit-chat with my friends.<span style={{ fontSize: '13px !important', paddingLeft: '13px', fontWeight: 'bold' }}> - Shubham Negi</span></p>
                                </div>
                                <div className="item">
                                    <p>Thank you for giving me this wonderful opportunity to introduce myself to you. I am Dipin Bhardwaj, a native of Delhi. I have completed a Master’s Certification in Digital Marketing and Brand Management course from newJobs.ai Safdarjung Enclave. Simultaneously, I am pursuing graduation from Delhi University. My long-term goal is to gain work exposure in Digital Marketing and secure a senior position in the workplace. I am self-motivated and believe in upskilling myself by learning new things. My key strengths are my analytical approach, effective communication and representation skills. If I get a chance, I would like to intern with this company as it may boost my existing knowledge in this field.<span style={{ fontSize: '13px !important', paddingLeft: '13px', fontWeight: 'bold' }}> - Dipin Bhardwaj</span></p>
                                </div>
                                <div className="item">
                                    <p>I did Master Certification in Digital Marketing from newJobs.ai. I have been relatively new to digital marketing since I started and what amazes me is the diversity of the course itself and the various career prospects it gave me. Newjobs.ai has given me the opportunity to shape my career as a content writer. As a student, I have been guided from the course to have an internship and job.<span style={{ fontSize: '13px !important', paddingLeft: '13px', fontWeight: 'bold' }}> - Riya Dey</span></p>
                                </div>
                                <div className="item">
                                    <p>I did my Master’s Certification in Digital Marketing from newJobs.ai. I have always wanted to be associated with social media as it was not new to me but I was unfamiliar with the insights and how the platform works.<br />By joining newJobs.ai, I gained the insights and got the opportunity as an Intern and even got a placement.<span style={{ fontSize: '13px !important', paddingLeft: '13px', fontWeight: 'bold' }}> - Yashika Bhagat</span></p>
                                </div>
                            </div>
                            <ul className="banner-btn mt-4">
                                <li className="li-btn-white">
                                    <button type="button"> {/* Replaced div with button for accessibility */}
                                        {/* <i className="far fa-calendar-alt"></i> Book A free class */}
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <div className="achievers-for1">
                                <div className="item"><img alt="know1" className="img-fluid" draggable="false" src="../assets/front/img/whatsapp-image-2020-01-20-at-3.32.11-pm-200x267.jpg" /></div>
                                <div className="item"><img alt="know1" className="img-fluid" draggable="false" src="../assets/front/img/whatsapp-image-2020-01-20-at-3.37.05-pm-200x234.jpg" /></div>
                                <div className="item"><img alt="know1" className="img-fluid" draggable="false" src="../assets/front/img/whatsapp-image-2020-01-20-at-3.21.49-pm-200x345.jpg" /></div>
                                <div className="item"><img alt="know1" className="img-fluid" draggable="false" src="../assets/front/img/Kanika.jpeg" /></div>
                                <div className="item"><img alt="know1" className="img-fluid" draggable="false" src="../assets/front/img/Shubham-Negi.jpeg" /></div>
                                <div className="item"><img alt="know1" className="img-fluid" draggable="false" src="../assets/front/img/Dipin-Bhardwaj.jpeg" /></div>
                                <div className="item"><img alt="know1" className="img-fluid" draggable="false" src="../assets/front/img/Riya Dey.png" /></div>
                                <div className="item"><img alt="know1" className="img-fluid" draggable="false" src="../assets/front/img/Yashika Bhagat.png" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="yellow-bac"><img alt="" className="img-fluid" draggable="false" src="../assets/front/img/know-22.png" /></div>
            </section>

            {/* Footer Section - simplified for component */}
            <footer>
                <div className="container">
                    <h2 className="text-center customHeading OurAcademies">Training Academy</h2>
                    <div className="row justify-content-center pb-5 border-bottom">
                        {academies.map((academy, index) => (
                            <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 col-12 border-right" key={index}>
                                <div className="card-cust btn pika-btn w-100" style={{ background: academy.bgColor, borderColor: academy.borderColor }}>
                                    <h6>{academy.name}</h6>
                                    <p>{academy.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row justify-content-center pt-5">
                        <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 col-12">
                            <h6>Initiative By</h6>
                            <a className="navbar-brand logo" href="https://www.f-tec.net.in/" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/front/img/footer-GOC.png" className="img-fluid customFooterLogo" alt="F-TEC logo" />
                            </a>
                        </div>
                        <div className="col-md-5 col-xl-5 col-lg-5 col-sm-5 col-12">
                            <div>
                                <h6>Courses</h6>
                                <ul className="fooetrLinks">
                                    <li><a href="/master-certification-in-digital-marketing.html">Master Certification in Digital Marketing &amp; Brand Management</a></li>
                                    <li><a href="/advance-certification-in-data-analytics.html">Advance Certification in Data Analytics</a></li>
                                    <li><a href="/master-certification-in-data-science-&amp;-ai.html">Master Certification in Data Science &amp; AI</a></li>
                                    <li><a href="/advance-certification-in-digital-marketing.html">Advance Certification in Digital Marketing</a></li>
                                    <li><a href="/advance-certification-in-data-science-&amp;-ai.html">Advance Certification in Data Science & AI</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-12">
                            <h6>Important Links</h6>
                            <ul className="fooetrLinks">
                                <li><a href="/about-us.html">About Us</a></li>
                                <li><a href="/contact.html">Contact</a></li>
                                <li><a href="/privacy-policy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="col-md-12 text-center py-4 copyright-section">
                <p>&copy; 2021 | All Right Reserved by New EdTech Skills Pvt Ltd</p>
            </div>

            {/* Social Icons Bar - simplified for component */}
            <div className="icon-bar">
                <ul className="socialIconsFooter">
                    <li>
                        <a href="https://www.facebook.com/academyforupskilling" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                            <span className="sr-only">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/newjobs-ai/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/newjobs.ai/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                            <span className="sr-only">Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/AiNewjobs" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                            <span className="sr-only">Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCZA5DaJDDVOtQQlyMsQoEBw/featured" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube" aria-hidden="true"></i>
                            <span className="sr-only">YouTube</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MasterDSandAI;
