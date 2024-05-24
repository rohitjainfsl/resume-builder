import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between px-10 h-[3rem] items-center shadow-sm mb-4">
      <h1><Link to="/">Resume Builder</Link></h1>
      <ul>
        <Link to='/test'>Test Page</Link>
        <li>
          Welcome <strong>User</strong>
        </li>
      </ul>
    </header>
  );
}

export default Header;
