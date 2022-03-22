import React from 'react';
import Button from './Button';
import Card from './Card';
import SvgCharts from '../svg/SvgCharts';

const CardContainer = () => (
    <div className='bg-white'>
        {/* card container header */}
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-5 px-6">
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
        <hr className='border' />
        <div class="flex-col basis-1/2 ">
            <div className='order-first'>
                <Card />
            </div>

            <div>09</div>
        </div>
    </div>
);

export default CardContainer;