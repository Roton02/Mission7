

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


  
  <div className="relative  ">
      <input
        type="text"
        className="w-16 lg:w-40 h-8 py-2 pl-12 pr-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Search..."
      />
      <svg
        className="absolute top-0 left-0 w-5 h-full mt-2 ml-3 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m5.2-5.2a8 8 0 10-15.2-2.8 8 8 0 0015.2 2.8z"
        />
      </svg>
    </div>
  


    <a className="btn rounded-full bg-green-600 w-4">< CgProfile /> </a>
  </div>
</div>
        </div>
    );
};

export default Header;