import React from 'react';
import SvgCharts from '../svg/SvgCharts';
import Img from '../svg/SvgCharts'
import { BsFillShareFill } from "react-icons/bs";

const Card = ({ customer }) => (
    <>
        <div className="flex flex-col pl-4 pt-3 col-span-full row-span-full lg:col-span-6 lg:pl-6  pr-5">
            <div className='flex flex-row py-3'>
                <div className="bg-contain max-w-sm pr-5 pt-5">
                    <img src={customer?.img} />
                </div>
                <div className='py-3'>
                    <h1 className="text-2xl font-normal mr-2 flow-root">{customer.title}</h1>
                    {/* ::CARD FOOTER */}
                    <div className="py-3 flex flex-wrap content-start border-t border-gray-200">
                        {/* ::Author */}
                        <span className="flex text-xs pr-3 text-blue-500 font-semibold content-start tracking-wide cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            {customer?.author}
                        </span>
                        {/* ::Date */}
                        <span className=" flex text-xs pr-3 text-blue-500 font-semibold content-start tracking-wide cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {customer?.date}
                        </span>
                        {/* ::Reading time */}
                        <span className=" flex text-xs pr-3 text-blue-500 font-semibold content-start tracking-wide cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {customer?.readingTime}
                        </span>
                    </div>
                    <div className="flex-1 pt-2 pr-10 mr-2 flow-root">
                        <p >{customer?.desc}</p>
                        <div className="flex space-x-2 py-2">
                            <span className="self-center text-medium">Share this:</span>
                        </div>
                    </div>
                    <div >
                        <button className='px-2 py-1 flex border rounded text-black-50 text-xs'>
                            <span className='pt-1 pr-2'><BsFillShareFill /></span>
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-concrete mt-10' />
        </div>
    </>

);

export default Card;