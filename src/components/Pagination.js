import React from 'react';
import Button from './Button';

const Pagination = () => (
    <div div className='bg-white'>
        <div className="container flex flex-col sm:flex-row justify-around items-center mx-auto py-5 px-6">
            <div className="hidden md:block text-black hover:border-concrete hover:border hover:rounded">
                <Button>Left</Button>
            </div>
            <div className="hidden md:block text-black hover:border-concrete hover:border hover:rounded">
                <Button>Right</Button>
            </div>
        </div>
        <hr className='border' />
    </div>
);

export default Pagination;