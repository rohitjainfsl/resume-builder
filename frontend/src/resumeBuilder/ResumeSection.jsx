import { Outlet } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function ResumeSection() {
  return (
    <div className="resumeSection w-1/2">
      <form method="post" encType="multipart/form-data">
        <div className="form-group">
          <button className="next bg-green-500 text-white rounded px-2">
            Next <ArrowRightAltIcon />
          </button>
        </div>
        <Outlet />
      </form>
    </div>
  );
}

export default ResumeSection;
