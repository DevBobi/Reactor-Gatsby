import React from 'react';
import { Link } from 'gatsby';
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

const Header = () => (
  <header className="scroll top-0 bg-black shadow py-3">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl text-white">
        {/* Bytes Logic */}
      </div>
      <div class="my-4 md:justify-center">
        <input class="shadow appearance-none border bg-concrete rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Look for.." />
        <div>
          <div className="flex  justify-end pt-3 ">
            <div className="pl-3">
              <Link to='/'>
                <p class="text-3xl text-concrete hover:text-facebook">  <FaFacebook /></p>
              </Link>
            </div>
            <div className="pl-3">
              <Link to='/'>
                <p class="text-3xl text-concrete hover:text-twitter">  <FaTwitter /></p>
              </Link>
            </div>
            <div className="pl-3">
              <Link to='/'>
                <p class="text-3xl text-concrete hover:text-insta">  <FaInstagram /></p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
