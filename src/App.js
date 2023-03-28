import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Sessions from "./pages/Sessions";

import Coursecard from "./components/Coursecard";
import Certificate from "./components/Certificate";
import CourseOverview from "./pages/CourseOverview";
import CourseContent from "./pages/CourseContent";
import About from "./pages/About";
import ServicesPricing from "./pages/ServicesPricing";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="" element={<Coursecard />} />
          <Route path="mycourses" element={<Coursecard type="bought" />} />
          <Route path="certificates" element={<Certificate />} />
        </Route>
        <Route
          path="/courses/coursename/coursemodules"
          element={<CourseOverview />}
        />
        <Route path="/coursename/coursecontent" element={<CourseContent />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/services&pricing" element={<ServicesPricing />} />
        <Route path="/about-eigthnote-studios" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
