import React from 'react';
import SvgCharts from '../svg/SvgCharts';
import Img from '../svg/SvgCharts'

const Card = ({ customer }) => (
    <div>
        <div className="dark:bg-coolGray-800 dark:text-coolGray-50">
            <div className="container grid grid-cols-12 mx-auto dark:bg-coolGray-900">
                <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                    <div className='flex flex-row'>
                        <div className="relative w-25 overflow-hidden pr-5 pt-5">
                            <img src={customer?.img} />
                        </div>

                        <div>
                            <h1 className="text-3xl font-normal">{customer.title}</h1>
                            {/* ::CARD FOOTER */}
                            <div className="py-3 flex flex-wrap justify-around border-t border-gray-200">
                                {/* ::Author */}
                                <span className="py-0.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    {customer?.author}
                                </span>
                                {/* ::Date */}
                                <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {customer?.date}
                                </span>
                                {/* ::Reading time */}
                                <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    {customer?.readingTime}
                                </span>
                            </div>

                            <p className="flex-1 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>

                            <div className="flex items-center justify-between pt-2">
                                <div className="flex space-x-2">

                                    <span className="self-center text-sm">by Leroy Jenkins</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Card;