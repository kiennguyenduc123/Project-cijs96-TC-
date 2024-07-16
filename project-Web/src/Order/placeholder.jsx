import Navbarjs from '../contact/Navbarjs';
import './placeholder.css'
import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
const Placeholder = () => {
 
    const { productzh } = useContext(StoreContext);
    const [cartItems, setCartItems] = useState({});

    
    const navigate = useNavigate();

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        
        Object.keys(cartItems).forEach(itemId => {
            const quantity = cartItems[itemId];
            const iteminfo = productzh.find(product => product.id === itemId);
            if (iteminfo && quantity > 0) {
                totalAmount += iteminfo.price * quantity;
            }
        });
    
        return totalAmount;
    };

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const handleClick = () => {
        alert('Bạn Đã Thanh Toán Thành Công. Xin Cảm Ơn!');
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (

      <>
         <div><Navbarjs /></div>

    <form className='place-holder'>
        <div className="place-holder-left">
            <p className='titless'>Delivery Information</p>
            <div className="multi-fields">
                <input type="text"  placeholder='First name'/>
                <input type="text"  placeholder='Last name'/>
            </div>
            <input type="email" placeholder='Email address' />
            <input type="text"  placeholder='Street'/>
            <div className="multi-fields">
                <input type="text" placeholder='City' />
                <input type="text" placeholder='State' />
            </div>
            <div className="multi-fields">
                <input type="text"  placeholder='Zip code'/>
                <input type="text"  placeholder='Country'/>
            </div>
            <input type="text" placeholder='Phone' />
        </div>
        <div className='place-holder-right'>
            <div className='cart-total'>
                        <h2>Cart Totals</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>{getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>{getTotalCartAmount()===0 ? 0 : 30}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>{getTotalCartAmount()===0 ? 0 : getTotalCartAmount() + 30}</b>
                            </div>
                        </div>
                        <button onClick={handleClick}>PROCEED TO PAYMENT</button>
            </div>
        </div>
    </form>
      </>
    )
}

export default Placeholder;