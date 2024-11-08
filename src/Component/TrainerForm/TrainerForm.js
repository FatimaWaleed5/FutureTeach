import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // استخدام Link من react-router-dom
import './TrainerForm.css'; // تأكد من أن المسار صحيح لملف CSS

const TrainerForm = () => {
  const [trainerName, setTrainerName] = useState('');
  const [courseCategory, setCourseCategory] = useState('Technical');
  const [courseDescription, setCourseDescription] = useState('');
  const [linkLecture, setLinkLecture] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('شكراً! تم استلام بياناتك بنجاح.');
  };

  return (
    <div className="trainer-page">
      <div className="trainer-form-container">
        <div className="trainer-transparent-box">
          <div className="trainer-form-section">
            <form onSubmit={handleSubmit}>
              <h2 className="trainer-title">Trainer Profile</h2>
              <div className="form-group">
                <label>Trainer Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={trainerName}
                  onChange={(e) => setTrainerName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Course Category:</label>
                <select
                  value={courseCategory}
                  onChange={(e) => setCourseCategory(e.target.value)}
                >
                  <option value="Technical">Technical</option>
                  <option value="Soft Skills">Soft Skills</option>
                  <option value="Creative Skills">Creative Skills</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </div>
              <div className="form-group">
                <label>Course Description:</label>
                <textarea
                  rows="4"
                  placeholder="Enter course description"
                  value={courseDescription}
                  onChange={(e) => setCourseDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label>Upload the Link Lecture:</label>
                <input
                  type="text"
                  placeholder="Upload your link"
                  value={linkLecture}
                  onChange={(e) => setLinkLecture(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="button" className="upload-btn">
                  <i className="fa fa-cloud-upload" aria-hidden="true"></i> Upload your link
                </button>
              </div>
              <div className="form-group">
                <Link to="/Done" className="submit-btn">Submit</Link> {/* تغيير الزر إلى رابط */}
                {message && <div className="success-message">{message}</div>}
              </div>
            </form>
          </div>
          <div className="trainer-image-section">
            <img src="../Teach.png" alt="Teaching Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerForm;
