import React, { useEffect, useMemo, useState } from 'react';
import SearchProduct from './component/SearchProduct.jsx';
import Productdata from './component/ProductData.json';
import ProducList from './component/ProducList.jsx';
import Footer from './component/Footer.jsx';
import FilterProduct from '../Product_Management_Dashboard/Components/FilterProduct.jsx';

const Product_Explorer_Page = () => {

    const ABSOLUTE_MAX_PRICE = 1000;
    const [product, setProduct] = useState(Productdata);
    const [search, setSearch] = useState('')
    const [category, SetCategory] = useState('All')
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(ABSOLUTE_MAX_PRICE);
    const [Ischeckbox, setIscheckbox] = useState(false);
    const [currentpage, setCurrentPage] = useState(1);
    const [sortdata, setSortData] = useState('')
    const itemPerPage = 6;
    const [reset, setReset] = useState(false);

    const filteredPages = useMemo(() => {
        // duplicate the same filtering logic but WITHOUT slicing so we get the total count
        let ProductData = [...product];

        if (search) {
            ProductData = ProductData.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category !== 'All') {
            ProductData = ProductData.filter(item => item.category === category);
        }

        const safeMin = Math.min(minPrice, maxPrice);
        const safeMax = Math.max(minPrice, maxPrice);

        ProductData = ProductData.filter(item => {
            const productPrice = item.price;
            return productPrice >= safeMin && productPrice <= safeMax;
        });

        if (Ischeckbox) {
            ProductData = ProductData.filter(item => item.inStock === true);
        }
        if (sortdata === "Low → High") {
            ProductData = ProductData.sort((a, b) => a.price - b.price)
        }
        if (sortdata === "High → Low") {
            ProductData = ProductData.sort((a, b) => b.price - a.price)
        }
        if (reset === true) {
            setIscheckbox(false);
            setSortData('');
            setMinPrice(0);
            SetCategory('All');
            setSearch('');
            setCurrentPage(1);
        }
        return ProductData;
    }, [product, search, category, minPrice, maxPrice, Ischeckbox, sortdata, reset]);

    const pages = useMemo(() => {
        const totalNumber = filteredPages.length;
        const pageNumber = Math.max(1, Math.ceil(totalNumber / itemPerPage));
        return Array.from({ length: pageNumber }, (_, i) => i + 1);
    }, [filteredPages, itemPerPage])

    const productToDisplay = useMemo(() => { // slicing the Array to display
        const startIndex = (currentpage - 1) * itemPerPage;
        const endIndex = startIndex + itemPerPage;
        return filteredPages.slice(startIndex, endIndex);
    }, [filteredPages, currentpage, itemPerPage]);

    useEffect(() => { // reset page to 1 if any filter change
        if (currentpage > pages.length) {
            setCurrentPage(1);
        }
    }, [search, category, minPrice, maxPrice, Ischeckbox, pages.length]);

    useEffect(() => { // ensure currentpage is never 0 or greater than the max page count
        if (currentpage < 1) setCurrentPage(1);
        if (currentpage > pages.length && pages.length > 0) setCurrentPage(pages.length);
    }, [currentpage, pages.length])

    return (
        <div className='flex flex-col p-2'>
            <h4>Prodcut explore</h4>
            <div className='flex-col flex gap-3'>
                <SearchProduct
                    min={minPrice}
                    max={maxPrice}
                    setMin={setMinPrice}
                    setMax={setMaxPrice}
                    defaultMax={ABSOLUTE_MAX_PRICE}
                    SetCategory={SetCategory}
                    setSearch={setSearch}
                    search={search}
                    Ischeckbox={Ischeckbox}
                    setIscheckbox={setIscheckbox}
                    setSortData={setSortData}
                    sortdata={sortdata}
                    setReset={setReset}
                />
                <ProducList productToDisplay={productToDisplay} />
                <Footer pages={pages} setCurrentPage={setCurrentPage} currentpage={currentpage} />
            </div>
        </div>
    )
}

export default Product_Explorer_Page;