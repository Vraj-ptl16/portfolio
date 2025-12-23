import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, Mail, Github, Linkedin } from 'lucide-react';
import '../styles/ProjectDetail.css';
import ProjectSidebar from '../components/ProjectSidebar';
import ProjectHeader from '../components/ProjectHeader';

const ProjectRover = () => {
  return (
    <div className="project-detail-container">
      {/* Header */}
      <ProjectHeader themeColor="rgba(40, 20, 10, 0.85)" />
      <ProjectSidebar />

      {/* Project Hero */}
      <section className="project-hero">
        <div className="project-hero-content">
          <span className="project-category">ROBOTICS · IGVC · TEAM ANANTA</span>
          <h1 className="project-main-title">
            ANANTA: Autonomous Rover for Minefield Navigation
          </h1>
          <div className="project-meta-grid">
            <div className="meta-item">
              <span className="meta-label">Competition</span>
              <span className="meta-value">RoboFest Gujarat 5.0</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Category</span>
              <span className="meta-value">Intelligent Ground Vehicle</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Institution</span>
              <span className="meta-value">L.D. College of Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <div className="project-content">
        {/* Overview */}
        <section className="content-section">
          <h2 className="content-title">Project Overview</h2>
          <p className="content-text">
            ANANTA is an autonomous ground vehicle designed for the Aerial Robotics: Minefield Navigation Challenge
            at RoboFest Gujarat 5.0. The project addresses the critical humanitarian challenge of landmine detection
            and mapping in post-conflict zones. This rover integrates advanced sensor systems, autonomous navigation
            algorithms, and robust mechanical design to safely traverse simulated minefields, detect explosive hazards,
            and generate real-time hazard maps—all without human intervention in the danger zone.
          </p>
        </section>

        {/* Key Specifications */}
        <section className="metrics-grid">
          <div className="metric-card">
            <div className="metric-value">1.5 m/s</div>
            <div className="metric-label">Maximum Speed</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">12V DC</div>
            <div className="metric-label">Operating Voltage</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">50 cm</div>
            <div className="metric-label">Detection Range (Metal Detector)</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">~8 kg</div>
            <div className="metric-label">Rover Weight (Estimated)</div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="content-section">
          <h2 className="content-title">The Humanitarian Challenge</h2>
          <p className="content-text">
            Landmines remain one of the most persistent threats in post-conflict regions worldwide. According to UN
            estimates, over 60 million active landmines are buried across 70 countries, causing approximately 15,000-20,000
            casualties annually. Traditional manual demining is:
          </p>
          <ul className="content-list">
            <li>Extremely dangerous for personnel</li>
            <li>Slow and labor-intensive</li>
            <li>Expensive to implement at scale</li>
            <li>Psychologically traumatic for operators</li>
          </ul>

          <div className="mission-statement">
            <h3 className="mission-title">Mission Critical Requirements</h3>
            <p className="mission-text">
              Design an autonomous rover capable of navigating uneven terrain, detecting buried metallic objects
              (landmine simulators), mapping hazard locations with GPS coordinates, and transmitting real-time data
              to a safe ground control station—all while operating in a 20m x 20m arena within 15 minutes.
            </p>
          </div>
        </section>

        {/* Objectives */}
        <section className="content-section">
          <h2 className="content-title">Design Objectives</h2>
          <ul className="content-list">
            <li>Design and fabricate a four-wheeled autonomous ground vehicle with rocker-bogie suspension</li>
            <li>Integrate metal detection sensors with 50 cm depth capability for landmine identification</li>
            <li>Implement GPS-based navigation and hazard coordinate logging</li>
            <li>Develop autonomous path planning algorithms to cover maximum arena area</li>
            <li>Establish wireless communication (Wi-Fi/RF) for real-time telemetry and control</li>
            <li>Ensure system reliability under outdoor conditions (dust, vibration, temperature variations)</li>
            <li>Demonstrate complete autonomous operation within competition time constraints</li>
          </ul>
        </section>

        {/* System Architecture */}
        <section className="content-section">
          <h2 className="content-title">System Architecture</h2>
          <p className="content-text">
            ANANTA follows a modular architecture with five integrated subsystems working in coordination:
          </p>

          <div className="subsystems-grid">
            <div className="subsystem-card">
              <h3 className="subsystem-title">Mechanical System</h3>
              <ul className="subsystem-list">
                <li>Chassis design and frame structure</li>
                <li>Rocker-bogie suspension mechanism</li>
                <li>Wheel and drivetrain assembly</li>
                <li>Sensor mounting brackets</li>
                <li>Waterproof enclosures</li>
              </ul>
            </div>

            <div className="subsystem-card">
              <h3 className="subsystem-title">Electronics System</h3>
              <ul className="subsystem-list">
                <li>Arduino Mega 2560 microcontroller</li>
                <li>Power distribution circuits</li>
                <li>Motor driver modules (L298N)</li>
                <li>Voltage regulation (12V/5V)</li>
                <li>PCB integration and wiring</li>
              </ul>
            </div>

            <div className="subsystem-card">
              <h3 className="subsystem-title">Sensor System</h3>
              <ul className="subsystem-list">
                <li>Metal detector (inductive proximity)</li>
                <li>GPS module (NEO-6M)</li>
                <li>Ultrasonic sensors (HC-SR04)</li>
                <li>IMU/Gyroscope (MPU6050)</li>
                <li>Camera module (optional vision)</li>
              </ul>
            </div>

            <div className="subsystem-card">
              <h3 className="subsystem-title">Communication System</h3>
              <ul className="subsystem-list">
                <li>Wi-Fi module (ESP8266)</li>
                <li>RF transceiver (nRF24L01)</li>
                <li>Data telemetry protocols</li>
                <li>Ground control interface</li>
                <li>Emergency stop mechanism</li>
              </ul>
            </div>

            <div className="subsystem-card">
              <h3 className="subsystem-title">Software System</h3>
              <ul className="subsystem-list">
                <li>Autonomous navigation algorithms</li>
                <li>Path planning (grid-based search)</li>
                <li>Sensor data fusion</li>
                <li>Obstacle avoidance logic</li>
                <li>Hazard mapping and logging</li>
              </ul>
            </div>

            <div className="subsystem-card">
              <h3 className="subsystem-title">Power System</h3>
              <ul className="subsystem-list">
                <li>12V LiPo battery (3000-5000 mAh)</li>
                <li>Voltage regulators (5V, 3.3V)</li>
                <li>Power monitoring circuits</li>
                <li>Battery management system</li>
                <li>Runtime: 45-60 minutes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="content-section">
          <h2 className="content-title">Technical Specifications</h2>

          <div className="subsection">
            <h3 className="subsection-title">Mechanical Design</h3>
            <div className="spec-grid">
              <div className="spec-item">
                <span className="spec-label">Chassis Material</span>
                <span className="spec-value">Aluminum Extrusion (20mm x 20mm)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Dimensions</span>
                <span className="spec-value">60 cm (L) x 50 cm (W) x 40 cm (H)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Drive System</span>
                <span className="spec-value">6-Wheel Drive</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Wheel Diameter</span>
                <span className="spec-value">12-15 cm</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Ground Clearance</span>
                <span className="spec-value">8-10 cm</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Total Weight</span>
                <span className="spec-value">~8 kg</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Payload Capacity</span>
                <span className="spec-value">2-3 kg</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Obstacle Clearance</span>
                <span className="spec-value">18-22 cm (1.5x wheel diameter)</span>
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">Electronics Components</h3>
            <div className="components-table">
              <div className="table-header">
                <div className="table-cell">Component</div>
                <div className="table-cell">Model</div>
                <div className="table-cell">Quantity</div>
                <div className="table-cell">Purpose</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Microcontroller</div>
                <div className="table-cell">Arduino Mega 2560</div>
                <div className="table-cell">1</div>
                <div className="table-cell">Main processing unit</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Motor Driver</div>
                <div className="table-cell">L298N Dual H-Bridge</div>
                <div className="table-cell">2</div>
                <div className="table-cell">4 DC motor control</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Metal Detector</div>
                <div className="table-cell">Inductive Proximity (LJ18A3)</div>
                <div className="table-cell">1-2</div>
                <div className="table-cell">Landmine detection (50 cm)</div>
              </div>
              <div className="table-row">
                <div className="table-cell">GPS Module</div>
                <div className="table-cell">NEO-6M with Antenna</div>
                <div className="table-cell">1</div>
                <div className="table-cell">Position tracking & mapping</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Ultrasonic Sensor</div>
                <div className="table-cell">HC-SR04</div>
                <div className="table-cell">3-4</div>
                <div className="table-cell">Obstacle detection</div>
              </div>
              <div className="table-row">
                <div className="table-cell">IMU</div>
                <div className="table-cell">MPU6050</div>
                <div className="table-cell">1</div>
                <div className="table-cell">Orientation and tilt sensing</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Wi-Fi Module</div>
                <div className="table-cell">ESP8266 NodeMCU</div>
                <div className="table-cell">1</div>
                <div className="table-cell">Wireless telemetry & control</div>
              </div>
              <div className="table-row">
                <div className="table-cell">DC Motors</div>
                <div className="table-cell">300 RPM, 12V, 30 kg·cm Geared</div>
                <div className="table-cell">4</div>
                <div className="table-cell">Wheel drive system</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Battery</div>
                <div className="table-cell">12V LiPo, 4000 mAh, 3S</div>
                <div className="table-cell">1</div>
                <div className="table-cell">Main power source</div>
              </div>
            </div>
          </div>
        </section>

        {/* Autonomous Navigation */}
        <section className="content-section">
          <h2 className="content-title">Autonomous Navigation Strategy</h2>

          <div className="navigation-strategy">
            <div className="strategy-card">
              <h3 className="strategy-title">Grid-Based Systematic Search Pattern</h3>
              <p className="strategy-text">
                Divide 20m x 20m arena into 1m x 1m grid cells (400 cells total). Generate serpentine
                (boustrophedon) path to visit all cells systematically.
              </p>
            </div>

            <div className="strategy-card">
              <h3 className="strategy-title">GPS Waypoint Navigation</h3>
              <p className="strategy-text">
                Use GPS coordinates to track position and log hazard locations. Stop and record GPS
                coordinates when metal detector triggers.
              </p>
            </div>

            <div className="strategy-card">
              <h3 className="strategy-title">Obstacle Detection & Avoidance</h3>
              <p className="strategy-text">
                Use ultrasonic sensors to detect boundary walls and obstacles. Implement emergency stop
                and path correction when obstacles detected.
              </p>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">Control System Modes</h3>
            <div className="control-modes">
              <div className="mode-item">
                <h4 className="mode-name">Autonomous Mode</h4>
                <p className="mode-description">
                  Pre-programmed path execution with sensor-based corrections
                </p>
              </div>
              <div className="mode-item">
                <h4 className="mode-name">Semi-Autonomous Mode</h4>
                <p className="mode-description">
                  Operator can override and manually control via ground station
                </p>
              </div>
              <div className="mode-item">
                <h4 className="mode-name">Emergency Stop</h4>
                <p className="mode-description">
                  Immediate halt via wireless command or autonomous safety triggers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculations */}
        <section className="content-section">
          <h2 className="content-title">Engineering Calculations</h2>

          <div className="calculations-grid">
            <div className="calculation-card">
              <h3 className="calc-title">Motor Torque Requirement</h3>
              <div className="calc-content">
                <div className="calc-formula">Total Weight (W) = 8 kg</div>
                <div className="calc-formula">Weight per wheel = W / 4 = 2 kg = 19.6 N</div>
                <div className="calc-formula">Wheel radius (r) = 0.06 m</div>
                <div className="calc-formula">Required Torque per motor = Force x radius</div>
                <div className="calc-formula">tau = 19.6 N x 0.06 m = 1.176 N·m</div>
                <div className="calc-result">
                  With safety factor of 2.5:
                  <br />
                  tau_required = 1.176 x 2.5 ≈ 3 N·m (30 kg·cm)
                </div>
              </div>
            </div>

            <div className="calculation-card">
              <h3 className="calc-title">Motor RPM & Speed</h3>
              <div className="calc-content">
                <div className="calc-formula">Desired speed = 1.5 m/s</div>
                <div className="calc-formula">Wheel circumference = 2pir = 2pi x 0.06 = 0.377 m</div>
                <div className="calc-formula">Wheel RPM = (Speed / Circumference) x 60</div>
                <div className="calc-formula">RPM = (1.5 / 0.377) x 60 ≈ 239 RPM</div>
                <div className="calc-result">
                  Selected Motor: 300 RPM, 30 kg·cm DC geared motor
                </div>
              </div>
            </div>

            <div className="calculation-card">
              <h3 className="calc-title">Power Consumption Estimate</h3>
              <div className="calc-content">
                <div className="calc-formula">4 x DC motors @ 12V, 2A each = 96W</div>
                <div className="calc-formula">Electronics (Arduino, sensors) = 15W</div>
                <div className="calc-formula">Communication modules = 5W</div>
                <div className="calc-formula">Total Power ≈ 116W</div>
                <div className="calc-result">
                  Battery: 12V, 4000 mAh LiPo
                  <br />
                  Runtime = (4000 mAh / 9.67 A) ≈ ~41 minutes
                  <br />
                  (Includes safety margin for peak loads)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="content-section">
          <h2 className="content-title">Real-World Applications</h2>

          <div className="applications-grid">
            <div className="application-card">
              <h4 className="application-title">Humanitarian Demining</h4>
              <ul className="application-list">
                <li>Safe area clearance for civilian return</li>
                <li>Agricultural land reclamation</li>
                <li>Infrastructure reconstruction support</li>
              </ul>
            </div>

            <div className="application-card">
              <h4 className="application-title">Military Operations</h4>
              <ul className="application-list">
                <li>Forward reconnaissance in hostile areas</li>
                <li>Safe passage route identification</li>
                <li>Explosive ordnance disposal (EOD) support</li>
              </ul>
            </div>

            <div className="application-card">
              <h4 className="application-title">Border Security</h4>
              <ul className="application-list">
                <li>Mined border area surveying</li>
                <li>Illegal crossing prevention zones</li>
                <li>Hazard mapping for patrol routes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Future Scope */}
        <section className="content-section">
          <h2 className="content-title">Future Scope & Enhancements</h2>
          <div className="future-scope-grid">
            <div className="scope-item">
              <h4 className="scope-title">Multi-Rover Swarm Coordination</h4>
              <p className="scope-desc">Deploy multiple rovers to cover large areas faster with coordinated search patterns</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Machine Learning Integration</h4>
              <p className="scope-desc">Train AI models to differentiate between mine types and false positives</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Advanced Sensor Fusion</h4>
              <p className="scope-desc">Combine ground-penetrating radar (GPR), magnetometers, and thermal imaging</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Marking Mechanism</h4>
              <p className="scope-desc">Add automated spray-paint or flag-deployment system to mark detected mines</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Solar Power Integration</h4>
              <p className="scope-desc">Extend operational time with hybrid battery-solar power system</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Real-Time SLAM</h4>
              <p className="scope-desc">Implement Simultaneous Localization and Mapping for GPS-denied environments</p>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="content-section findings-section">
          <h2 className="content-title">Key Learnings & Technical Insights</h2>
          <div className="findings-grid">
            <div className="finding-item">
              <h4 className="finding-title">System Integration</h4>
              <p className="finding-text">
                Importance of modular design and thorough testing of individual components before system-level integration.
              </p>
            </div>
            <div className="finding-item">
              <h4 className="finding-title">Power Management</h4>
              <p className="finding-text">
                Balancing power consumption across motors, sensors, and communication systems. Implemented intelligent power management.
              </p>
            </div>
            <div className="finding-item">
              <h4 className="finding-title">Sensor Reliability</h4>
              <p className="finding-text">
                Added physical shielding and software filtering to improve reliability and reduce false positives under outdoor conditions.
              </p>
            </div>
            <div className="finding-item">
              <h4 className="finding-title">GPS Accuracy</h4>
              <p className="finding-text">
                Limitations of consumer-grade GPS modules (2-5m accuracy). For precise mapping, differential GPS or RTK-GPS necessary.
              </p>
            </div>
            <div className="finding-item">
              <h4 className="finding-title">Autonomous Navigation</h4>
              <p className="finding-text">
                Path planning algorithms must balance systematic coverage with adaptive obstacle avoidance. Pre-programmed paths need real-time correction.
              </p>
            </div>
            <div className="finding-item">
              <h4 className="finding-title">Team Collaboration</h4>
              <p className="finding-text">
                Essential for successful robotics projects, requiring close coordination and clear communication protocols.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="content-section team-section">
          <h2 className="content-title">Team ANANTA</h2>
          <div className="team-grid">
            <div className="team-member-card">
              <h4 className="member-name">Vraj Patel</h4>
              <p className="member-role">Mechanical Engineering</p>
              <p className="member-responsibility">Mechanical Design & System Integration</p>
            </div>
            <div className="team-member-card">
              <h4 className="member-name">Aryan Fumakiya</h4>
              <p className="member-role">Electronics & Communication</p>
              <p className="member-responsibility">Electronics & Motor Driver Circuit</p>
            </div>
            <div className="team-member-card">
              <h4 className="member-name">Rushit Galoriya</h4>
              <p className="member-role">Electronics & Communication</p>
              <p className="member-responsibility">Sensor Integration & Power Management</p>
            </div>
            <div className="team-member-card">
              <h4 className="member-name">Jaydev Arapada</h4>
              <p className="member-role">Electronics & Communication</p>
              <p className="member-responsibility">Autonomous Navigation & Software</p>
            </div>
          </div>
          <div className="mentor-section">
            <p className="mentor-label">Faculty Mentor</p>
            <p className="mentor-name">Prof. Hitesh Desai</p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion-section">
          <h2 className="content-title">Project Status</h2>
          <div className="conclusion-content">
            <div className="conclusion-box">
              <p className="conclusion-text">
                Ideation stage completed. While not selected for finals, the journey provided invaluable
                experience in autonomous systems, sensor integration, and collaborative engineering.
                The project demonstrated the feasibility of low-cost autonomous demining solutions and
                highlighted areas for future development.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="project-footer">
        <div className="project-footer-content">
          <div className="footer-text">
            <p>© 2025 Vraj Patel. Built with precision and purpose.</p>
            <p className="footer-subtitle">Mechanical Engineering Student | Robotics Enthusiast</p>
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
    </div>
  );
};

export default ProjectRover;
