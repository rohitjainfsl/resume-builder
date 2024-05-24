import { useContext, useEffect, useState } from "react";
import { resumeContext } from "./Main";

function MyDetails() {
  const { formData, setFormData } = useContext(resumeContext);
  const [profilePhoto, setProfilePhoto] = useState("")

  function handleProfilePhoto(e){
    setProfilePhoto(e.target.value)
    console.log(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]))
  }

  // useEffect(() => {
  //   formData?.profile?.length > 0 ? console.log(formData.profile) : "";
  // }, [formData.profile]);

  // console.log(formData?.profile?.name);

  return (
    <div className="relative">
      <div className="form-group">
        <label htmlFor="profile">Profile Picture</label>
        <input
          type="file"
          id="profile"
          name="profile"
          value={profilePhoto}
          // onChange={(e) => {
          //   console.log(e.target.files[0]);
          //   setFormData({ ...formData, profile: e.target.files[0] });
          // }}
          onChange={handleProfilePhoto}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" />
      </div>

      <div className="form-group">
        <label htmlFor="role">Role</label>
        <input type="text" id="role" name="role" placeholder="Role" />
      </div>

      <div className="form-group">
        <label htmlFor="totalExp">Total Experience</label>
        <input type="text" id="totalExp" name="totalExp" />
        <small>Years</small>
      </div>
    </div>
  );
}

export default MyDetails;
