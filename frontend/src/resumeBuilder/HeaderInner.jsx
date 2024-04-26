import { NavLink } from "react-router-dom";
import PaymentIcon from "@mui/icons-material/Payment";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

function HeaderInner() {
  return (
    <aside className="header-inner h-screen w-1/5 p-4 bg-slate-200">
      <h1 className="mb-5">
        <NavLink to="/">Resume Builder</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink
            to="my-details"
            className="flex items-center w-full inline-block p-2 mb-4 rounded-md bg-slate-500 text-white"
          >
            <PaymentIcon className="icon mr-2" /> My Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about-me"
            className="flex items-center w-full inline-block p-2 mb-4 rounded-md bg-slate-500 text-white"
          >
            <InfoOutlinedIcon className="icon mr-2" /> About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="skills-and-proficiencies"
            className="flex items-center w-full inline-block p-2 mb-4 rounded-md bg-slate-500 text-white"
          >
            <SettingsSuggestOutlinedIcon className="icon mr-2" /> Skills &
            Proficiencies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="work-experiences"
            className="flex items-center w-full inline-block p-2 mb-4 rounded-md bg-slate-500 text-white"
          >
            <BusinessCenterOutlinedIcon className="icon mr-2" /> Work
            Experiences
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default HeaderInner;
