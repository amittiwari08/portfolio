import { useState } from "react";
import "./Experience.css";

/* ✅ IMPORT IMAGES HERE (TOP ONLY) */
import img1 from "../assets/images/login.jpeg";
import img2 from "../assets/images/dashboard1.jpeg";
import img3 from "../assets/images/dashboard2.jpeg";
import img4 from "../assets/images/sidebar.jpeg";

function Experience() {

  const [showAgrix, setShowAgrix] = useState(false);

  return (
    <section className="experience">
      <h2>Experience</h2>

      <div className="experience-container">

        {/* 🔥 AGRIX CARD */}
        <div className="experience-card">
          <h3>Software Intern</h3>
          <h4>Agrix Agrotech Private Limited</h4>
          <span>Dec 2025 – Present | Patna, India</span>

          <ul>
            <li>Developed a fully functional Android application.</li>
            <li>Handled both frontend and backend development.</li>
            <li>Integrated and tested API responses.</li>
            <li>Improved app performance and user experience.</li>
          </ul>

          <div className="work">
            <h4>My Work:</h4>
            <ul>
              <li>Built Android app for farmers to track machines.</li>
              <li>Tracked cultivated area and time efficiency.</li>
              <li>Designed real-time field monitoring features.</li>
            </ul>
          </div>

          {/* ✅ CLICK BUTTON */}
          <p 
            className="view-link"
            onClick={() => setShowAgrix(!showAgrix)}
          >
            🔗 View Project
          </p>
        </div>

        {/* 🔹 B4S */}
        <div className="experience-card">
          <h3>Software Developer Intern</h3>
          <h4>B4S Infratech Pvt. Ltd.</h4>
          <span>Jun 2025 – Jul 2025 | New Delhi</span>

          <ul>
            <li>Developed and tested software features.</li>
            <li>Debugged and fixed performance issues.</li>
            <li>Collaborated with team on real projects.</li>
          </ul>
        </div>

      </div>

      {/* 🔥 SHOW PROJECT */}
      {/* 🔥 APP 1 */}
<div className="app-section">
  <h4>Agrix Machine App</h4>

  <p>
    This app is used to track machines in real-time and monitor their activity.
  </p>

  <ul>
    <li>Track machine distance covered</li>
    <li>View current machine status</li>
    <li>Start / Stop machine tracking</li>
  </ul>

  <div className="images">
    <img src={img1} alt="Machine App" />
    <img src={img2} alt="Machine App" />
  </div>

  {/* ✅ MACHINE APK */}
  <a
    href="https://drive.google.com/uc?export=download&id=1fkf0MESoF5LurW_X84rRWCexf0ZAxc4C"
    target="_blank"
    rel="noopener noreferrer"
    className="apk-btn"
  >
    📲 Download Machine App
  </a>
</div>


{/* 🔥 APP 2 */}
<div className="app-section">
  <h4>Agrix Implement Partners App</h4>

  <p>
    This app is used by partners (implement owners) and admins.
  </p>

  <ul>
    <li>Admin can view all implements and partner data</li>
    <li>Partners can access only their own implements</li>
    <li>View cultivation history (area-wise)</li>
    <li>Check current implement status</li>
  </ul>

  <div className="images">
    <img src={img1} alt="Machine App" />
    <img src={img2} alt="Machine App" /> 
    <img src={img3} alt="Partner App" />
    <img src={img4} alt="Partner App" />
  </div>

  {/* ✅ PARTNER APK */}
  <a
    href="https://drive.google.com/uc?export=download&id=15VObd1MVHmAMv_041OyNXEx3IO_JXvmK"
    target="_blank"
    rel="noopener noreferrer"
    className="apk-btn"
  >
    📲 Download Partner App
  </a>
</div>

    </section>
  );
}

export default Experience;