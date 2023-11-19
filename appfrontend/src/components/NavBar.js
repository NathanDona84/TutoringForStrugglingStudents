import React, { useEffect, useState } from 'react';
import {buildPath} from '../App.js';
import axios from 'axios';
import LanguageIcon from '@mui/icons-material/Language';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

export default function NavBar(props){

    let anchorLink = "/";
    if(props.lang == 0)
        anchorLink = "/sp";
    return(
        <div className='navbarContainer'>
            <div className='languageContainer'>
                <LanguageIcon className='languageIcon' fontSize='large' sx={{ color: "whitesmoke" }}/>
                <div className='languageToggleContainer'>
                    <div className='languageToggleLabelEn'>En</div>
                    <a href={anchorLink}>
                        {props.lang == 0 ? <ToggleOffIcon className="toggleIcon" fontSize='large' sx={{ color: "whitesmoke" }}/> 
                            : <ToggleOnIcon className="toggleIcon" fontSize='large' sx={{ color: "whitesmoke" }}/>}
                    </a>
                    <div className='languageToggleLabelSp'>Sp</div>
                </div>
            </div>
            <div className='navlinksContainer'>
                <div className='navLink' onClick={() => {props.setPage(0)}}>About Me</div>
                <div className='navLink' onClick={() => {props.setPage(1)}}>Testimonials</div>
                <div className='navLink' onClick={() => {props.setPage(2)}}>Contact Me</div>
            </div>
        </div>
    );
}