import React from 'react'
import './HomeStart.css'
const HomeStart = () => {
  return (
    <div  data-ignore="used only for top most containter width">
        <div className="all">
          <div className="left">
            <p className="topic">Welcome to<br />Future Teach Academy...</p>
            <p className="totopic">The best way to start your learning journey.</p>
            <div className="btnplace">
              <div className="twobtn">
              </div>
              <button className="new">start new course</button>
              <button className="old">priveious Courses </button>
            </div>
          </div>
          <div className="imgandnotes">
            <div className="mid">
              <div className="notebord">
                <img src='/images/bell.png' className="note1" alt='' /> 
                <p className="notestr1">Are you ready to take courses !</p>
              </div>
              <div className="note2">
                <p className="notestr2">boost your career with FT</p>
              </div>
            </div>
            <img src='/images/girl.png'className="girl" alt=''/> 
          </div>
        </div>
      </div>
      
  )
}

export default HomeStart