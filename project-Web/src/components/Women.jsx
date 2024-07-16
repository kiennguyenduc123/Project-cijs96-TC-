import Navbars from './Navbars';
import './Women.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import WomenList from './WomenList';
import WomenHome from './WomenHome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductModal from '../Modal/ProductModal';

const Women = () => {

    const productWomen = [
        { id: "5", image: "./image 22.png", name: "Áo Tay Dài Nữ", price: "99.000", description: "Áo tay dài nữ đơn giản nhưng thanh lịch, phù hợp cho mọi hoàn cảnh." },
        { id: "6", image: "./image 24.png", name: "Áo Len Cổ Tím", price: "399.000", description: "Áo len nữ với cổ cao và màu tím trầm, mang đến sự sang trọng và ấm áp." },
        { id: "7", image: "./image 23.png", name: "Áo Len Tay Lửng Nữ", price: "299.000", description: "Áo len tay lửng phong cách dành cho nữ giới, phối hợp dễ dàng với nhiều trang phục." },
        { id: "8", image: "./image 25.png", name: "Áo Len Nữ", price: "199.000", description: "Áo len nữ đơn giản nhưng không kém phần thời trang, phù hợp cho mùa đông." },
    ];

    const productStyle = [
        { id: "17", image: "./009.png", name: "Bộ Mặc Nhà Nữ", price: "299.000", description: "Bộ đồ mặc nhà nữ thoải mái, phong cách dễ chịu cho giấc ngủ ngon." },
        { id: "18", image: "./010.png", name: "Bộ Đồ Mặc Nhà", price: "670.000", description: "Bộ đồ mặc nhà với thiết kế đơn giản và chất liệu thoáng mát, phù hợp cho các hoạt động nghỉ ngơi trong nhà." },
        { id: "19", image: "./011.png", name: "Bộ Mặc Nhà Hoạ Tiết", price: "499.000", description: "Bộ đồ mặc nhà nữ với hoạ tiết nổi bật, mang lại cảm giác trẻ trung và thời thượng." },
        { id: "20", image: "./012.png", name: "Bộ Mặc Nhà Phong Cách", price: "399.000", description: "Bộ đồ mặc nhà phong cách với thiết kế hiện đại và đường nét tinh tế, thích hợp cho những ai yêu thích sự sang trọng và thoải mái." },
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
            return products; 
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
                <Navbars handleSearchChange={handleSearchChange} />
            </div>
            <div className='product_women'>
                <h1>Danh sách sản phẩm</h1>
                <button className='chat_support'>
                    <FontAwesomeIcon icon={faComment} className='icon_chat' />
                    <p className='support'>Hỗ trợ</p>
                </button>
               
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
                    <button onClick={() => {}}>Lọc</button>
                </div>
                <div className="product-customzx">
                    <WomenList products={filterProductsByPrice(productWomen) || productWomen} search={search} onProductClick={handleClickProduct} />
                </div>
                <div className="product-customss">
                    <WomenHome products={filterProductsByPrice(productStyle) || productStyle} search={search} onProductClick={handleClickProduct} />
                </div>
            </div>

            <div className='contentcd'>
                <h1 className='content_a'><Link to="/seemore" style={{ textDecoration: "none", color: "black", opacity: "90%" }}>XEM THÊM</Link></h1>
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

            {selectedProduct && <ProductModal product={selectedProduct} onClose={handleClosedModal} />}

        </>
    );
}

export default Women;
