import { CgProfile } from "react-icons/cg";
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 items-center ">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl"><h1 className="text-2xl font-bold">Kynas Food</h1></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1">
      <li><a>Home</a></li>
      <li><a>Recipe</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end space-x-2">
  <input type="text" placeholder="Search"
   className="input input-bordered w-24 md:w-48 h-8 " />
    <a className="btn rounded-full bg-green-600"> <CgProfile /></a>
  </div>
</div>
        </div>
    );
};

export default Header;