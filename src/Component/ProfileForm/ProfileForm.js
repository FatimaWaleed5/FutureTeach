import React, { useState, useEffect } from 'react';
import './ProfileForm.css';
import axios from 'axios';
import TrainerForm from '../TrainerForm/TrainerForm'; // استيراد نموذج المدرب

const ProfileForm = ({ handleRoleChange, onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [language, setLanguage] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState(''); // إضافة حالة كلمة المرور
  const [confirmPassword, setConfirmPassword] = useState(''); // إضافة حالة تأكيد كلمة المرور
  const [showTrainerForm, setShowTrainerForm] = useState(false); 
  const [thankYouMessage, setThankYouMessage] = useState(false); 

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleImageUpload = (e) => setImage(URL.createObjectURL(e.target.files[0]));
  const getInitial = (name) => name ? name.charAt(0).toUpperCase() : 'M';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match'); // رسالة عند عدم تطابق كلمتي المرور
      return;
    }
    if (role) {
      onSubmit(role);
      // تفريغ الحقول بعد الإرسال
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setUsername('');
      setEmail('');
      setGender('');
      setCity('');
      setEducationLevel('');
      setLanguage('');
      setDob('');
      setRole('');
      setImage(null);
      setPassword(''); // تفريغ حقل كلمة المرور
      setConfirmPassword(''); // تفريغ حقل تأكيد كلمة المرور
      setMessage('Profile updated successfully!'); // رسالة النجاح
    } else {
      setMessage('Please select a role');
    }
  };

  const handleRoleSelection = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    if (selectedRole === 'Trainer') {
      setShowTrainerForm(true);
      setThankYouMessage(false);
    } else if (selectedRole === 'Student') {
      setThankYouMessage(true);
      setShowTrainerForm(false);
    }
  };

  useEffect(() => {
    axios.get('/api/profile')
      .then((response) => {
        const data = response.data;
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setPhoneNumber(data.phoneNumber);
        setUsername(data.username);
        setEmail(data.email);
        setGender(data.gender);
        setCity(data.city);
        setEducationLevel(data.educationLevel);
        setLanguage(data.language);
        setDob(data.dob);
        setRole(data.role);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  // تحديث الخادم عند تغيير حقل معين
  const handleFieldChange = (field, value) => {
    // تحديث الحالة المحلية
    switch (field) {
      case 'gender': setGender(value); break;
      case 'city': setCity(value); break;
      case 'educationLevel': setEducationLevel(value); break;
      case 'language': setLanguage(value); break;
      default: break;
    }
    // إرسال التحديث للخادم
    axios.put('/api/profile', { [field]: value })
      .catch((error) => {
        console.error(`Error updating ${field}:`, error);
      });
  };

  return (
    <div className="profile-form">
    {!showTrainerForm && !thankYouMessage && (
      <>
      <div className="profile-pic">
        {image ? (
          <img src={image} alt="Profile" />
        ) : (
          <div className="placehold">
            <span className="initial">{getInitial(firstName)}</span>
          </div>
        )}
        <p className='yourname'>{firstName} {lastName}</p>
        <input type="file" onChange={handleImageUpload} />
      </div>

      <form onSubmit={handleSubmit} className="form-fields">
        <div>
          <label className="label">First name</label>
          <input className='theform' type="text" value={firstName} onChange={handleFirstNameChange} required />
        </div>
        <div>
          <label className="label">Last name</label>
          <input className='theform' type="text" value={lastName} onChange={handleLastNameChange} required />
        </div>
        <div>
          <label className="label">Phone Number</label>
          <input className='theform' type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
          <label className="label">User name</label>
          <input className='theform' type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label className="label">Email</label>
          <input className='theform' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className="label">Password</label>
          <input className='theform' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label className="label">Confirm Password</label>
          <input className='theform' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <div>
          <label className='label'>Gender</label>
          <select className='theform' value={gender} onChange={(e) => handleFieldChange('gender', e.target.value)} required>
            <option value="" disabled>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className='label'>City</label>
          <select className='theform' value={city} onChange={(e) => handleFieldChange('city', e.target.value)} required>
            <option value="" disabled>City</option>
            <option value="Iraq">Iraq</option>
            <option value="Egypt">Egypt</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Morocco">Morocco</option>
          </select>
        </div>
        <div>
          <label className='label'>Education Level</label>
          <select className='theform' value={educationLevel} onChange={(e) => handleFieldChange('educationLevel', e.target.value)} required>
            <option value="" disabled>Education Level</option>
            <option value="high-school">High School</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>
        </div>
        <div>
          <label className='label'>Language</label>
          <select className='theform' value={language} onChange={(e) => handleFieldChange('language', e.target.value)} required>
            <option value="" disabled>Language</option>
            <option value="english">English</option>
            <option value="arabic">Arabic</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
        <div>
          <label className="label">Date of birth</label>
          <input className='theform' type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </div>
        <div>
          <label className="label">Student or Trainer</label>
          <select
                value={role}
                onChange={handleRoleSelection}
                required
              >
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Trainer">Trainer</option>
          </select>
        </div>
        <button className='subinfo' type="submit">Submit</button>
      </form>
</>
    )}
{showTrainerForm && <div className="trainer-form"><TrainerForm /></div>} 
{thankYouMessage && <div className="success-message">
  Thank you, your information has been received successfully.</div>} 

      {message && <div className="success-message">{message}</div>}
    </div>
  );
};

export default ProfileForm;
