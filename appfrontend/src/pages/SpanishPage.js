import React, { useEffect, useState } from 'react';
import {buildPath} from '../App.js';
import axios from 'axios';
import LogoContainer from '../components/LogoContainer.js';
import LanguageIcon from '@mui/icons-material/Language';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

export default function SpanishPage(props){
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [submit, setSubmit] = useState(0);

    useEffect(() => {
        if(submit == 1){
            if(email == "")
                setMessage("You Must Enter Your Email");
            else if(body == "")
                setMessage("Email Body Cannot Be Empty");
            else{
                setMessage("");
                axios
                    .post(buildPath('api/emailForm'), {
                        from: email,
                        subject: subject,
                        text: body
                    })
                    .then((response)=>{
                        setMessage("Email Sent");
                        console.log(response["data"]);
                    });
            }
        }
        setSubmit(0);
    }, [submit]);


    return(
        <div>
            <div className='navbarContainer'>
                <div className='languageContainer'>
                    <LanguageIcon className='languageIcon' fontSize='large' sx={{ color: "whitesmoke" }}/>
                    <div className='languageToggleContainer'>
                        <div className='languageToggleLabelEn'>En</div>
                        <a href='/'>
                            <ToggleOnIcon className="toggleIcon" fontSize='large' sx={{ color: "whitesmoke" }}/> 
                        </a>
                        <div className='languageToggleLabelSp'>Sp</div>
                    </div>
                </div>
                <div className='navlinksContainer'>
                    <a href='#aboutMe'><div className='navLink'>About Me</div></a>
                    <a href='#testimonials'><div className='navLink'>Testimonials</div></a>
                    <a href='#contactMe'><div className='navLink'>Contact Me</div></a>
                </div>
            </div>
            <div className='mainContainer'>
                <LogoContainer />
                <div className='aboutMeContainer'>
                    <div className='sectionTitle' id='aboutMe'>About Me</div>
                    <div className='introduction'>
                        <p>
                            Throughout my 30 years of teaching, my heart has always been drawn to the needs of
                            students who struggle with learning. I began teaching as a 4th grade classroom teacher
                            and when I saw the challenges faced by some of my students, I followed my passion for
                            helping struggling students and added certifications in Exceptional Student Education
                            (ESE) and Reading to my portfolio. Eventually, I became a Resource Teacher, providing
                            interventions to struggling K-5 students. During my years in this role, I was very
                            successful at closing the learning gaps of these children - continually researching and
                            implementing the current best practices allowed me meet the highly individualized
                            needs of these learners.
                        </p>
                        <p>
                            Now, in my role as a private tutor, I take great joy in using my knowledge and
                            experience to provide students the individualized, highly-structured, and intensive
                            support that is so effective at developing maximum potential. My years in the public
                            school system also allow me to help students and their families navigate the educational
                            process.
                        </p>
                    </div>
                    <div className='aboutMeContent'>
                        <div className='headshot'></div>
                        <div className='qualifications'>
                            <div className='certifications'>
                                <div className='subheading'>Certifications</div>
                                <ul>
                                    <li style={{marginBottom: "20px"}}>Orton-Gillingham Certified Classroom Educator Level</li>
                                    <li>Exceptional Education</li>
                                    <li className='specification'>State of Florida (K-12)</li>
                                    <li>Reading Endorsement</li>
                                    <li className='specification'>State of Florida (K-12)</li>
                                    <li>English for Speakers of Other Languages (ESOL)</li>
                                    <li className='specification'>State of Florida (K-12)</li>
                                    <li>Elementary Education</li>
                                    <li className='specification'>State of Florida (K-6)</li>
                                </ul>
                            </div>
                            <div className='experience'>
                                <div className='subheading'>Experience</div>
                                <ul>
                                    <li>Private Tutor/ Exceptional Education Consultant</li>
                                    <li className='specification'>Learning Partner, LLC, Orlando, FL (2022 - Present)</li>
                                    <li>Resource/Exceptional Education Teacher</li>
                                    <li className='specification'>Timber Lakes Elementary School, Orlando, FL (2009 - 2022)</li>
                                    <li>Educational Paraprofessional, Severely Handicapped</li>
                                    <li className='specification'>Stone Lakes Elementary School, Orlando, FL (2009 - 2011)</li>
                                    <li>Bilingual Teacher - Grade 4</li>
                                    <li className='specification'>Alum Rock Union School District, San Jose, CA (1989 - 1991)</li>
                                    <li>Peace Corps Volunteer</li>
                                    <li className='specification' style={{marginBottom: "0px"}}>Peace Corps, Honduras (1985-1987)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='testimonialsContainer'>
                    <div className='sectionTitle' id='testimonials'>Testimonials</div>
                    <div className='testimonials'>
                        <ul>
                            <li>“We have noticed a huge improvement. Thank you for helping our son when no one else could!”</li>
                            <li className='testimonialAuthor'>- James M. <span style={{marginLeft: "10px"}}>Parent</span></li>
                            <li>“Thank you for always being so understanding and sweet, Jayla has started to like reading again”</li>
                            <li className='testimonialAuthor'>- Yaritza L. <span style={{marginLeft: "10px"}}>Grandmother</span></li>
                            <li>“Nonie Link is the best! Highly recommend her!”</li>
                            <li className='testimonialAuthor'>- Erica S. <span style={{marginLeft: "10px"}}>Parent</span></li>
                        </ul>
                    </div>
                </div>
                <div className='contactMeContainer'>
                    <div className='sectionTitle' id='contactMe'>Contact Me</div>
                    <div className='email'>Email Me At: LenoraWeber62@gmail.com</div>
                    <div className='orText'>or through the form below</div>
                    <div className='emailFormContainer'>
                        <div className='emailForm'>
                            <div className='emailMessage'>{message}</div>
                            <div>
                                <label className='emailLabel'>Your Email*</label>
                                <input className='emailInput' placeholder='Enter Your Email' type='email' 
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                            </div>
                            <div className='emailSection'>
                                <label className='emailLabel'>Subject</label>
                                <input className='emailInput' placeholder="Enter Your Email's Subject" type='text' 
                                    onChange={(e) => {setSubject(e.target.value)}}
                                />
                            </div>
                            <div className='emailSection'>
                                <label className='emailLabel'>Body*</label>
                                <textarea className='emailTextArea' placeholder='Enter The Body of Your Email' 
                                    onChange={(e) => {setBody(e.target.value)}}
                                />
                            </div>
                            <button className='sendEmail' onClick={() => {setSubmit(1)}}>Send Email</button>
                        </div>
                    </div>
                </div>
                <div className='footerContainer'>
                    <div className='disclaimer'>Disclaimer: My Services Do Not Guarantee Success</div>
                    <div className='copyright'>© 2023 Tutoring For Struggling Students, All Rights Reserved.</div>
                </div>
            </div>
        </div>
    );
}