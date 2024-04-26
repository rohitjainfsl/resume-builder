import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function AboutMe() {
  return (
    <div className="relative">
      <div className="form-group">
        <label htmlFor="aboutme">About Me</label>
        <textarea
          name="aboutme"
          id="aboutme"
          cols="30"
          rows="10"
          placeholder="Write summary about you"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="aboutmepointers">Pointers</label>
        <input
          type="text"
          name="aboutmepointers"
          id="aboutmepointers"
          placeholder="Write bullet points about you"
        />
        <button>
          <AddCircleOutlineIcon />
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
