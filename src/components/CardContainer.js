import React from 'react';
import customerData from '../data/card-data';
import Button from './Button';
import Card from './Card';

const CardContainer = () => (
    <div className='bg-white'>
        {/* card top section */}
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-5 px-10">
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

        <div className='flex flex-col sm:flex-row  lg:col-span-6 px-4'>
            <div className='justify-start'>
                {customerData.map(customer => (
                    <div key={customer.author} className="flex-1">
                        <Card customer={customer} />
                    </div>
                ))}
            </div>

            {/*<------Side Card------>  */}
            <div className='content-start md:hidden sm:hidden lg:block pt-10 pr-10 '>
                <div className="max-w-lg bg-cover">
                    <img src='http://reacktor.com/wp-content/uploads/2016/04/cropped-bannerreacktor.jpg' />
                </div>
            </div>
        </div>
    </div>
);

export default CardContainer;