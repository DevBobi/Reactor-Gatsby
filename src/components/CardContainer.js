import React from 'react';
import Button from './Button';

const CardContainer = () => (
    <div className='bg-white'>
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-8 px-6">
            <div className="flex flex-col mt-4 sm:mt-0 ">
                <h2 className=" font-normal text-4xl">
                    listen to us live
                </h2>
                <p >
                    All the rock your ears want
                </p>
            </div>
            <div className="hidden md:block text-white">
                <Button>Online</Button>
            </div>
        </div>

    </div>
);

export default CardContainer;