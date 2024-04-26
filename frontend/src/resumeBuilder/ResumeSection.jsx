import { Outlet, useParams } from "react-router-dom";

function ResumeSection() {
  return (
    <div className="resumeSection w-1/2">
      <Outlet />
    </div>
  );
}

export default ResumeSection;
