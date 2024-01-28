import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
      <div className="top-header bg-[#26292e] text-white px-8 py-10">
        <div className="logo text-5xl font-bold  ">
          <Link to="/">Shome</Link>
        </div>
          <p className="pt-3 w-[70%] pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            similique amet magni sequi soluta eius
          </p>
          <ul className="flex pt-2 space-x-2">
            <li className="cursor-pointer hover:underline">
                <FacebookIcon/>
            </li>
            <li className="cursor-pointer hover:underline">
                <LanguageIcon/>
            </li>
            <li className="cursor-pointer hover:underline">
                <PinterestIcon/>
            </li>
            <li className="cursor-pointer hover:underline">
                <TwitterIcon/>
            </li>
          </ul>
      </div>

      <div className="tags bg-[#26292e] flex flex-wrap text-sm font-normal tracking-normal   text-white">
        <div className="fBlock m-2 p-4 lg:mx-8 lg:px-4 lg:ml-20 ">
          <ul className="leading-7">
            <h2 className="font-semibold lg:text-base text-xl">Services</h2>
            <li className="cursor-pointer hover:underline">Home monitoring</li>
            <li className="cursor-pointer hover:underline">Air Filters</li>
            <li className="cursor-pointer hover:underline">
              Professional installation
            </li>
            <li className="cursor-pointer hover:underline">Smart Buildings</li>
            <li className="cursor-pointer hover:underline">For contractors</li>
          </ul>
        </div>

        <div className="fBlock m-2 p-4 lg:mx-8 lg:px-4">
          <ul className="leading-7">
            <h2 className="font-semibold lg:text-base text-xl">My Account</h2>
            <li className="cursor-pointer hover:underline">My Account</li>
            <li className="cursor-pointer hover:underline">Contact</li>
            <li className="cursor-pointer hover:underline">Shopping cart</li>
            <li className="cursor-pointer hover:underline">Shop</li>
            <li className="cursor-pointer hover:underline">Services Login</li>
          </ul>
        </div>

        <div className="fBlock m-2 p-4 lg:mx-8 lg:px-4">
          <ul className="leading-7">
            <h2 className="font-semibold lg:text-base text-xl">Contact Info</h2>
            <li className="cursor-pointer hover:underline">
              Address: Your address goes here.
            </li>
            <li className="cursor-pointer hover:underline">
              Phone//fax:0123456789
            </li>
            <li className="cursor-pointer hover:underline">
              Email: demo@example.com
            </li>
            <li className="cursor-pointer hover:underline">www.example.com</li>
          </ul>
        </div>

        <footer className="bg-[#36393f] tracking-wider text-center w-full">
          <div className="">
            <ul className="flex flex-wrap text-md font-light justify-evenly p-4">
              <p className="mx-2 py-2 text-base">
                &copy; 2024 Shome. Made with &hearts; by Sparsh Bhardwaj
              </p>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
