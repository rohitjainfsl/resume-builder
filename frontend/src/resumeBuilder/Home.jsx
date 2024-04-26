import React from "react";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Home() {
  return (
    <main className="px-10">
      <div className="createNew">
        <Link to="/new" className="text-green-500 inline-flex flex-col items-center border-2 border-green-500 p-2 rounded-md hover:bg-green-500 hover:text-white"><AddCircleOutlineIcon /> Add New Resume</Link>
      </div>
    </main>
  );
}

export default Home;
