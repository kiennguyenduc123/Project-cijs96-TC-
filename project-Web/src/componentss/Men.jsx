import './Men.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import MenList from './MenList';
import MenHome from './MenHome';
import Navbarss from './Navbarss';
import ProductModal from '../Modal/ProductModal';
import { Link } from 'react-router-dom';

const Men = () => {

    const productMen = [
        { id: "1", image: "./image 29.png", name: "Áo Nam Tay Ngắn", price: "499.000", description: "Áo nam tay ngắn, phong cách năng động và trẻ trung, phù hợp cho mọi hoàn cảnh." },
        { id: "2", image: "./image 27.png", name: "Áo Len Lông Cừu Úc", price: "299.000", description: "Áo len nam làm từ lông cừu Úc, mang đến sự ấm áp và thoải mái, phù hợp cho mùa đông." },
        { id: "3", image: "./image 28.png", name: "Áo Len Nam Gile", price: "399.000", description: "Áo len nam kiểu gile, thời trang và tiện lợi, là lựa chọn hoàn hảo cho những ngày se lạnh." },
        { id: "4", image: "./image 26.png", name: "Áo Len Nam", price: "299.000", description: "Áo len nam đơn giản nhưng không kém phần lịch lãm, phù hợp cho mọi dịp." },
    ];

    const productStyle = [
        { id: "13", image: "./013.png", name: "Bộ Áo Thun Nam", price: "699.000", description: "Bộ đồ áo thun nam thời trang và dễ phối đồ, phù hợp cho các hoạt động ngoài trời và hàng ngày." },
        { id: "14", image: "./014.png", name: "Bộ Đồ Mặc Nhà Siêu Mát", price: "199.000", description: "Bộ đồ mặc nhà nam với chất liệu mát mẻ, mang đến sự thoải mái và dễ chịu trong mọi hoàn cảnh." },
        { id: "15", image: "./015.png", name: "Bộ Quần Hoạ Tiết", price: "599.000", description: "Bộ quần nam hoạ tiết sành điệu, phong cách và thu hút ánh nhìn." },
        { id: "16", image: "./016.png", name: "Bộ Mặc Nhà Phong Cách", price: "399.000", description: "Bộ đồ mặc nhà nam phong cách với thiết kế hiện đại và đường nét tinh tế, thích hợp cho những ai yêu thích sự sang trọng và thoải mái." },
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
                <Navbarss handleSearchChange={handleSearchChange} />
            </div>
            <div className='product_women'>
                <h1>Danh sách sản phẩm</h1>
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
                    <button onClick={() => {}}>Lọc</button>
                </div>
                <div className="product-custom-men">
                    <MenList products={filterProductsByPrice(productMen) || productMen} search={search} onProductClick={handleClickProduct} />
                </div>
                <div className="product-customs">
                    <MenHome products={filterProductsByPrice(productStyle) || productStyle} search={search} onProductClick={handleClickProduct} />
                </div>
            </div>

            <div className='contentsv'>
                <h1 className='content_a'><Link to="/seemore" style={{ textDecoration: "none", color: "black", opacity: "90%" }}>XEM THÊM</Link></h1>

                <div className='content-main'>
                    <div className='content-a'>
                        <h1>Về Chúng Tôi</h1>
                        <p>Vuong-Group - Khoác lên niềm vui gia đình Việt Nam 2022, Công ty Cổ Phần Thương mại về Dịch vụ Vuong - Group được thành lập với mục đích ban đầu được hoạt động
                            trong lĩnh vực sản xuất thời trang xuất khẩu với các sản phẩm chủ yếu làm từ len và sợi. Năm 2023 thương hiệu thời trang VPS ra đời, tự hào trở thành một cột mốc đáng
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

            {
                selectedProduct && <ProductModal product={selectedProduct} onClose={handleClosedModal} />
            }
        </>
    )
}

export default Men;
