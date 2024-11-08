import React, { useState } from 'react';
import './VideoPlatform.css';

const VideoPlatform = () => {
  const videos = [
    { title: 'Fiber Optic Lecture 1', link: 'https://www.youtube.com/embed/JP_C0XLLyR0', youtubeLink: 'https://www.youtube.com/watch?v=JP_C0XLLyR0', img: '../images/Lecture1.avif', description: 'The basics of fiber optic technology, how it works, How to splicing.', professor: 'Dr. John Smith' },
    { title: 'Fiber Optic Lecture 2', link: 'https://www.youtube.com/embed/RVojwPRfSJ0', youtubeLink: 'https://youtu.be/RVojwPRfSJ0?si=Zdk27w2yfbRlyENG', img: '../images/Lecture2.avif', description: 'Fiber vs. Cable: What’s the difference?', professor: 'Dr. John Smith' },
    { title: 'Fiber Optic Lecture 3', link: 'https://www.youtube.com/embed/-VYhfR8Fv2I', youtubeLink: 'https://youtu.be/-VYhfR8Fv2I?si=5eRWxi0CjqnjNx10', img: '../images/Lecture3.avif', description: 'The components of a fiber optic cable..', professor: 'Dr. John Smith' },
    { title: 'Fiber Optic Lecture 4', link: 'https://www.youtube.com/embed/aydfCEzxAJw', youtubeLink: 'https://youtu.be/aydfCEzxAJw?si=lbiwmO3fQNRv21bk', img: '../images/Lecture4.avif', description: 'What is FTTH?', professor: 'Dr. John Smith' },
    { title: 'Fiber Optic Lecture 5', link: 'https://www.youtube.com/embed/_HW92ezQ9P4', youtubeLink: 'https://youtu.be/_HW92ezQ9P4?si=bQ5tRgj-HYGGU70i', img: '../images/Lecture5.avif', description: 'Fiber optic installation techniques.', professor: 'Dr. John Smith' },
    
  ];

  const [mainVideo, setMainVideo] = useState(videos[0]);

  return (
    <div className="video-platform">


      <div className="content">
        <div className="main-video-section">
          <div className="main-video">
            <iframe
              src={mainVideo.link}
              title={mainVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>
          <div className="video-details">
            <h2>{mainVideo.title}</h2>
            <p>{mainVideo.description}</p>
            <p><strong>Professor:</strong> {mainVideo.professor}</p>
            <div className="video-actions">
              <button>Like</button>
              <button>Dislike</button>
            </div>
          </div>
        </div>

        <div className="video-sidebar">
          {videos.map((video, index) => (
            <div
              className="sidebar-video"
              key={index}
              onClick={() => setMainVideo(video)} // تحديث الفيديو الرئيسي عند النقر
              style={{ cursor: 'pointer' }} 
            >
              <img src={video.img} alt={video.title} />
              <h3>{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlatform;
