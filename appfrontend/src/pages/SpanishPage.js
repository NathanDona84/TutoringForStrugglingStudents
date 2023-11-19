import React, { useEffect, useState } from 'react';
import {buildPath} from '../App.js';
import axios from 'axios';
import NavBar from '../components/NavBar.js';
import LogoContainer from '../components/LogoContainer.js';

export default function SpanishPage(props){
    const [page, setPage] = useState(0);


    return(
        <div>
            <NavBar setPage={setPage} lang={1} />
            <div className='mainContainer'>
                <LogoContainer />
                This Page Exists
            </div>
        </div>
    );
}