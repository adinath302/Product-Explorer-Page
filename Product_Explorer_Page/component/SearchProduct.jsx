import { Typography } from '@material-tailwind/react';
import React, { useState } from 'react'
import Slider from 'react-slick';

const SearchProduct = ({ setSearch, search, SetCategory, min, max, setMin, setMax, defaultMax, setIscheckbox, ischeckbox, setSortData, sortdata, setReset }) => {
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
    const HandleSearch = (event) => {
        setSearch(event.target.value);
    }
    return (
        <div className='flex flex-wrap md:flex-row gap-3 p-3 rounded-md bg-gray-100 items-start'>
            {/* Search  */}
            <input
                value={search}
                type="text"
                className=' shadow-inner shadow-gray-200 bg-white focus:outline-none rounded-md p-2 px-2 border font-semibold'
                placeholder='Search....'
                onChange={HandleSearch} />
            {/* Category */}
            <div className=''>
                <select
                    className='shadow-inner shadow-gray-200 bg-whitefocus:outline-none rounded-md p-2 px-2 border  font-semibold' onChange={(e) => SetCategory(e.target.value)}>
                    <option value="">Category</option>
                    <option value="All">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                    <option value="Fitness & Outdoor">Fitness & Outdoor</option>
                </select>
            </div>

            {/* Price range Slider */}
            <div>
                <span className="text-sm font-semibold">Min: </span>
                <input
                    type="number"
                    id='min'
                    min='0'
                    max={1000}
                    placeholder='Min'
                    value={min}
                    onChange={HandleMinChange}
                    className='bg-white shadow-inner shadow-gray-200 focus:outline-none rounded-md  p-2 px-2 border  font-semibold w-24  border-gray-300 text-md focus:border-indigo-500 text-sm'
                />
            </div>
            <div>
                <span className="text-sm ml-2 font-semibold">Max: </span>
                <input
                    type="number"
                    min={min}
                    value={max}
                    onChange={HandleMaxChange}
                    placeholder='Max'
                    className='bg-white shadow-inner shadow-gray-200 focus:outline-none rounded-md  p-2 px-2 border  font-semibold w-24  border-gray-300 text-md focus:border-indigo-500 text-sm'
                />
            </div>

            <div className='bg-white shadow-inner shadow-gray-200 focus:outline-none rounded-md p-2 px-2 border font-semibold'>
                <span>In-stock: </span>
                <input
                    type="checkbox"
                    checked={ischeckbox}
                    onChange={Handlechebox}
                    className='text-2xl'
                />
            </div>
            <div className='bg-white shadow-inner shadow-gray-200 focus:outline-none rounded-md  p-2 px-2 border  font-semibold'>
                <select name="" id="" value={sortdata} onChange={HandleSort} className='focus:outline-none'>
                    <option value="Low → High">Low → High</option>
                    <option value="High → Low">High → Low</option>
                </select>
            </div>
            {/* reset Filter  */}
            <div
                onClick={() => setReset(true)}
                className='text-red-500 select-none font-semibold p-2 px-2 shadow-inner shadow-gray-200 rounded-md bg-white cursor-pointer border'>
                Reset Filter
            </div>
        </div>

    )
}

export default SearchProduct;