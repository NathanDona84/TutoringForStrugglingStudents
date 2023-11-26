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
        if(submit === 1){
            if(email === "")
                setMessage("Debes ingresar tu correo electrónico.");
            else if(body === "")
                setMessage("El cuerpo del correo electrónico no puede estar vacío.");
            else{
                setMessage("");
                axios
                    .post(buildPath('api/emailForm'), {
                        from: email,
                        subject: subject,
                        text: body
                    })
                    .then((response)=>{
                        setMessage("Correo electrónico enviado.");
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
                    <a href='#aboutMe'><div className='navLink'>Acerca de mí</div></a>
                    <a href='#testimonials'><div className='navLink'>Testimonios</div></a>
                    <a href='#contactMe'><div className='navLink'>Contáctame</div></a>
                </div>
            </div>
            <div className='mainContainer'>
                <LogoContainer />
                <div className='aboutMeContainer'>
                    <div className='sectionTitle' id='aboutMe'>Acerca de mí</div>
                    <div className='introduction'>
                        <p>

                        A lo largo de mis 30 años de enseñanza, mi corazón siempre se ha sentido atraído por las necesidades de los estudiantes que tienen dificultades para aprender. Comencé a enseñar como maestra de 4o grado y cuando vi los desafíos que enfrentaban algunos de mis estudiantes, seguí mi pasión por ayudar a los estudiantes con dificultades y agregué certificaciones en Educación para Estudiantes Excepcionales (ESE) y Lectura a mi portafolio. Eventualmente, me convertí en Maestra de Recursos, proporcionando intervenciones a estudiantes con dificultades de K-5. Durante mis años en este rol, tuve mucho éxito cerrando las brechas de aprendizaje de estos niños: investigar e implementar continuamente las mejores prácticas actuales me permitió satisfacer las necesidades altamente individualizadas de estos alumnos.

                        </p>
                        <p>
                        Ahora, en mi rol como tutora privada, me da mucho gusto usar mi conocimiento y experiencia para brindar a los estudiantes el apoyo individualizado, altamente estructurado e intensivo que es tan efectivo para desarrollar su máximo potencial. Mis años en el sistema de escuelas públicas también me permiten ayudar a los estudiantes y sus familias a navegar el proceso educativo.
                        </p>
                    </div>
                    <div className='aboutMeContent'>
                        <div className='headshot'></div>
                        <div className='qualifications'>
                            <div className='certifications'>
                                <div className='subheading'>Certificaciones.</div>
                                <ul>
                                    <li style={{marginBottom: "20px"}}>Educador/a de Aula Certificado/a en el Método Orton-Gillingham, Nivel</li>
                                    <li>Educación Excepcional</li>
                                    <li className='specification'>Estado de Florida (K-12)</li>
                                    <li>Endoso de Lectura</li>
                                    <li className='specification'>Estado de Florida (K-12)</li>
                                    <li>Inglés para Hablantes de Otros Idiomas (ESOL).</li>
                                    <li className='specification'>Estado de Florida (K-12)</li>
                                    <li>Elementary Education</li>
                                    <li className='specification'>Estado de Florida (K-6)</li>
                                </ul>
                            </div>
                            <div className='experience'>
                                <div className='subheading'>Experiencia</div>
                                <ul>
                                    <li>Profesor Particular/Consultor de Educación Excepcional</li>
                                    <li className='specification'>Learning Partner, LLC, Orlando, FL (2022 - Presente)</li>
                                    <li>Resource/Exceptional Education Teacher</li>
                                    <li className='specification'>Timber Lakes Elementary School, Orlando, FL (2009 - 2022)</li>
                                    <li>Educational Paraprofessional, Severely Handicapped</li>
                                    <li className='specification'>Stone Lakes Elementary School, Orlando, FL (2009 - 2011)</li>
                                    <li>Bilingual Teacher - Grade 4</li>
                                    <li className='specification'>Alum Rock Union School District, San Jose, CA (1989 - 1991)</li>
                                    <li>Voluntaria del Cuerpo de Paz</li>
                                    <li className='specification' style={{marginBottom: "0px"}}>Cuerpo de Paz, Honduras (1985-1987)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='testimonialsContainer'>
                    <div className='sectionTitle' id='testimonials'>Testimonios</div>
                    <div className='testimonials'>
                        <ul>
                            <li>“Hemos notado una gran mejora. ¡Gracias por ayudar a nuestro hijo cuando nadie más podía!”</li>
                            <li className='testimonialAuthor'>- James M. <span style={{marginLeft: "10px"}}>Padre</span></li>
                            <li>“Gracias por siempre ser tan comprensiva y amable, Jayla ha comenzado a disfrutar la lectura nuevamente”</li>
                            <li className='testimonialAuthor'>- Yaritza L. <span style={{marginLeft: "10px"}}>Abuela</span></li>
                            <li>“¡Nonie Link es la mejor! ¡La recomiendo altamente!”</li>
                            <li className='testimonialAuthor'>- Erica S. <span style={{marginLeft: "10px"}}>Padre</span></li>
                        </ul>
                    </div>
                </div>
                <div className='contactMeContainer'>
                    <div className='sectionTitle' id='contactMe'>Contáctame</div>
                    <div className='email'>Envíame un correo electrónico a: LenoraWeber62@gmail.com</div>
                    <div className='orText'>o a través del formulario a continuación</div>
                    <div className='emailFormContainer'>
                        <div className='emailForm'>
                            <div className='emailMessage'>{message}</div>
                            <div>
                                <label className='emailLabel'>Tu correo electrónico*</label>
                                <input className='emailInput' placeholder='Ingresa tu correo electrónico' type='email' 
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                            </div>
                            <div className='emailSection'>
                                <label className='emailLabel'>Asunto</label>
                                <input className='emailInput' placeholder="Ingresa el asunto de tu correo electrónico" type='text' 
                                    onChange={(e) => {setSubject(e.target.value)}}
                                />
                            </div>
                            <div className='emailSection'>
                                <label className='emailLabel'>Cuerpo*</label>
                                <textarea className='emailTextArea' placeholder='Ingresa el cuerpo de tu correo electrónico' 
                                    onChange={(e) => {setBody(e.target.value)}}
                                />
                            </div>
                            <button className='sendEmail' onClick={() => {setSubmit(1)}}>Enviar correo electrónico</button>
                        </div>
                    </div>
                </div>
                <div className='footerContainer'>
                    <div className='disclaimer'>Descargo de responsabilidad: Mis servicios no garantizan el éxito</div>
                    <div className='copyright'>© 2023 Tutoría para Estudiantes con Dificultades, Todos los Derechos Reservados.</div>
                </div>
            </div>
        </div>
    );
}
