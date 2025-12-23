import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectSidebar.css';

const ProjectSidebar = () => {
    return (
        <div className="project-sidebar">
            {/* Navigation Links */}
            <nav className="sidebar-nav">
                <Link to="/" className="sidebar-link">Home</Link>
                {/* We can use hash links if on home page, but since we are on project pages, 
            we might want to link back to home with hash or just sections if we have a way. 
            For now, let's link to Home page with hash state or just sections on Home. 
            The requirements asked for "Home, About, Skills, Projects, Contact".
            Since these are on the Home page, we should link to "/#section".
        */}
                <Link to="/#about" className="sidebar-link">About</Link>
                <Link to="/#skills" className="sidebar-link">Skills</Link>
                <Link to="/#projects" className="sidebar-link">Projects</Link>
                <Link to="/#contact" className="sidebar-link">Contact</Link>
            </nav>
        </div>
    );
};

export default ProjectSidebar;
