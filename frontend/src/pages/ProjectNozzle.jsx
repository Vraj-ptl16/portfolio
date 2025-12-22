import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, Mail, Github, Linkedin } from 'lucide-react';
import '../styles/ProjectDetail.css';

const ProjectNozzle = () => {
  return (
    <div className="project-detail-container">
      {/* Header */}
      <header className="project-header-nav">
        <div className="project-header-content">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="project-logo">VRAJ PATEL</div>
        </div>
      </header>

      {/* Project Hero */}
      <section className="project-hero">
        <div className="project-hero-content">
          <span className="project-category">CFD ANALYSIS · DECEMBER 2024</span>
          <h1 className="project-main-title">
            Simulation and Analysis of Water/Air Jet Cutter Nozzles Using CFD
          </h1>
          <div className="project-meta-grid">
            <div className="meta-item">
              <span className="meta-label">Course</span>
              <span className="meta-value">Fluid Mechanics</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Tools</span>
              <span className="meta-value">ANSYS Fluent, SolidWorks</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Domain</span>
              <span className="meta-value">Computational Fluid Dynamics</span>
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
            Water jet cutting technology is critical in precision manufacturing, capable of cutting materials 
            ranging from soft plastics to hardened steel using high-pressure water streams reaching speeds of Mach 3. 
            This study compares three distinct nozzle geometries—Conical, Bell-shaped, and Stepped designs—to evaluate 
            their performance characteristics including exit velocity, pressure distribution, turbulence behavior, and 
            flow uniformity.
          </p>
          <p className="content-text">
            Operating pressures range from 20,000 to 60,000 PSI, with mass flow rates up to 5.68 kg/s. The analysis 
            utilizes ANSYS Fluent for steady-state CFD simulations with k-epsilon turbulence modeling.
          </p>
        </section>

        {/* Key Metrics */}
        <section className="metrics-grid">
          <div className="metric-card">
            <div className="metric-value">60,000 PSI</div>
            <div className="metric-label">Maximum Operating Pressure</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">2.125 x 103 m/s</div>
            <div className="metric-label">Peak Exit Velocity (Mach 2.9)</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">5.68 kg/s</div>
            <div className="metric-label">Maximum Flow Rate</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">Bell Nozzle</div>
            <div className="metric-label">Optimal Design</div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="content-section">
          <h2 className="content-title">Problem Statement & Objectives</h2>
          <div className="subsection">
            <h3 className="subsection-title">The Challenge</h3>
            <p className="content-text">
              Water jet cutting systems require precise nozzle design to achieve:
            </p>
            <ul className="content-list">
              <li>Maximum exit velocity for effective material cutting</li>
              <li>Uniform flow distribution to ensure consistent cut quality</li>
              <li>Minimal turbulence at the nozzle exit</li>
              <li>Optimal pressure conversion from high inlet pressure to kinetic energy</li>
              <li>Structural durability under extreme operating conditions</li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">Research Objectives</h3>
            <ul className="content-list">
              <li>Design and model three nozzle geometries (Conical, Bell-shaped, Stepped) in SolidWorks</li>
              <li>Perform steady-state CFD simulations using ANSYS Fluent with appropriate turbulence models</li>
              <li>Compare velocity profiles, pressure distributions, and eddy viscosity across designs</li>
              <li>Analyze flow characteristics including streamlines, contours, and vector fields</li>
              <li>Recommend optimal nozzle geometry for industrial water jet cutting applications</li>
            </ul>
          </div>
        </section>

        {/* Design Methodology */}
        <section className="content-section">
          <h2 className="content-title">Design Methodology</h2>
          
          <div className="subsection">
            <h3 className="subsection-title">Nozzle Geometry Specifications</h3>
            <p className="content-text">
              All three nozzle designs follow a convergent-divergent configuration with the following parameters:
            </p>
            <div className="spec-grid">
              <div className="spec-item">
                <span className="spec-label">Inlet Diameter</span>
                <span className="spec-value">25.4 mm</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Throat Diameter</span>
                <span className="spec-value">1.27 mm</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Convergent Length</span>
                <span className="spec-value">152.4 mm</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Divergent Length</span>
                <span className="spec-value">50.8 mm</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Area Ratio</span>
                <span className="spec-value">400:1</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Operating Pressure</span>
                <span className="spec-value">20,000-60,000 PSI</span>
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">Fundamental Equations</h3>
            <div className="equation-block">
              <div className="equation-item">
                <div className="equation-title">Bernoulli's Equation (Energy Conservation)</div>
                <div className="equation-formula">P1/rho + V12/2 + gz1 = P2/rho + V22/2 + gz2</div>
              </div>
              <div className="equation-item">
                <div className="equation-title">Continuity Equation (Mass Conservation)</div>
                <div className="equation-formula">m-dot = rho1A1V1 = rho2A2V2 = constant</div>
              </div>
              <div className="equation-item">
                <div className="equation-title">Exit Velocity (Ideal)</div>
                <div className="equation-formula">V = sqrt(2DeltaP/rho)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Nozzle Geometries */}
        <section className="content-section">
          <h2 className="content-title">Three Nozzle Geometries: Comparative Analysis</h2>
          
          <div className="geometry-grid">
            <div className="geometry-card">
              <h3 className="geometry-title">1. Conical Nozzle</h3>
              <p className="geometry-desc">Linear convergent-divergent profile</p>
              <div className="geometry-details">
                <div className="detail-section">
                  <span className="detail-heading">Advantages</span>
                  <ul className="detail-list">
                    <li>Simple manufacturing</li>
                    <li>Cost-effective</li>
                  </ul>
                </div>
                <div className="detail-section">
                  <span className="detail-heading">Limitations</span>
                  <ul className="detail-list">
                    <li>Higher turbulence</li>
                    <li>Non-uniform exit flow</li>
                  </ul>
                </div>
                <div className="detail-section">
                  <span className="detail-heading">Best For</span>
                  <p className="detail-text">General-purpose applications</p>
                </div>
              </div>
            </div>

            <div className="geometry-card featured">
              <div className="featured-badge">Optimal Design</div>
              <h3 className="geometry-title">2. Bell-Shaped Nozzle</h3>
              <p className="geometry-desc">Smooth curved profile with gradual expansion</p>
              <div className="geometry-details">
                <div className="detail-section">
                  <span className="detail-heading">Advantages</span>
                  <ul className="detail-list">
                    <li>Maximum velocity</li>
                    <li>Minimal turbulence</li>
                  </ul>
                </div>
                <div className="detail-section">
                  <span className="detail-heading">Performance</span>
                  <p className="detail-text">Highest exit velocity: 2.125x103 m/s</p>
                </div>
                <div className="detail-section">
                  <span className="detail-heading">Best For</span>
                  <p className="detail-text">Precision cutting, high-quality cuts</p>
                </div>
              </div>
            </div>

            <div className="geometry-card">
              <h3 className="geometry-title">3. Stepped Nozzle</h3>
              <p className="geometry-desc">Central obstruction creates stepped flow</p>
              <div className="geometry-details">
                <div className="detail-section">
                  <span className="detail-heading">Advantages</span>
                  <ul className="detail-list">
                    <li>Distributed flow</li>
                    <li>Improved mixing</li>
                  </ul>
                </div>
                <div className="detail-section">
                  <span className="detail-heading">Limitations</span>
                  <ul className="detail-list">
                    <li>Lower peak velocity</li>
                    <li>Complex design</li>
                  </ul>
                </div>
                <div className="detail-section">
                  <span className="detail-heading">Best For</span>
                  <p className="detail-text">Cooling applications, distributed jets</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CFD Simulation Setup */}
        <section className="content-section">
          <h2 className="content-title">CFD Simulation Setup & Methodology</h2>
          
          <div className="subsection">
            <h3 className="subsection-title">Simulation Parameters</h3>
            <div className="parameter-grid">
              <div className="parameter-item">
                <span className="param-label">Software</span>
                <span className="param-value">ANSYS Fluent 2024 R1</span>
              </div>
              <div className="parameter-item">
                <span className="param-label">Solver</span>
                <span className="param-value">Pressure-based, steady-state</span>
              </div>
              <div className="parameter-item">
                <span className="param-label">Turbulence Model</span>
                <span className="param-value">k-epsilon (Realizable) with standard wall functions</span>
              </div>
              <div className="parameter-item">
                <span className="param-label">Working Fluid</span>
                <span className="param-value">Water (incompressible, rho = 998.2 kg/m3)</span>
              </div>
              <div className="parameter-item">
                <span className="param-label">Mesh Elements</span>
                <span className="param-value">~450,000 tetrahedral elements</span>
              </div>
              <div className="parameter-item">
                <span className="param-label">Convergence Criteria</span>
                <span className="param-value">Residuals &lt; 1x10-6</span>
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">Mesh Generation Strategy</h3>
            <p className="content-text">
              High-quality tetrahedral mesh generated in ANSYS Meshing with:
            </p>
            <ul className="content-list">
              <li><strong>Boundary Layer Refinement:</strong> 5 inflation layers near walls (y+ &lt; 5)</li>
              <li><strong>Throat Region Refinement:</strong> Element size 0.05 mm for accurate high-velocity capture</li>
              <li><strong>Expansion Ratio:</strong> 1.2 for smooth transition from fine to coarse regions</li>
              <li><strong>Quality Metrics:</strong> Orthogonal quality &gt; 0.3, aspect ratio &lt; 5 for 95% elements</li>
            </ul>
          </div>
        </section>

        {/* Simulation Results */}
        <section className="content-section">
          <h2 className="content-title">Simulation Results & Performance Analysis</h2>
          
          <div className="subsection">
            <h3 className="subsection-title">Velocity Distribution</h3>
            <p className="content-text">Exit velocity is the primary performance indicator:</p>
            <div className="results-table">
              <div className="table-header">
                <div className="table-cell">Nozzle Type</div>
                <div className="table-cell">Pressure</div>
                <div className="table-cell">Exit Velocity</div>
                <div className="table-cell">Mach Number</div>
                <div className="table-cell">Rating</div>
              </div>
              <div className="table-row highlight">
                <div className="table-cell">Bell-shaped</div>
                <div className="table-cell">60,000 PSI</div>
                <div className="table-cell">2.125 x 103 m/s</div>
                <div className="table-cell">Mach 2.90</div>
                <div className="table-cell">Excellent</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Bell-shaped</div>
                <div className="table-cell">40,000 PSI</div>
                <div className="table-cell">1.760 x 103 m/s</div>
                <div className="table-cell">Mach 2.40</div>
                <div className="table-cell">Very Good</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Bell-shaped</div>
                <div className="table-cell">20,000 PSI</div>
                <div className="table-cell">1.250 x 103 m/s</div>
                <div className="table-cell">Mach 1.71</div>
                <div className="table-cell">Good</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Conical</div>
                <div className="table-cell">60,000 PSI</div>
                <div className="table-cell">1.980 x 103 m/s</div>
                <div className="table-cell">Mach 2.70</div>
                <div className="table-cell">Very Good</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Stepped</div>
                <div className="table-cell">60,000 PSI</div>
                <div className="table-cell">1.650 x 103 m/s</div>
                <div className="table-cell">Mach 2.25</div>
                <div className="table-cell">Good</div>
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">Turbulence & Eddy Viscosity</h3>
            <p className="content-text">
              Lower eddy viscosity at the exit indicates smoother flow:
            </p>
            <div className="turbulence-comparison">
              <div className="turbulence-item">
                <div className="turbulence-name">Bell-shaped</div>
                <div className="turbulence-value">2.6 x 10-2 kg/m·s</div>
                <div className="turbulence-desc">Excellent flow uniformity, low turbulence</div>
              </div>
              <div className="turbulence-item">
                <div className="turbulence-name">Conical</div>
                <div className="turbulence-value">4.8 x 10-2 kg/m·s</div>
                <div className="turbulence-desc">Good flow uniformity, moderate turbulence</div>
              </div>
              <div className="turbulence-item">
                <div className="turbulence-name">Stepped</div>
                <div className="turbulence-value">6.2 x 10-2 kg/m·s</div>
                <div className="turbulence-desc">Fair flow uniformity, high turbulence</div>
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">Mass Flow Rate Analysis</h3>
            <p className="content-text">
              Mass flow rate increases proportionally with inlet pressure:
            </p>
            <div className="flow-rate-grid">
              <div className="flow-rate-item">
                <div className="flow-rate-pressure">20,000 PSI</div>
                <div className="flow-rate-value">1.89 kg/s</div>
                <div className="flow-rate-volume">113.7 L/min</div>
              </div>
              <div className="flow-rate-item">
                <div className="flow-rate-pressure">40,000 PSI</div>
                <div className="flow-rate-value">3.78 kg/s</div>
                <div className="flow-rate-volume">227.3 L/min</div>
              </div>
              <div className="flow-rate-item">
                <div className="flow-rate-pressure">60,000 PSI</div>
                <div className="flow-rate-value">5.68 kg/s</div>
                <div className="flow-rate-volume">341.0 L/min</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="content-section findings-section">
          <h2 className="content-title">Key Findings & Technical Insights</h2>
          <div className="findings-grid">
            <div className="finding-item">
              <h4 className="finding-title">Performance Superiority</h4>
              <p className="finding-text">
                Bell-shaped nozzle outperformed others with 7.3% higher exit velocity than conical and 28.8% higher than Stepped designs.
              </p>
            </div>
            <div className="finding-item">
              <h4 className="finding-title">Turbulence Reduction</h4>
              <p className="finding-text">
                Bell-shaped geometry reduced eddy viscosity by 45.8% compared to conical and 58.1% compared to Stepped.
              </p>
            </div>
            <div className="finding-item">
              <h4 className="finding-title">Pressure Optimization</h4>
              <p className="finding-text">
                Bell-shaped design minimizes pressure losses, achieving 94.2% efficiency in pressure-to-kinetic energy conversion.
              </p>
            </div>
            <div className="finding-item">
              <h4 className="finding-title">Flow Stability</h4>
              <p className="finding-text">
                Gradual expansion angle in bell-shaped nozzle prevents flow separation and boundary layer detachment.
              </p>
            </div>
            <div className="finding-item">
              <h4 className="finding-title">Industrial Applicability</h4>
              <p className="finding-text">
                Bell-shaped nozzles are optimal for precision cutting in aerospace, automotive, and advanced manufacturing.
              </p>
            </div>
            <div className="finding-item">
              <h4 className="finding-title">Design Validation</h4>
              <p className="finding-text">
                CFD results align with theoretical predictions within ±3.5%, validating simulation methodology.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion-section">
          <h2 className="content-title">Conclusion</h2>
          <div className="conclusion-content">
            <div className="conclusion-box">
              <h3 className="conclusion-heading">Recommended Design: Bell-Shaped Nozzle</h3>
              <p className="conclusion-text">
                The bell-shaped nozzle is recommended for high-performance water jet cutting applications due to 
                superior velocity output, minimal turbulence, and uniform flow distribution. It achieves exit velocities 
                of 2.125x103 m/s at 60,000 PSI with 94.2% pressure conversion efficiency.
              </p>
              <p className="conclusion-recommendation">
                <strong>Recommendation:</strong> Implement bell-shaped nozzle design for precision cutting in aerospace, 
                automotive, and advanced manufacturing applications requiring high cutting quality and consistency.
              </p>
            </div>
          </div>
        </section>

        {/* Future Scope */}
        <section className="content-section">
          <h2 className="content-title">Future Scope & Potential Improvements</h2>
          <div className="future-scope-grid">
            <div className="scope-item">
              <h4 className="scope-title">Transient Analysis</h4>
              <p className="scope-desc">Time-dependent simulations to study startup dynamics and flow instabilities</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Multiphase Modeling</h4>
              <p className="scope-desc">Incorporate abrasive particles for waterjet-abrasive cutting simulation</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Erosion Prediction</h4>
              <p className="scope-desc">Model nozzle wear patterns and predict service life</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Experimental Validation</h4>
              <p className="scope-desc">Physical prototype testing to validate CFD predictions</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Optimization Algorithms</h4>
              <p className="scope-desc">Automated design optimization using genetic algorithms or gradient-based methods</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">3D Printing Feasibility</h4>
              <p className="scope-desc">Evaluate additive manufacturing for complex nozzle geometries</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="project-footer">
        <div className="project-footer-content">
          <div className="footer-text">
            <p>© 2025 Vraj Patel. Built with precision and purpose.</p>
            <p className="footer-subtitle">Mechanical Engineering Student | CFD Specialist</p>
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

export default ProjectNozzle;
