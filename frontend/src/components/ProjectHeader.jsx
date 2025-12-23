import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectDetail.css';

const ProjectHeader = ({ themeColor }) => {
    return (
        <header className="project-header-nav" style={{ background: themeColor || undefined }}>
            <div className="project-header-content centered">
                <Link to="/" className="project-logo-link">
                    <span className="project-logo-text">VRAJ PATEL</span>
                </Link>
            </div>
        </header>
    );
};

export default ProjectHeader;
