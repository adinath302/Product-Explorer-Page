import React from 'react'
import { motion } from 'framer-motion';
const Footer = ({ pages, setCurrentPage, currentpage }) => {
    return (
        <div className='flex gap-3 items-center justify-center'>
            <div
                onClick={() => setCurrentPage(currentpage - 1)}
                className='px-3 p-2 cursor-pointer rounded-md bg-blue-400 font-semibold hover:bg-blue-500'>
                prev
            </div>
            <motion.div
                className='flex gap-2 items-center justify-center'
            >
                {pages && pages.map((page, index) => {
                    return (
                        <div key={index}
                            onClick={() => setCurrentPage(page)}
                            className={`p-2 px-3 cursor-pointer hover:bg-gray-200 bg-gray-100 rounded-md transition-all duration-150 font-bold ${page === currentpage ? 'bg-gray-200' : ''} `}
                        >
                            <div>{page}</div>
                        </div>
                    )
                })}
            </motion.div>
            <div
                onClick={() => setCurrentPage(currentpage + 1)}
                className='px-3 p-2 cursor-pointer rounded-md bg-blue-400 font-semibold hover:bg-blue-500'>
                Next
            </div>
        </div>
    )
}

export default Footer;