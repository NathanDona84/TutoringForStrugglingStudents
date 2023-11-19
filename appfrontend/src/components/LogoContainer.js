import React, { useEffect, useState } from 'react';
import {buildPath} from '../App.js';
import axios from 'axios';

export default function LogoContainer(props){
    return(
        <div className="logoContainer">
            <div className="logo"></div>
        </div>
    );
}