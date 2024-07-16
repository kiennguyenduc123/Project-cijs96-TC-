import './MenHome.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
const MenHome = (props) => {
    const { products,search,onProductClick } = props;

    const filteredProductsMen = products.filter((product) =>  {
        return  product.name.toLowerCase().includes(search.toLowerCase())
    })

    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const addToCart = (itemId) => {
        const updatedCartItems = { ...cartItems };
    
        if (!updatedCartItems[itemId]) {
            updatedCartItems[itemId] = 1;
        } else {
            updatedCartItems[itemId]++;
        }
    
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
    
    const removeFromCart = (itemId) => {
        const updatedCartItems = { ...cartItems };
    
        if (updatedCartItems[itemId] > 0) {
            updatedCartItems[itemId]--;
            
            if (updatedCartItems[itemId] === 0) {
                delete updatedCartItems[itemId];
            }
            
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
    };



    return ( 
        <div className='product_listz'>
            <div className='categoryz'>Thời Trang Mặc Nhà</div>
            <div className="productsz">
                {filteredProductsMen.length > 0 ? (
                    filteredProductsMen.map((product, index) => (
                        <div className="products_ax" key={index} onClick={() => onProductClick(product)}>
                            <img src={product.image} alt={product.name} />
                            <div className="productsz-detail">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                                <div className='add-remove-container'>
                                    {!cartItems[product.id] ? (
                                        <FontAwesomeIcon icon={faPlus} className="add" onClick={() => addToCart(product.id)} />
                                    ) : (
                                        <div className='product-item-counter'>
                                            <FontAwesomeIcon icon={faMinus} onClick={() => removeFromCart(product.id)} />
                                            <p>{cartItems[product.id]}</p>
                                            <FontAwesomeIcon icon={faPlus} onClick={() => addToCart(product.id)} />
                                        </div>
                                    )}
                                </div>
                                <button className="add-to-cart-btnsj" >
                                    Add modal
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Không có sản phẩm nào</p>
                )}
            </div>
        </div>
    );
}

export default MenHome;