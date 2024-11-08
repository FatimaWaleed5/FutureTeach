import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import Home from './Home';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import ProfileForm from './Component/ProfileForm/ProfileForm';
import TypeOfCourses from './Component/Courses/pages/TypeOfCourses';
import VideoPlatform from './Component/VideoPlatform/VideoPlatform';
import TrainerForm from './Component/TrainerForm/TrainerForm'; // استيراد مكون TrainerForm
import Done from './Component/Done/Done'; // استيراد مكون Done

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Courses' element={<TypeOfCourses />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Profile' element={<ProfileForm />} />
        <Route path='/VideoPlatform' element={<VideoPlatform />} />
        <Route path='/TrainerForm' element={<TrainerForm />} /> {/* إضافة مسار TrainerForm */}
        <Route path='/Done' element={<Done />} /> {/* إضافة مسار صفحة Done */}
      </Routes>
    </Router>
  );
}

export default App;
