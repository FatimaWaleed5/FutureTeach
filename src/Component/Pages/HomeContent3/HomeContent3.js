import React from 'react'
import './HomeContent3.css'
const HomeContent3 = () => {
    return (
    <div className="cards-section">
        <div className="card">
            <img  src="/images/Technical.png" alt="Icon 1" className="card-icon"/>
            <p>Technical</p>
        </div>
        <div className="card">
            <img src="/images/softskills.svg" alt="Icon 2" className="card-icon"/>
            <p>Soft Skills</p>
        </div>
        <div className="card">
            <img src="/images/CreativeSkills.svg"  alt="Icon 3" className="card-icon"/>
            <p>Creative Skills</p>
        </div>
        <div className="card">
            <img src="/images/DigitalMarketing.svg" alt="Icon 4" className="card-icon"/>
            <p>Digital Marketing </p>
        </div>
    </div>
    )
}

export default HomeContent3