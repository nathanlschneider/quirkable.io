import React from 'react';

const CompanyInfoSection = () => {
  return (
    <div className="company-info-section">
      <div className="info-box">
        <div className="icon">
          <img src="icon1.png" alt="Icon 1" />
        </div>
        <div className="info">
          <h2>Quality Code</h2>
          <p>We pride ourselves on delivering high-quality, efficient, and maintainable code to meet your software needs.</p>
        </div>
      </div>

      <div className="info-box">
        <div className="icon">
          <img src="icon2.png" alt="Icon 2" />
        </div>
        <div className="info">
          <h2>Experienced Team</h2>
          <p>Our team consists of seasoned developers and experts in various technologies, ensuring top-notch solutions.</p>
        </div>
      </div>

      <div className="info-box">
        <div className="icon">
          <img src="icon3.png" alt="Icon 3" />
        </div>
        <div className="info">
          <h2>Client-Centric Approach</h2>
          <p>We prioritize our clients' goals and work closely with them to achieve the best possible outcomes.</p>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfoSection;
