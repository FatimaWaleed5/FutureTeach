import React, { useState } from 'react';
import './TrainerForm.css';
import axios from 'axios';

const TrainerForm = () => {
  const [trainerName, setTrainerName] = useState('');
  const [courseCategory, setCourseCategory] = useState('Technical');
  const [courseDescription, setCourseDescription] = useState('');
  const [linkLecture, setLinkLecture] = useState('');
  

  

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: trainerName,
      description: courseDescription,
      category: courseCategory,
      link: linkLecture,
      videos: [
        {
          title: `${trainerName}'s Lecture`, 
          video_url: linkLecture, 
        },
      ],
    };

    try {
      const response = await axios.post(
        '/courses/create/', 
        data
      );
      
      if (response.status === 201) {
        setSubmittedData(data); // حفظ البيانات المدخلة بعد إرسالها بنجاح
        setMessage('تم إرسال البيانات بنجاح!');
        setError('');
      }
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      setError('حدث خطأ أثناء إرسال البيانات.');
      setMessage('');
    }
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
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label>Upload the Link Lecture:</label>
                <input
                  type="text"
                  placeholder="Upload your link"
                  value={linkLecture}
                  onChange={(e) => setLinkLecture(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="submit-btn">Submit</button>
                {message && <div className="success-message">{message}</div>}
                {error && <div className="error-message">{error}</div>}
              </div>
            </form>
          </div>
          <div className="trainer-image-section">
            <img
              src="../Teach.png" 
              alt="Teaching Illustration"
            />
          </div>
        </div>
      </div>

      {submittedData && (
        <div className="submitted-data">
          <h3>تم إرسال البيانات بنجاح:</h3>
          <p><strong>Trainer Name:</strong> {submittedData.title}</p>
          <p><strong>Course Category:</strong> {submittedData.category}</p>
          <p><strong>Course Description:</strong> {submittedData.description}</p>
          <p><strong>Lecture Link:</strong> {submittedData.link}</p>
          
        </div>
      )}
    </div>
  );
};

export default TrainerForm;
