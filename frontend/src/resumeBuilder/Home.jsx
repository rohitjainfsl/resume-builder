import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Home() {
  return (
    <div className="createNew px-10">
      <Link
        to="/new"
        className="text-green-500 inline-flex flex-col items-center border-2 border-green-500 p-2 rounded-md hover:bg-green-500 hover:text-white"
      >
        <AddCircleOutlineIcon /> Add New Resume
      </Link>
    </div>
  );
}

export default Home;
