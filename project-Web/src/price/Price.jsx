import React, { useState } from 'react';
import './Price.css';

const Price = ({ products, onProductClick }) => {
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);

    const handlePriceChange = (event) => {
        setSelectedPriceRange(event.target.value);
    };

    const filterProductsByPrice = () => {
        switch (selectedPriceRange) {
            case '0-50':
                return products.filter(product => parseFloat(product.price) >= 0 && parseFloat(product.price) <= 50);
            case '50-100':
                return products.filter(product => parseFloat(product.price) > 50 && parseFloat(product.price) <= 100);
            case '100-200':
                return products.filter(product => parseFloat(product.price) > 100 && parseFloat(product.price) <= 200);
            case 'over-200':
                return products.filter(product => parseFloat(product.price) > 200);
            default:
                return products;
        }
    };

    const filteredProducts = selectedPriceRange ? filterProductsByPrice() : products;

    return (
        <div className='ml'>
            <h2 className='title-price'>Price</h2>

            <label className='label-container'>
                <input type="radio" name="priceRange" value="all" checked={!selectedPriceRange} onChange={handlePriceChange} />
                <span className='checkmark'></span> All
            </label>
            
            <label className='label-container'>
                <input type="radio" name="priceRange" value="0-50" checked={selectedPriceRange === '0-50'} onChange={handlePriceChange} />
                <span className='checkmark'></span> 0 - 50
            </label>

            <label className='label-container'>
                <input type="radio" name="priceRange" value="50-100" checked={selectedPriceRange === '50-100'} onChange={handlePriceChange} />
                <span className='checkmark'></span> 50 - 100
            </label>

            <label className='label-container'>
                <input type="radio" name="priceRange" value="100-200" checked={selectedPriceRange === '100-200'} onChange={handlePriceChange} />
                <span className='checkmark'></span> 100 - 200
            </label>

            <label className='label-container'>
                <input type="radio" name="priceRange" value="over-200" checked={selectedPriceRange === 'over-200'} onChange={handlePriceChange} />
                <span className='checkmark'></span> Over 200
            </label>
        </div>
    );
};

export default Price;
