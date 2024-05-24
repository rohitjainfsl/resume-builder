import { useState } from "react";
import axios from "axios";

function TestPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [isDataSaved, setIsDataSaved] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("profile", profile);

    axios
      .post("http://localhost:8000/resume/test", data)
      .then((res) => {
        if (res.data) setIsDataSaved(true);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      {isDataSaved ? <p className="alert alert-success">Data Saved</p> : ""}
      <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        <br />
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="">Profile Picture</label>
        <input
          type="file"
          onChange={(e) => setProfile(e.target.files[0])}
          name="profile"
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
export default TestPage;
