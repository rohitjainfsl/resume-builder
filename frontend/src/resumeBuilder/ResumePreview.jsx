import { useContext } from "react";
import { resumeContext } from "./Main";

function ResumePreview() {
  const { formData } = useContext(resumeContext);
  return (
    <div className="resumePreview w-1/2">
      <div className="my-details flex">
        <div className="profile w-1/2">
          <img
            src={formData?.profile ? URL.createObjectURL(formData.profile) : ""}
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
