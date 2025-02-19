import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-around items-center">
      <div className="flex justify-center"><h1 className=" font-bold">🐼Logo</h1></div>
      <div className="flex itesm-center justify-center text-xl gap-10">
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/properties" className="mr-4 hover:underline">Search</Link>
        <Link to="/favorites" className="mr-4 hover:underline">Favorites</Link>
        <Link to="/messages" className="hover:underline">Messages</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
