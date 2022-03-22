import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from './Button';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

const ComponentHeader = () => (
    <header className='bg-black-olive my-1'>
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-3 px-4">
            <div className="flex mt-4 sm:mt-0">
                <AnchorLink className="pr-4 text-white font-medium" href="#news">
                    News
                </AnchorLink>
                <AnchorLink className="pr-4 text-white font-medium" href="#events">
                    Events
                </AnchorLink>
            </div>
            <div className="hidden md:block text-white">
                <FaSearch />
            </div>
        </div>
    </header>
);

export default ComponentHeader;