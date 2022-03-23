import React from 'react';
import customerData from '../data/customer-data';
import Button from './Button';
import Card from './Card';

const CardContainer = () => (
    <div className='bg-white'>
        {/* card container  */}
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-5 px-6">
            <div className="flex flex-col mt-4 sm:mt-0 ">
                <h2 className=" font-normal text-4xl">
                    listen to us live
                </h2>
                <p >
                    All the rock your ears want
                </p>
            </div>
            <div className="hidden md:block text-black border-black hover:border rounded">
                <Button>On line</Button>
            </div>
        </div>
        <hr className='border' />

        {/* <----------card ----------> */}

        <div class="flex-col basis-1/2 ">
            <div className='order-first'>
                {customerData.map(customer => (
                    <div key={customer.author} className="flex-1 px-3">
                        <Card customer={customer} />
                    </div>
                ))}
                {/* <Card /> */}
            </div>
        </div>
    </div>
);

export default CardContainer;