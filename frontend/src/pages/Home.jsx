import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/toaster';
import { ArrowRight, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Could not send message. Please try again later.",
        variant: "destructive",
      });
    }
  };


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/status`)
      .then(res => {
        console.log("Backend response:", res.data);
      })
      .catch(err => {
        console.error("Backend error:", err);
      });
  }, []);

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">VRAJ PATEL</div>
          <nav className="nav">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Let's set ideas in motion.</h1>
            <p className="hero-subtitle">
              Simulation-driven mechanical engineering focused on making systems work in the real world.
            </p>
            <div className="hero-buttons">
              <Button
                className="cta-button"
                onClick={() => scrollToSection('projects')}
              >
                View Work <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                variant="outline"
                className="cta-button-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="hero-scroll">
            <ChevronDown size={24} className="scroll-icon" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="about-content">
            <div className="about-image-container">
              <img
                src="https://images.pexels.com/photos/31585388/pexels-photo-31585388.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Vraj Patel"
                className="profile-image"
              />
            </div>
            <div className="about-text">
              <h2 className="section-title">About</h2>
              <div className="section-divider"></div>
              <p className="about-paragraph">
                Pre-final year Mechanical Engineering student at L.D. College of Engineering (GTU),
                graduating in 2027. My work centers on analyzing and validating mechanical systems
                through simulation rather than stopping at geometry.
              </p>
              <p className="about-paragraph">
                I approach engineering as a negotiation between physics, constraints, and practicality,
                with strong grounding in core mechanical fundamentals. Specializing in CFD, FEA, and
                system-level simulation to understand how mechanisms, autonomous systems, turbines, and
                high-pressure flow systems behave under real-world conditions.
              </p>
              <div className="education-block">
                <h3 className="education-title">Education</h3>
                <div className="education-item">
                  <div className="education-degree">Bachelor of Engineering in Mechanical Engineering</div>
                  <div className="education-school">L.D. College of Engineering, Ahmedabad (GTU)</div>
                  <div className="education-year">2023 – 2027</div>
                  <div className="education-gpa">CPI: 7.72/10 | SPI: 8.65/10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>

          <div className="skills-grid">
            <div className="skill-category-card primary">
              <h3 className="skill-category-title">Simulation & Analysis</h3>
              <p className="skill-category-subtitle">Primary Focus</p>
              <div className="skills-list">
                <span className="skill-tag">CFD (Computational Fluid Dynamics)</span>
                <span className="skill-tag">FEA (Finite Element Analysis)</span>
                <span className="skill-tag">ANSYS Fluent</span>
                <span className="skill-tag">Multiphysics Simulation</span>
                <span className="skill-tag">MATLAB/Octave</span>
                <span className="skill-tag">Flow Optimization</span>
                <span className="skill-tag">Thermal Analysis</span>
                <span className="skill-tag">Structural Analysis</span>
                <span className="skill-tag">System Validation</span>
              </div>
            </div>

            <div className="skill-category-card secondary">
              <h3 className="skill-category-title">Design & Prototyping</h3>
              <p className="skill-category-subtitle">Supporting Skills</p>
              <div className="skills-list">
                <span className="skill-tag">SolidWorks</span>
                <span className="skill-tag">AutoCAD</span>
                <span className="skill-tag">CAD Modeling</span>
                <span className="skill-tag">Mechanical Layout</span>
                <span className="skill-tag">Prototype Design</span>
                <span className="skill-tag">Technical Drawing</span>
              </div>
            </div>

            <div className="skill-category-card secondary">
              <h3 className="skill-category-title">Systems & Programming</h3>
              <p className="skill-category-subtitle">Additional Tools</p>
              <div className="skills-list">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C Programming</span>
                <span className="skill-tag">Raspberry Pi</span>
                <span className="skill-tag">Sensor Integration</span>
                <span className="skill-tag">LiDAR & IMU</span>
                <span className="skill-tag">Embedded Systems</span>
              </div>
            </div>
          </div>

          <div className="coursework-section">
            <h3 className="coursework-title">Relevant Coursework</h3>
            <div className="coursework-grid">
              <span className="coursework-item">Thermodynamics</span>
              <span className="coursework-item">Fluid Mechanics</span>
              <span className="coursework-item">Heat Transfer</span>
              <span className="coursework-item">Strength of Materials</span>
              <span className="coursework-item">Machine Design</span>
              <span className="coursework-item">Vibrations</span>
              <span className="coursework-item">Theory of Machines</span>
              <span className="coursework-item">CAD/CAM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>

          <div className="projects-grid">
            <Card className="project-card">
              <CardContent className="project-card-content">
                <div className="project-header">
                  <span className="project-badge">CFD ANALYSIS</span>
                  <h3 className="project-title">High-Pressure Water/Air Jet Cutter Nozzle</h3>
                </div>
                <p className="project-description">
                  Design and simulation of stepped, conical, and bell-shaped nozzles at 20,000–60,000 PSI
                  using ANSYS. Optimized geometry for improved jet stability, reduced turbulence, and
                  maximum exit velocity through CFD-driven refinement.
                </p>
                <div className="project-details">
                  <div className="project-detail-item">
                    <span className="detail-label">Pressure Range</span>
                    <span className="detail-value">60,000 PSI</span>
                  </div>
                  <div className="project-detail-item">
                    <span className="detail-label">Peak Velocity</span>
                    <span className="detail-value">Mach 2.9</span>
                  </div>
                  <div className="project-detail-item">
                    <span className="detail-label">Tool</span>
                    <span className="detail-value">ANSYS Fluent</span>
                  </div>
                </div>
                <Link to="/project/nozzle">
                  <Button className="project-button">
                    View Full Analysis <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardContent className="project-card-content">
                <div className="project-header">
                  <span className="project-badge">RENEWABLE ENERGY</span>
                  <h3 className="project-title">Archimedean Spiral Turbine</h3>
                </div>
                <p className="project-description">
                  Dual-mode turbine for water and wind power generation. CAD design, fluid power calculations,
                  and installation analysis with prototype testing. Validated performance for decentralized
                  power generation and environmental compatibility.
                </p>
                <div className="project-details">
                  <div className="project-detail-item">
                    <span className="detail-label">Power Output</span>
                    <span className="detail-value">6.87 kW</span>
                  </div>
                  <div className="project-detail-item">
                    <span className="detail-label">Efficiency</span>
                    <span className="detail-value">65-75%</span>
                  </div>
                  <div className="project-detail-item">
                    <span className="detail-label">Mode</span>
                    <span className="detail-value">Hybrid</span>
                  </div>
                </div>
                <Link to="/project/turbine">
                  <Button className="project-button">
                    View Full Analysis <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardContent className="project-card-content">
                <div className="project-header">
                  <span className="project-badge">ROBOTICS · IGVC</span>
                  <h3 className="project-title">Autonomous 6-Wheel Rover (ANANTA)</h3>
                </div>
                <p className="project-description">
                  Rocker-bogie rover with integrated LiDAR, IMU, GPS, and Raspberry Pi control.
                  Performed torque analysis, slope-climb capability studies, and stability validation.
                  System-level integration for autonomous minefield navigation.
                </p>
                <div className="project-details">
                  <div className="project-detail-item">
                    <span className="detail-label">Chassis</span>
                    <span className="detail-value">300×180×150 mm</span>
                  </div>
                  <div className="project-detail-item">
                    <span className="detail-label">Drive System</span>
                    <span className="detail-value">6-Motor</span>
                  </div>
                  <div className="project-detail-item">
                    <span className="detail-label">Team</span>
                    <span className="detail-value">ANANTA</span>
                  </div>
                </div>
                <Link to="/project/rover">
                  <Button className="project-button">
                    View Full Analysis <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section">
        <div className="section-container">
          <h2 className="section-title">Capabilities</h2>
          <div className="section-divider"></div>
          <div className="capabilities-content">
            <p className="capabilities-text">
              Open to collaboration and future work involving CFD/FEA simulation and optimization,
              mechanical system analysis, and CAD support. While no formal services are currently offered,
              I'm interested in opportunities to apply simulation-driven engineering to real-world problems.
            </p>
            <p className="capabilities-note">
              Currently exploring research opportunities and technical collaborations in fluid dynamics,
              thermal systems, and autonomous mechanical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Contact</h2>
          <div className="section-divider"></div>

          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-intro">
                Interested in discussing simulation work, mechanical systems, or potential collaborations?
              </p>
              <div className="contact-links">
                <a href="mailto:patelvraj1603@gmail.com" className="contact-link">
                  <Mail size={20} />
                  <span>patelvraj1603@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/vraj-ptl" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Linkedin size={20} />
                  <span>linkedin.com/in/vraj-ptl</span>
                </a>
                <a href="https://github.com/Vraj-ptl16" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Github size={20} />
                  <span>github.com/Vraj-ptl16</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="form-textarea"
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="submit-button">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>© 2025 Vraj Patel. Built with precision and purpose.</p>
            <p className="footer-subtitle">Mechanical Engineering Student | CFD Specialist | Simulation-Driven Design</p>
          </div>
          <div className="footer-links">
            <a href="mailto:patelvraj1603@gmail.com" className="footer-icon">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/vraj-ptl" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Vraj-ptl16" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
};

export default Home;
