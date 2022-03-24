import React from 'react';
import Button from './Button';
import { IoIosArrowRoundBack } from "react-icons/io";

const Pagination = () => (
    <div div className='bg-white'>
        <div className="container flex flex-col sm:flex-row justify-around items-center mx-auto py-5 px-6">
            <div >
                <button className=" flex-wrap px-2 py-1 hidden md:block text-blue-500">
                    <span><IoIosArrowRoundBack /></span> <span>Old articles</span>
                </button>
            </div>
            <div className="hidden md:block text-black hover:border-concrete hover:border hover:rounded">

            </div>
        </div>
        <hr className='border' />
    </div>
);

export default Pagination;