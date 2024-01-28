import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
// import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <div>
      <div className="header-top">
        <div
          className="text-center font-natural"
          style={{ backgroundColor: "#f4f4f4" }}
        >
          <p>World Wide Completely Free Returns and Free Shipping</p>
        </div>
        <div className="mx-20 py-8 flex justify-between bg-white">
          <div className="logo text-5xl font-bold">
            <Link to="/">Shome</Link>
          </div>
          <div className="hidden lg:flex xl:flex items-center">
            <div className="flex flex-grow px-2 items-center ">
            <input type="text" placeholder="Search..." class="border p-2 w-full"/>
            <SearchIcon className="bg-red-600" style={{height: '42', width: 'auto'}}/>

            </div>
            </div>
          <div className="icons space-x-3 text-2xl">
            <Link>
              <SearchIcon className="" />
            </Link>
            <Link>
              <FavoriteBorderIcon />
            </Link>
            <Link>
              <LocalMallIcon />
            </Link>
            <Link to="/register">
              <AccountCircleIcon />
            </Link>

            {/* <Link><MenuIcon/></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
