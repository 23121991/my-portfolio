import React from 'react'
import { Link } from 'react-scroll';
import "./TopContent.css";

const TopContent = () => {
    return (
        <div className='topContent'>
            <div className="topContent_container">
                <h1>Mr. Saravanan</h1>
                <p>Certified Web Developer</p>
                <a href='https://drive.google.com/file/d/1Y1jXnfbCSpI1T93P8-AmjNXeIMu4M50d/view?usp=share_link'>
                    <button className='topContent_downloadButton'>View to Download Cv
                   </button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className='topContent_myProjects'>My Projects</button>
                </Link>

            </div>

        </div>
    )
}

export default TopContent
