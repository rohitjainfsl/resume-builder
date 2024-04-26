import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NewResume from "./NewResume";
import NewResumeWrapper from "./NewResumeWrapper";
import Header from "./Header";
import MyDetails from "./MyDetails";
import AboutMe from "./AboutMe";
import SkillsProficiencies from "./SkillsProficiencies";
import WorkExperiences from "./WorkExperiences";
import "./resumeBuilder.css";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Header /> <Home />
            </>
          }
          path="/"
        />
        <Route element={<NewResumeWrapper />} path="/new">
          <Route index element={<NewResume />} />
          <Route element={<MyDetails />} path="my-details" />
          <Route element={<AboutMe />} path="about-me" />
          <Route
            element={<SkillsProficiencies />}
            path="skills-and-proficiencies"
          />
          <Route
            element={<WorkExperiences />}
            path="work-experiences"
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
