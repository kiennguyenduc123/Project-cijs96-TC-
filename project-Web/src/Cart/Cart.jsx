import './Cart.css';
import { StoreContext } from '../context/StoreContext';
import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Navbarjs from '../contact/Navbarjs';
const Cart = () => {
    const { productzh } = useContext(StoreContext);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

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
    
    const navigate = useNavigate();

    return (
        <>
            <div><Navbarjs /></div>
            <div className='cart'>
                <div className='cart-items'>
                    <div className='cart-items-title'>
                        <p>Items</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <br />
                    <hr />
                    {Object.keys(cartItems).map((itemId) => {
                        const item = productzh.find((product) => product.id === itemId);
                        if (item) {
                            return (
                                <div>
                                    <div key={item.id} className='cart-items-title cart-items-item'>
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                        <p>{cartItems[item.id]}</p>
                                        <p>{item.price * cartItems[item.id]}</p>
                                        <p className='cross' onClick={() => removeFromCart(item.id)}>X</p>
                                    </div>
                                    <hr />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className='cart-bottom'>
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
                        <button onClick={() => navigate('/order')} >PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cart-promocode">
                        <div>
                            <p>If you have a promo code, Enter it here</p>
                            <div className="cart-promocode-input">
                                <input type="text" placeholder="promo code"/>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contentczs'>
          <div className='content-main'>
            <div className='content-a'>
              <h1>Về Chúng Tôi</h1>
              <p>Vuong-Group - Khoác lên niềm vui gia đình Việt Nam 2022,Công ty Cổ Phần Thương mại về Dịch vụ Vuong -Group được thành lập với mục đích ban đầu được hoạt động
                  trong lĩnh vực sản xuất thời trang xuất khẩu với các sản phẩm chủ yếu làm từ len và sợi.Năm 2023 thương hiệu thời trang VPS ra đời, tự hào trở thành một cột mốc đáng
                  nhớ của doanh nghiệp Việt trong ngành thời trang. Mang đến niềm vui cho hàng triệu gia đình Việt VPS hướng đến mục tiêu mang lại niềm vui mặc mới mỗi ngày cho hàng triệu người tiêu
                   dùng Việt. Chúng tôi tin rằng người dân Việt Nam cũng đang hướng đến một cuộc sống năng động, tích cực hơn.
              </p>
            </div>
            
            <div className='content-b'>
              <h1>ĐƯỜNG DẪN</h1>
              <ul>
                <li>Trang chủ</li>
                <li><Link to="/introduce"  style={{textDecoration: "none" , color: "white"}}>Về Chúng Tôi</Link></li>
                <li><Link to="/contactinfor" style={{textDecoration: "none" , color: "white"}}>Thông tin liên hệ</Link></li>
              </ul>
            </div>

            <div className='content-c'>
              <h1>THÔNG TIN LIÊN HỆ</h1>
                  <ul>
                    <li>
                      <span >
                        <FontAwesomeIcon icon={faLocationDot} />
                         Địa chỉ: 125A6 Trần Huy Liệu Quận Ba Đình Hà Nội
                      </span>
                  </li>

                    <li>                  
                       <span >
                          <FontAwesomeIcon icon={faPhone} />
                          +84 363652758
                       </span>
                    </li>

                    <li>
                      <span >
                        <FontAwesomeIcon  />
                        <p>Facebook</p>
                      </span>                
                    </li>

                    <li>
                      <span >
                        <FontAwesomeIcon icon={faEnvelope} />
                         nguyenquocvuong27042002@gmail.com
                      </span>
                    </li>
                  </ul>
                  <input type="text" placeholder='Email address'/> 
                  <button>Gửi</button>
                </div>
            </div>
      </div>
        </>
    );
};

export default Cart;
