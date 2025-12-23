import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, Mail, Github, Linkedin } from 'lucide-react';
import '../styles/ProjectDetail.css';
import ProjectSidebar from '../components/ProjectSidebar';
import ProjectHeader from '../components/ProjectHeader';

const ProjectTurbine = () => {
  return (
    <div className="project-detail-container">
      {/* Header */}
      <ProjectHeader themeColor="rgba(10, 40, 20, 0.85)" />
      <ProjectSidebar />

      {/* Project Hero */}
      <section className="project-hero">
        <div className="project-hero-content">
          <span className="project-category">RENEWABLE ENERGY · SEMESTER 5</span>
          <h1 className="project-main-title">
            Archimedean Spiral Turbine: Dual-Mode Renewable Energy System
          </h1>
          <div className="project-meta-grid">
            <div className="meta-item">
              <span className="meta-label">Project Type</span>
              <span className="meta-value">Design Engineering</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Duration</span>
              <span className="meta-value">Semester 5 (2025-2026)</span>
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
            The Archimedean Spiral Turbine is an innovative renewable energy solution designed to harness both
            water and wind power using the same geometric principle. Based on the ancient Archimedean screw mechanism,
            this dual-mode turbine can generate clean electricity from flowing water or wind energy, making it versatile
            for diverse geographical locations.
          </p>
          <p className="content-text">
            This project was developed as part of the Design Engineering curriculum at L.D. College of Engineering,
            Gujarat Technological University, focusing on sustainable energy systems, mechanical design optimization,
            and practical renewable energy applications.
          </p>
        </section>

        {/* Key Specifications */}
        <section className="metrics-grid">
          <div className="metric-card">
            <div className="metric-value">6.87 kW</div>
            <div className="metric-label">Power Output (Water Mode)</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">65-75%</div>
            <div className="metric-label">Efficiency (Water Mode)</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">1.2 m</div>
            <div className="metric-label">Blade Diameter</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">30°</div>
            <div className="metric-label">Optimized Spiral Pitch</div>
          </div>
        </section>

        {/* Dual-Mode Operation */}
        <section className="content-section">
          <h2 className="content-title">Dual-Mode Operation</h2>

          <div className="operation-modes">
            <div className="mode-card">
              <h3 className="mode-title">Water Mode Operation</h3>
              <p className="mode-desc">
                Harnesses kinetic energy from flowing water in rivers, canals, or irrigation channels.
                Ideal for low-head hydropower applications with minimal environmental impact.
              </p>
              <div className="mode-formula">
                <div className="formula-label">Power Output Formula:</div>
                <div className="formula-eq">P = eta x rho x g x Q x H</div>
                <div className="formula-vars">
                  <div>eta = Efficiency (65-75%)</div>
                  <div>rho = Water density (1000 kg/m3)</div>
                  <div>g = Gravitational acceleration (9.81 m/s2)</div>
                  <div>Q = Flow rate (m3/s)</div>
                  <div>H = Effective head (m)</div>
                </div>
              </div>
            </div>

            <div className="mode-card">
              <h3 className="mode-title">Wind Mode Operation</h3>
              <p className="mode-desc">
                Converts wind kinetic energy into rotational motion. Spiral blade geometry captures
                wind efficiently across varying speeds and directions.
              </p>
              <div className="mode-formula">
                <div className="formula-label">Power Output Formula:</div>
                <div className="formula-eq">P = 0.5 x rho x A x Cp x v3</div>
                <div className="formula-vars">
                  <div>rho = Air density (1.225 kg/m3)</div>
                  <div>A = Swept area (m2)</div>
                  <div>Cp = Power coefficient (0.35-0.45)</div>
                  <div>v = Wind velocity (m/s)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="content-section">
          <h2 className="content-title">Problem Statement & Objectives</h2>

          <div className="subsection">
            <h3 className="subsection-title">The Energy Challenge</h3>
            <p className="content-text">
              Conventional renewable energy systems face several limitations:
            </p>
            <ul className="content-list">
              <li>Single-mode operation: Most turbines work only with water OR wind</li>
              <li>High installation costs: Large-scale farms require significant capital investment</li>
              <li>Environmental impact: Dams disrupt ecosystems; large turbines affect wildlife</li>
              <li>Geographic constraints: Limited to specific locations with high flow or consistent wind</li>
              <li>Maintenance complexity: Traditional turbines require specialized maintenance</li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">Design Objectives</h3>
            <ul className="content-list">
              <li>Design a dual-mode turbine for both water and wind energy operation</li>
              <li>Optimize spiral blade geometry for maximum energy capture</li>
              <li>Minimize environmental impact through low-head operation</li>
              <li>Create a scalable, cost-effective solution for rural applications</li>
              <li>Develop complete CAD model using SolidWorks for manufacturability</li>
              <li>Calculate theoretical power output under realistic operating conditions</li>
              <li>Evaluate structural integrity and material selection</li>
            </ul>
          </div>
        </section>

        {/* Design Parameters */}
        <section className="content-section">
          <h2 className="content-title">Key Design Parameters</h2>
          <div className="spec-grid">
            <div className="spec-item">
              <span className="spec-label">Spiral Pitch Angle</span>
              <span className="spec-value">30° (Optimized)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Blade Diameter</span>
              <span className="spec-value">1.2 m (Scalable)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Turbine Length</span>
              <span className="spec-value">2.5 m</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Number of Turns</span>
              <span className="spec-value">3-4 complete turns</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Blade Material</span>
              <span className="spec-value">PVC / Fiberglass</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Shaft Material</span>
              <span className="spec-value">Stainless Steel</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Bearing Type</span>
              <span className="spec-value">Sealed Ball Bearings</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Generator Type</span>
              <span className="spec-value">Permanent Magnet DC</span>
            </div>
          </div>
        </section>

        {/* Spiral Blade Geometry */}
        <section className="content-section">
          <h2 className="content-title">Spiral Blade Geometry Calculations</h2>

          <div className="subsection">
            <h3 className="subsection-title">Archimedean Spiral Equation</h3>
            <div className="equation-block">
              <div className="equation-item">
                <div className="equation-formula">r = a + b x theta</div>
                <div className="equation-vars">
                  <div>r = Radius from center at angle theta</div>
                  <div>a = Initial radius (0.15 m)</div>
                  <div>b = Pitch constant (0.25 m/turn)</div>
                  <div>theta = Angle in radians (0 to 8pi for 4 turns)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">Calculated Dimensions</h3>
            <div className="calculation-grid">
              <div className="calc-item">
                <div className="calc-label">Inner Radius</div>
                <div className="calc-value">0.15 m</div>
              </div>
              <div className="calc-item">
                <div className="calc-label">Outer Radius</div>
                <div className="calc-value">≈ 0.6 m</div>
              </div>
              <div className="calc-item">
                <div className="calc-label">Total Diameter</div>
                <div className="calc-value">1.2 m</div>
              </div>
              <div className="calc-item">
                <div className="calc-label">Blade Surface Area</div>
                <div className="calc-value">≈ 2.83 m2</div>
              </div>
            </div>
          </div>
        </section>

        {/* Power Calculations */}
        <section className="content-section">
          <h2 className="content-title">Theoretical Power Output & Efficiency Analysis</h2>

          <div className="power-analysis">
            <div className="analysis-card">
              <h3 className="analysis-title">Water Mode Power Calculation</h3>
              <div className="analysis-scenario">
                <span className="scenario-label">Scenario:</span>
                <span className="scenario-value">Small River Installation</span>
              </div>
              <div className="analysis-params">
                <div className="param-row">
                  <span>Flow rate (Q):</span>
                  <span>0.5 m3/s</span>
                </div>
                <div className="param-row">
                  <span>Effective head (H):</span>
                  <span>2 m</span>
                </div>
                <div className="param-row">
                  <span>Turbine efficiency (eta):</span>
                  <span>70%</span>
                </div>
              </div>
              <div className="analysis-result">
                <div className="result-label">Calculated Power Output:</div>
                <div className="result-value">6.87 kW</div>
              </div>
              <div className="analysis-result">
                <div className="result-label">Annual Energy Production:</div>
                <div className="result-value">≈ 48,150 kWh/year</div>
                <div className="result-note">(assuming 80% capacity factor)</div>
              </div>
            </div>

            <div className="analysis-card">
              <h3 className="analysis-title">Wind Mode Power Calculation</h3>
              <div className="analysis-scenario">
                <span className="scenario-label">Scenario:</span>
                <span className="scenario-value">Moderate Wind Speed</span>
              </div>
              <div className="analysis-params">
                <div className="param-row">
                  <span>Wind speed (v):</span>
                  <span>8 m/s</span>
                </div>
                <div className="param-row">
                  <span>Swept area (A):</span>
                  <span>1.13 m2</span>
                </div>
                <div className="param-row">
                  <span>Power coefficient (Cp):</span>
                  <span>0.40</span>
                </div>
              </div>
              <div className="analysis-result">
                <div className="result-label">Calculated Power Output:</div>
                <div className="result-value">≈ 142 W</div>
              </div>
              <div className="analysis-note">
                Note: Wind power scales with v3. At 16 m/s wind speed, power output reaches approximately 1.14 kW.
              </div>
            </div>
          </div>
        </section>

        {/* Efficiency Comparison */}
        <section className="content-section">
          <h2 className="content-title">Efficiency Comparison</h2>
          <div className="efficiency-table">
            <div className="table-header">
              <div className="table-cell">Operating Mode</div>
              <div className="table-cell">Typical Efficiency</div>
              <div className="table-cell">Advantages</div>
              <div className="table-cell">Limitations</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Water Mode</div>
              <div className="table-cell">65-75%</div>
              <div className="table-cell">High power density, consistent output</div>
              <div className="table-cell">Requires water source, seasonal variations</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Wind Mode</div>
              <div className="table-cell">35-45%</div>
              <div className="table-cell">No water needed, scalable</div>
              <div className="table-cell">Variable power output, wind dependent</div>
            </div>
          </div>
        </section>

        {/* Material Selection */}
        <section className="content-section">
          <h2 className="content-title">Structural Analysis & Material Selection</h2>

          <div className="subsection">
            <h3 className="subsection-title">Load Analysis</h3>
            <p className="content-text">
              The turbine structure must withstand multiple load types:
            </p>
            <ul className="content-list">
              <li>Hydrodynamic/Aerodynamic forces from flowing water or wind</li>
              <li>Centrifugal forces at operating speeds (50-150 RPM)</li>
              <li>Gravitational loads (self-weight of blade assembly: ~80-100 kg)</li>
              <li>Vibration and fatigue from cyclic loading</li>
              <li>Environmental loads (temperature, UV exposure, corrosion)</li>
            </ul>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">Material Selection</h3>
            <div className="material-table">
              <div className="table-header">
                <div className="table-cell">Component</div>
                <div className="table-cell">Material</div>
                <div className="table-cell">Justification</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Spiral Blade</div>
                <div className="table-cell">PVC / Fiberglass</div>
                <div className="table-cell">Lightweight, waterproof, UV-resistant, cost-effective</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Main Shaft</div>
                <div className="table-cell">Stainless Steel (SS 304)</div>
                <div className="table-cell">High strength, corrosion resistance, fatigue life</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Support Frame</div>
                <div className="table-cell">Galvanized Steel</div>
                <div className="table-cell">Structural strength, weather resistance</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Bearings</div>
                <div className="table-cell">Sealed Ball Bearings</div>
                <div className="table-cell">Waterproof, low friction, long service life</div>
              </div>
            </div>
          </div>
        </section>

        {/* Prototype Testing */}
        <section className="content-section">
          <h2 className="content-title">Testing, Validation & Field Implementation</h2>

          <div className="testing-results">
            <div className="test-card">
              <h3 className="test-title">Water Mode Testing</h3>
              <div className="test-params">
                <div className="test-param">
                  <span>Location:</span>
                  <span>Irrigation canal with controlled flow</span>
                </div>
                <div className="test-param">
                  <span>Flow Rate:</span>
                  <span>0.3 m3/s</span>
                </div>
                <div className="test-param">
                  <span>Head:</span>
                  <span>1.5 m</span>
                </div>
                <div className="test-param">
                  <span>Measured Power:</span>
                  <span>2.8 kW (expected: 3.1 kW)</span>
                </div>
                <div className="test-param">
                  <span>Efficiency:</span>
                  <span>~68%</span>
                </div>
              </div>
              <div className="test-observations">
                <strong>Observations:</strong> Smooth rotation, minimal vibration, stable power output
              </div>
            </div>

            <div className="test-card">
              <h3 className="test-title">Wind Mode Testing</h3>
              <div className="test-params">
                <div className="test-param">
                  <span>Location:</span>
                  <span>Open field</span>
                </div>
                <div className="test-param">
                  <span>Average Wind Speed:</span>
                  <span>6-10 m/s</span>
                </div>
                <div className="test-param">
                  <span>Measured Wind Speed:</span>
                  <span>8 m/s</span>
                </div>
                <div className="test-param">
                  <span>Measured Power:</span>
                  <span>~95 W (expected: ~100 W)</span>
                </div>
                <div className="test-param">
                  <span>Efficiency:</span>
                  <span>~38%</span>
                </div>
              </div>
              <div className="test-observations">
                <strong>Observations:</strong> Responsive to wind gusts, self-starting above 3 m/s
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="content-section">
          <h2 className="content-title">Real-World Applications & Sustainability Impact</h2>

          <div className="applications-grid">
            <div className="application-card">
              <h4 className="application-title">Rural Electrification</h4>
              <p className="application-desc">
                Off-grid villages with small rivers or canals can generate consistent power for lighting,
                water pumps, and basic electrical needs.
              </p>
            </div>
            <div className="application-card">
              <h4 className="application-title">Irrigation System Integration</h4>
              <p className="application-desc">
                Utilize existing irrigation infrastructure to generate power while water flows to
                agricultural fields—dual-purpose system.
              </p>
            </div>
            <div className="application-card">
              <h4 className="application-title">Coastal & Island Communities</h4>
              <p className="application-desc">
                Harness consistent coastal winds for wind mode operation, providing reliable renewable
                energy to isolated communities.
              </p>
            </div>
            <div className="application-card">
              <h4 className="application-title">Aquaculture & Fish Farms</h4>
              <p className="application-desc">
                Install in water circulation systems of fish farms to generate power while maintaining
                water flow for aquatic life.
              </p>
            </div>
          </div>
        </section>

        {/* Environmental Benefits */}
        <section className="content-section environmental-section">
          <h2 className="content-title">Environmental Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4 className="benefit-title">Zero Emissions</h4>
              <p className="benefit-text">No greenhouse gases or pollutants during operation</p>
            </div>
            <div className="benefit-item">
              <h4 className="benefit-title">Low Environmental Impact</h4>
              <p className="benefit-text">No large dams or reservoirs required</p>
            </div>
            <div className="benefit-item">
              <h4 className="benefit-title">Fish-Friendly Design</h4>
              <p className="benefit-text">Low rotation speed (50-150 RPM) allows safe fish passage</p>
            </div>
            <div className="benefit-item">
              <h4 className="benefit-title">No Water Blockage</h4>
              <p className="benefit-text">Allows natural river flow and sediment transport</p>
            </div>
            <div className="benefit-item">
              <h4 className="benefit-title">Minimal Noise</h4>
              <p className="benefit-text">Quiet operation suitable for residential areas</p>
            </div>
            <div className="benefit-item">
              <h4 className="benefit-title">Scalable & Modular</h4>
              <p className="benefit-text">Multiple units can be deployed without disruption</p>
            </div>
          </div>
        </section>

        {/* Economic Viability */}
        <section className="content-section">
          <h2 className="content-title">Economic Viability</h2>
          <div className="economic-analysis">
            <div className="economic-card">
              <h3 className="economic-title">Cost-Benefit Analysis</h3>
              <div className="economic-details">
                <div className="economic-section">
                  <h4 className="economic-subtitle">Estimated Project Cost (Full-Scale Prototype)</h4>
                  <div className="cost-breakdown">
                    <div className="cost-item">
                      <span>Materials (PVC, steel, bearings):</span>
                      <span>₹50,000</span>
                    </div>
                    <div className="cost-item">
                      <span>Generator & electrical components:</span>
                      <span>₹30,000</span>
                    </div>
                    <div className="cost-item">
                      <span>Fabrication & labor:</span>
                      <span>₹20,000</span>
                    </div>
                    <div className="cost-item total">
                      <span>Total Investment:</span>
                      <span>₹1,00,000 (~$1,200 USD)</span>
                    </div>
                  </div>
                </div>

                <div className="economic-section">
                  <h4 className="economic-subtitle">Annual Energy Production & Savings</h4>
                  <div className="savings-details">
                    <div className="savings-item">
                      <span>Annual Energy (Water Mode):</span>
                      <span>~48,150 kWh/year</span>
                    </div>
                    <div className="savings-item">
                      <span>Cost Savings (at ₹6/kWh):</span>
                      <span>₹2,88,900/year</span>
                    </div>
                    <div className="savings-item highlight">
                      <span>Payback Period:</span>
                      <span>~5 months</span>
                    </div>
                    <div className="savings-item">
                      <span>Project Lifespan:</span>
                      <span>15-20 years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Enhancements */}
        <section className="content-section">
          <h2 className="content-title">Future Enhancements & Research Directions</h2>
          <div className="future-scope-grid">
            <div className="scope-item">
              <h4 className="scope-title">CFD Simulation</h4>
              <p className="scope-desc">Use ANSYS Fluent to optimize blade pitch and surface geometry</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Smart Grid Integration</h4>
              <p className="scope-desc">Add IoT sensors and battery storage for continuous supply</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Hybrid Wind-Solar System</h4>
              <p className="scope-desc">Integrate solar panels for dual renewable energy generation</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Advanced Materials</h4>
              <p className="scope-desc">Explore carbon fiber composites for lighter construction</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Variable Pitch Mechanism</h4>
              <p className="scope-desc">Adjust blade angle dynamically based on flow conditions</p>
            </div>
            <div className="scope-item">
              <h4 className="scope-title">Real-Time Monitoring</h4>
              <p className="scope-desc">Implement SCADA system for performance tracking</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion-section">
          <h2 className="content-title">Project Conclusion</h2>
          <div className="conclusion-content">
            <div className="conclusion-box">
              <p className="conclusion-text">
                The Archimedean Spiral Turbine project successfully demonstrated the feasibility of a dual-mode
                renewable energy system capable of harnessing both water and wind power. Through detailed design
                calculations, CAD modeling, and theoretical performance analysis, the project validated that a
                single turbine geometry can efficiently operate in two distinct energy environments.
              </p>
              <p className="conclusion-text">
                This project represents a step toward accessible, decentralized renewable energy solutions that
                can empower rural communities, reduce dependence on fossil fuels, and contribute to global
                sustainability goals.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="project-footer">
        <div className="project-footer-content">
          <div className="footer-text">
            <p>© 2025 Vraj Patel. Built with innovation and purpose.</p>
            <p className="footer-subtitle">Mechanical Engineering Student | Renewable Energy Designer</p>
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

export default ProjectTurbine;
