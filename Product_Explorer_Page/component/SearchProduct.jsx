import { Typography } from '@material-tailwind/react';
import React, { useState } from 'react'
import Slider from 'react-slick';

const SearchProduct = ({ setSearch, search, SetCategory, min, max, setMin, setMax, defaultMax, setIscheckbox, ischeckbox, setSortData, sortdata }) => {
    const HandleMinChange = (e) => {
        const value = Number(e.target.value) || 0;
        setMin(value);
    }

    const HandleMaxChange = (e) => {
        const value = Number(e.target.value) || defaultMax;
        setMax(value);
    }
    const Handlechebox = (e) => {
        setIscheckbox(e.target.checked);
    }

    const HandleSort = (e) => {
        setSortData(e.target.value);
    }

    return (
        <div className='flex gap-3 p-3 rounded-md bg-gray-100'>
            {/* Search  */}
            <div className=''>
                <input
                    value={search}
                    type="text"
                    className='bg-white shadow-indigo-300 focus:outline-none rounded-md  p-2 px-2 border font-semibold'
                    placeholder='Search....'
                    onChange={(e) => setSearch(e.target.value)} />
            </div>
            {/* Category */}
            <div className=''>
                <select
                    name=""
                    id=""
                    className='bg-white shadow-indigo-300 focus:outline-none rounded-md p-2 px-2 border  font-semibold' onChange={(e) => SetCategory(e.target.value)}>
                    <option value="">Category</option>
                    <option value="All">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                    <option value="Fitness & Outdoor">Fitness & Outdoor</option>
                </select>
            </div>

            {/* Price range Slider */}
            <div className='flex items-center gap-2'>
                <div className='bg-white shadow-indigo-300 focus:outline-none rounded-md p-[11px] border font-semibold '>
                    <span className="text-gray-500 text-sm ">Min: </span>
                    <input
                        type="number"
                        id='min'
                        min='0'
                        max={1000}
                        placeholder='Min'
                        value={min}
                        onChange={HandleMinChange}
                        className='w-24 p-1 border border-gray-300 rounded-lg text-md focus:outline-none focus:border-indigo-500 text-sm'
                    />
                    <span className="text-sm ml-2">Max: </span>
                    <input
                        type="number"
                        min={min}
                        value={max}
                        onChange={HandleMaxChange}
                        placeholder='Max'
                        className='w-24 p-1 border border-gray-300 rounded-lg text-md focus:outline-none focus:border-indigo-500 text-sm'
                    />

                </div>
                <div className='bg-white shadow-indigo-300 focus:outline-none rounded-md p-2 px-2 border  font-semibold'>
                    <span>In-stock: </span>
                    <input
                        type="checkbox"
                        checked={ischeckbox}
                        onChange={Handlechebox}
                        className='text-2xl'
                    />
                </div>
                <div className='bg-white shadow-indigo-300 focus:outline-none rounded-md  p-2 px-2 border  font-semibold'>
                    <select name="" id="" value={sortdata} onChange={HandleSort} className='focus:outline-none'>
                        <option value="Low → High">Low → High</option>
                        <option value="High → Low">High → Low</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SearchProduct;