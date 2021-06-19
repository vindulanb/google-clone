//Referece : https://www.youtube.com/watch?v=DAWWf7q8sqM
import React from 'react'
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../Search';

function Home() {
    return (
        <div className='home'>
            <div className='home_header'>
                <div className='home_headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                    <Link to='/VSH'>VSH</Link>
                    {/* Link */}
                </div>
                <div className='home_headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                    {/* Link */}
                </div>
            </div>
            <div className='home_body'>
                <img 
                    src="https://www.google.be/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt=""
                />    
                <div className="home__inputContainer">
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Home
