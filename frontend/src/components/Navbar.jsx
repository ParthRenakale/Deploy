
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isUserSignedIn = !!localStorage.getItem('token'); 

  return (
    <nav className="bg-black border-b border-gray-800 flex justify-between items-center text-white">
      <NavLink to="/">
        <div className="logo">
          <img src="./image.png" alt="To-Let Logo" className="h-20" />
        </div>
      </NavLink>

      <ul className="flex space-x-6 text-sm p-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400" : "hover:bg-teal-500 px-2 py-1 rounded"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400" : "hover:bg-teal-500 px-2 py-1 rounded"
            }
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400" : "hover:bg-teal-500 px-2 py-1 rounded"
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400" : "hover:bg-teal-500 px-2 py-1 rounded"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400" : "hover:bg-teal-500 px-2 py-1 rounded"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/property"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400" : "hover:bg-teal-500 px-2 py-1 rounded"
            }
          >
            Property Listing
          </NavLink>
        </li>
        {!isUserSignedIn ? (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400" : "hover:bg-teal-500 px-2 py-1 rounded"
              }
            >
              Login
            </NavLink>
          </li>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              className="hover:bg-teal-500 px-2 py-1 rounded bg-teal-400"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

