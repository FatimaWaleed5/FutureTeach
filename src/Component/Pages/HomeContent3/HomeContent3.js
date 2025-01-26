import React from 'react';
import './HomeContent3.css';

const HomeContent3 = () => {
    return (
        <div className="carousel-container">
            <div className="carousel">
                <div className="card">
                    <img src="/images/Technical.png" alt="Technical Icon" className="card-icon" />
                    <p>Technical</p>
                </div>
                <div className="card">
                    <img src="/images/softskills.svg" alt="Soft Skills Icon" className="card-icon" />
                    <p>Soft Skills</p>
                </div>
                <div className="card">
                    <img src="/images/CreativeSkills.svg" alt="Creative Skills Icon" className="card-icon" />
                    <p>Creative Skills</p>
                </div>
                <div className="card">
                    <img src="/images/DigitalMarketing.svg" alt="Digital Marketing Icon" className="card-icon" />
                    <p>Digital Marketing</p>
                </div>
            </div>
        </div>
    );
};

export default HomeContent3;
