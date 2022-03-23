import React from 'react';
import customerData from '../data/customer-data';
import Button from './Button';
import Card from './Card';

const CardContainer = () => (
    <div className='bg-white'>
        {/* card container  */}
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-5 px-6">
            <div className="flex flex-col mt-4 sm:mt-0 ">
                <h2 className=" font-normal text-3xl">
                    Escuchanos en vivo
                </h2>
                <p className=''>
                    Todo el rock que quieren tus oidos
                </p>
            </div>
            <div className="hidden md:block text-black hover:border-concrete hover:border hover:rounded">
                <Button>On Line</Button>
            </div>
        </div>
        <hr className='border' />

        {/* <----------card ----------> */}

        <div class="flex-col basis-1/2 ">
            <div className='order-first'>
                {customerData.map(customer => (
                    <div key={customer.author} className="flex-1">
                        <Card customer={customer} />
                    </div>
                ))}

            </div>
        </div>
    </div>
);

export default CardContainer;