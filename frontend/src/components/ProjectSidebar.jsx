import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectSidebar.css';

const ProjectSidebar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* The Sidebar Container */}
            <div
                className={`project-sidebar ${isOpen ? 'open' : 'closed'}`}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >

                {/* Toggle Handle (Visible when closed) */}
                <div
                    className="sidebar-handle"
                    onClick={toggleSidebar}
                    onMouseEnter={() => setIsOpen(true)}
                >
                    <div className="handle-pill"></div>
                </div>

                {/* Content */}
                <div className="sidebar-content">
                    <nav className="sidebar-nav">
                        <Link to="/" className="sidebar-link">
                            <span className="link-text">Home</span>
                        </Link>
                        <Link to="/#about" className="sidebar-link">
                            <span className="link-text">About</span>
                        </Link>
                        <Link to="/#projects" className="sidebar-link">
                            <span className="link-text">Projects</span>
                        </Link>
                        <Link to="/#contact" className="sidebar-link">
                            <span className="link-text">Contact</span>
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Overlay to close when clicking outside (mobile friendly) */}
            {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}
        </>
    );
};

export default ProjectSidebar;
