import React from 'react';
import { Link } from 'gatsby';
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

const Header = () => (
  <header className="scroll top-0 bg-black shadow py-5">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        Bytes Logic
      </div>
      <div class="my-4">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search" />
        <div>
          <div className="flex mr-3 pt-3">
            <div className="pr-3">
              <Link to='/'>
                <p class="text-2xl">  <FaFacebook /></p>
              </Link>
            </div>
            <div className="pr-3">
              <Link to='/'>
                <p class="text-2xl">  <FaFacebook /></p>
              </Link>
            </div>
            <div className="pr-3">
              <Link to='/'>
                <p class="text-2xl">  <FaFacebook /></p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
