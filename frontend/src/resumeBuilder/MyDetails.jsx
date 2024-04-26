import React from "react";

function MyDetails() {
  return (
    <div className="relative">
      
      <div className="form-group">
        <label htmlFor="profile">Profile Picture</label>
        <input type="file" id="profile" name="profile" />
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
