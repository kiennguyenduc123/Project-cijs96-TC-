import './Navbars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStore,faBagShopping,faCartShopping, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
import { Link } from 'react-router-dom';
const Navbars = (props) => {

    const { handleSearchChange } = props;

     const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const [cartItems, setCartItems] = useState({});

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

    return (
           <div className='Web'> 
                 <div className='Navbar'>
                <img src="./001.png" className='img' />
                <div className='Navbar_name'>
                    <ul>
                    <li className='color_li'><Link to= "/" style={{textDecoration: "none"}}>Home</Link></li>
                        <li><Link to="/men" style={{textDecoration: "none", color: "black"}}>Đồ Nam</Link></li>
                        <li><Link to="/women"  style={{textDecoration: "none", color: "black"}}>Đồ Nữ</Link></li>
                        <li><Link to="/childrenmen"  style={{textDecoration: "none", color: "black"}}>Đồ Bé Trai</Link></li>
                        <li><Link to="/children"  style={{textDecoration: "none", color: "black"}}>Đồ Bé Gái</Link></li>
                    </ul>
                </div>
                <div className='input_nav'>
                    <input 
                        type="text" 
                        placeholder='Bạn Muốn Tìm gì...'
                        onChange={handleSearchChange}
                    />
                    <label htmlFor="" className='icon-a' >
                        <FontAwesomeIcon icon={faSearch} className='icon-b' onClick={handleSearchChange} />
                    </label>
                </div>
                
                <div className='image_nav'>
                    <div className="user-icon-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <FontAwesomeIcon icon={faCircleUser} className='icon' />
                        {isHovered && (
                            <div className="hover-optionss">
                               <p><Link to="/Register"className='hover_pro'>Đăng nhập</Link></p>
                               <p><Link to="/Login" className='hover_pro'>Đăng ký</Link></p>
                            </div>
                        )}

                    </div>
                    <Link to = "/google.html"  style={{textDecoration: "none", color: "white"}}> <FontAwesomeIcon icon={faStore} className='icon' /></Link>
                    <div className='navbar-search-icon'>
                        <Link to="/cart"  style={{textDecoration: "none"}}><FontAwesomeIcon icon={faBagShopping} className='icon' /></Link>
                        <div className={getTotalCartAmount() === 0 ? "dot" : ""}></div>
                    </div>
                    <FontAwesomeIcon icon={faCartShopping} className='icon' />               
                    </div>             
                </div>

            <div className='image'>
                <img src="./002.png" className='img1' />
            </div>
           </div>
    )
}

export default Navbars;