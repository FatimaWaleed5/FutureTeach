import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    city: '',
    education_level: '',
    language: '',
    date_joined: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [userData, setUserData] = useState(null); // حالة لتخزين بيانات المستخدم

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(
        '/users/register/',
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          phone_number: formData.phone_number,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          gender: formData.gender,
          city: formData.city,
          education_level: formData.education_level,
          language: formData.language,
          date_joined: formData.date_joined,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Response:', response.data);
      setSuccess('Account created successfully!');
      setError('');
      setUserData(response.data); // تخزين بيانات المستخدم في userData
    } catch (error) {
      console.error('Error:', error.response || error.message);
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="signup-section">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="signup-form">
            <div className="signup-section1">
              <input
                type="text"
                placeholder="Enter your First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Enter Your Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                placeholder="Enter Your Phone Number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Enter Your UserName"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="signup-section2">
              <select
                className="form-input"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <select
                className="form-input"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="" disabled selected>
                  City
                </option>
                <option value="Iraq">Iraq</option>
                <option value="Egypt">Egypt</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Morocco">Morocco</option>
              </select>

              <select
                className="form-input"
                name="education_level"
                value={formData.education_level}
                onChange={handleChange}
                required
              >
                <option value="" disabled selected>
                  Education Level
                </option>
                <option value="high-school">High School</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>

              <select
                className="form-input"
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
              >
                <option value="" disabled selected>
                  Language
                </option>
                <option value="english">English</option>
                <option value="arabic">Arabic</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
              </select>
              <input
                type="date"
                className="form-input"
                placeholder="Date of Birth"
                name="date_joined"
                value={formData.date_joined}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className="submitbtn" type="submit">
            Submit
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
      <div className="image-section">
        <div className="placeholder"></div>
        <img src="images/signpic.png" alt="Description" />
      </div>

      {/* مرحلة عرض البيانات */}
      {userData && (
        <div className="user-data">
          <h2>User Data</h2>
          <p><strong>First Name:</strong> {userData.first_name}</p>
          <p><strong>Last Name:</strong> {userData.last_name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone Number:</strong> {userData.phone_number}</p>
          <p><strong>City:</strong> {userData.city}</p>
          <p><strong>Gender:</strong> {userData.gender}</p>
        </div>
      )}
    </div>
  );
};

export default Signup;