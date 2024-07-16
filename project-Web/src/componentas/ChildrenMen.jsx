import './ChildrenMen.css';
import Navbaraz from './Navbaraz.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import MenSweater from './MenSweater.jsx';
import MenHome from './MenHome.jsx';
import { Link } from 'react-router-dom';
import ProductModal from '../Modal/ProductModal.jsx';

const ChildrenMen = () => {
    const productMen = [
        { id: "21", image: "./027.png", name: "Áo Len Bé Trai Cổ 3 Phân", price: "499.000", description: "Áo len bé trai có cổ 3 phân thiết kế độc đáo và sang trọng, phù hợp cho các bé trong mùa đông." },
        { id: "22", image: "./028.png", name: "Áo Len Bé Trai", price: "299.000", description: "Áo len bé trai đơn giản nhưng không kém phần đáng yêu, là lựa chọn hoàn hảo cho mọi dịp." },
        { id: "23", image: "./029.png", name: "Áo Len Bé Trai Đẹp", price: "399.000", description: "Áo len bé trai với thiết kế đẹp mắt, chất liệu mềm mại và giá cả phải chăng." },
        { id: "24", image: "./030.png", name: "Áo Len Bé Trai GiLe", price: "99.000", description: "Áo len bé trai kiểu gile, mang lại sự thoải mái và ấm áp cho bé trong những ngày se lạnh." },
    ];
    const productStyle = [
        { id: "25", image: "./031.png", name: "Bộ Shorts Kate Bé Trai", price: "699.000", description: "Bộ shorts Kate bé trai với thiết kế hiện đại, phong cách trẻ trung và năng động." },
        { id: "26", image: "./032.png", name: "Bộ TOLE Lửng Bé Trai", price: "199.000", description: "Bộ thời trang TOLE lửng bé trai, mang đến sự thoải mái và tự do cho bé trong mọi hoạt động." },
        { id: "27", image: "./033.png", name: "Bộ Thun Lửng Bé Gái", price: "599.000", description: "Bộ thun lửng bé gái với chất liệu mềm mại và thiết kế đáng yêu, là sự lựa chọn hoàn hảo cho bé gái." },
        { id: "28", image: "./035.png", name: "Bộ Shorts Karty Bé Trai", price: "399.000", description: "Bộ shorts Karty bé trai với kiểu dáng thời trang và đường nét tinh tế, phù hợp cho bé trong mọi dịp." },
    ];

    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleClickProduct = (product) => {
        setSelectedProduct(product);
    };

    const handleClosedModal = () => {
        setSelectedProduct(null);
    };

    const filterProductsByPrice = (products) => {
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);

        if (!minPrice && !maxPrice) {
            return products; // Return all products if no minPrice and maxPrice are set
        }

        const filteredProducts = products.filter((product) => {
            const price = parseFloat(product.price);

            if (!minPrice && maxPrice) {
                return price <= max;
            } else if (minPrice && !maxPrice) {
                return price >= min;
            } else {
                return price >= min && price <= max;
            }
        });

        return filteredProducts;
    };

    return (
        <>
            <div className='wrapper'>
                <Navbaraz handleSearchChange={handleSearchChange} />
            </div>
            <div className='product_men'>
                <h1 className='h-pros'>Danh sách sản phẩm</h1>
                <button className='chat_support'>
                    <FontAwesomeIcon icon={faComment} className='icon_chat' />
                    <p className='support'>Hỗ trợ</p>
                </button>

                {/* Filter by Price */}
                <div className="price-filter">
                    <input
                        type="number"
                        placeholder="Giá từ"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Giá đến"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <button onClick={filterProductsByPrice}>Lọc</button>
                </div>

                <div className="product-custom-men">
                    <MenSweater products={filterProductsByPrice(productMen)} search={search} onProductClick={handleClickProduct} />
                </div>
                <div className="product-customs-mens">
                    <MenHome products={filterProductsByPrice(productStyle)} search={search} onProductClick={handleClickProduct} />
                </div>
            </div>

            <div className='contentcs'>
                <h1 className='content_a'><Link to="/seemore" style={{ textDecoration: "none", color: "black", opacity: "90%" }}>XEM THÊM</Link></h1>
                <div className='content-main'>
                    <div className='content-a'>
                        <h1>Về Chúng Tôi</h1>
                        <p>Vuong-Group - Khoác lên niềm vui gia đình Việt Nam 2022, Công ty Cổ Phần Thương mại về Dịch vụ Vuong - Group được thành lập với mục đích ban đầu được hoạt động trong lĩnh vực sản xuất thời trang xuất khẩu với các sản phẩm chủ yếu làm từ len và sợi. Năm 2023 thương hiệu thời trang VPS ra đời, tự hào trở thành một cột mốc đáng nhớ của doanh nghiệp Việt trong ngành thời trang. Mang đến niềm vui cho hàng triệu gia đình Việt VPS hướng đến mục tiêu mang lại niềm vui mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Chúng tôi tin rằng người dân Việt Nam cũng đang hướng đến một cuộc sống năng động, tích cực hơn.</p>
                    </div>

                    <div className='content-b'>
                        <h1>ĐƯỜNG DẪN</h1>
                        <ul>
                            <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>Trang chủ</Link></li>
                            <li><Link to="/introduce" style={{ textDecoration: "none", color: "white" }}>Về Chúng Tôi</Link></li>
                            <li><Link to="/contactinfor" style={{ textDecoration: "none", color: "white" }}>Thông tin liên hệ</Link></li>
                        </ul>
                    </div>

                    <div className='content-c'>
                        <h1>THÔNG TIN LIÊN HỆ</h1>
                        <ul>
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    Địa chỉ: 125A6 Trần Huy Liệu Quận Ba Đình Hà Nội
                                </span>
                            </li>

                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faPhone} />
                                    +84 363652758
                                </span>
                            </li>

                            <li>
                                <span>
                                    <FontAwesomeIcon />
                                    <p>Facebook</p>
                                </span>
                            </li>

                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    nguyenquocvuong27042002@gmail.com
                                </span>
                            </li>
                        </ul>
                        <input type="text" placeholder='Email address' />
                        <button>Gửi</button>
                    </div>
                </div>
            </div>

            {
                selectedProduct && <ProductModal product={selectedProduct} onClose={handleClosedModal} />
            }
        </>
    );
};

export default ChildrenMen;
