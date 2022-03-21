import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from './Button';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

const ComponentHeader = () => (
    <header className='bg-black-olive'>
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
            <div className="flex mt-4 sm:mt-0">
                <AnchorLink className="px-4 text-white" href="#news">
                    News
                </AnchorLink>
                <AnchorLink className="px-4 text-white" href="#events">
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