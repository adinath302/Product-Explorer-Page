import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const ProducList = ({ productToDisplay }) => {
    return (
        <div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                <AnimatePresence >
                    {
                        productToDisplay && productToDisplay.map((item) => (
                            <motion.div
                                initial={{ opacity: 1 }}
                                amimate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                key={item.id}
                                className='hover:scale-105 hover:shadow-md transition-all shadow-inner shadow-gray-600 flex-col flex p-3 bg-gray-100 rounded-md justify-between items-center h-full'>
                                <div className='rounded-md flex items-center justify-center mb-2'>
                                    <img src={item.imageURL} className='rouded-md w-[100px] h-[100px]' alt="" />
                                </div>
                                <div>
                                    <div className='font-bold'>{item.name}</div>
                                    <div className='font-bold mt-1'>{item.price}</div>
                                    <div className='font-semibold text-sm text-gray-500'>Category: {item.category}</div>
                                    <div className='text-gray-500 text-sm'>{item.description}</div>
                                    <div className='mt-2 flex gap-2 items-center'>
                                        <div className={`${(item.instock ?? item.inStock) ? 'text-green-600' : 'text-red-600'} font-bold text-sm`}>
                                            {(item.instock ?? item.inStock) ? 'In Stock' : 'Out of Stock'}
                                        </div>
                                        <span className='text-sm'>
                                            ⭐
                                        </span>
                                        <div className='text-gray-500 text-sm'>
                                            {item.rating}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default ProducList