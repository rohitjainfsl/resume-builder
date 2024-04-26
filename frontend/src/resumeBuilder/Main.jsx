import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NewResume from "./NewResume";
import Header from "./Header";
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
        <Route element={<NewResume />} path="/new" />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
