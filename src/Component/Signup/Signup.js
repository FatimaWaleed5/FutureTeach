import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="container">
      <div className="signup-section">
        <h1>Sign up</h1>
        <form>
          <div className="signup-form">
            <div className="signup-section1">
              <input type="text" placeholder="Enter your First Name" required />
              <input type="text" placeholder="Enter Your Last Name" required />
              <input type="tel" placeholder="Enter Your Phone Number" required />
              <input type="text" placeholder="Enter Your UserName" required />
              <input type="email" placeholder="Enter Your Email" required />
              <input type="password" placeholder="Enter Your Password" required />
              <input type="password" placeholder="Confirm Password" required />
            </div>
            
            <div className="signup-section2">
        <select class="form-input" required>
        <option value="" disabled selected>Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

    
      <select class="form-input" required>
        <option value="" disabled selected>City</option>
        <option value="city1">Iraq</option>
        <option value="city2">Egypt</option>
        <option value="city3">Lebanon</option>
        <option value="city4">Moroco</option>
      </select>

    
      <select class="form-input" required>
        <option value="" disabled selected>Education Level</option>
        <option value="high-school">High School</option>
        <option value="bachelor">Bachelor's Degree</option>
        <option value="master">Master's Degree</option>
        <option value="phd">PhD</option>
      </select>

      <select class="form-input" required>
        <option value="" disabled selected>Language</option>
        <option value="english">English</option>
        <option value="arabic">Arabic</option>
        <option value="french">French</option>
        <option value="spanish">Spanish</option>
      </select>
      <input type="date" class="form-input" placeholder="Date of Birth" required />
      </div>
      </div>
          <button className='submitbtn' type="submit">Submit</button>
        </form>
      </div>
      <div className="image-section">
        <div className="placeholder"></div>
        <img src="images/signpic.png" alt="Description" />
        
      </div>
    </div>
  );
};

export default Signup;