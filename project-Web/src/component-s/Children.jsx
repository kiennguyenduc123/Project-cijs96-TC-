import './Children.css';
import Navbaras from './Navbaras';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ChildSweater from './ChildSweater';
import ChildHome from './ChildHome';
import ProductModal from '../Modal/ProductModal';
import { Link } from 'react-router-dom';

const Children = () => {
  const productMens = [
    { id: "29", image: "./017.png", name: "Áo Len Bé Gái", price: "499.000", description: "Áo len cho bé gái với thiết kế đơn giản nhưng thanh lịch, phù hợp để bé mặc vào mùa đông. Giá cả hợp lý và chất liệu êm ái." },
    { id: "30", image: "./018.png", name: "Áo Balo Bé Gái Siêu Mát", price: "299.000", description: "Áo Balo Bé Gái Siêu Mát là sản phẩm thời trang cho bé gái, với chất liệu vải siêu mát và thiết kế thoải mái, phù hợp cho mọi hoạt động hàng ngày." },
    { id: "31", image: "./019.png", name: "Áo Len Bé Gái Đẹp", price: "399.000", description: "Áo len bé gái với hoa văn đẹp mắt, tạo điểm nhấn cho trang phục. Phù hợp cho bé mặc đi chơi hoặc đi học." },
    { id: "32", image: "./020.png", name: "Áo Len Bé Gái In", price: "299.000", description: "Áo len bé gái in hình với các họa tiết dễ thương, mang lại sự nổi bật và cá tính cho bé." },
  ];

  const productStyle = [
    { id: "33", image: "./021.png", name: "Bộ Shorts Bé Gái", price: "699.000", description: "Bộ shorts cho bé gái với chất liệu nhẹ và thoáng mát, phù hợp cho các hoạt động ngoài trời. Thiết kế thời trang và dễ phối đồ." },
    { id: "34", image: "./022.png", name: "Bộ TOLE Lửng Bé Gái", price: "199.000", description: "Bộ TOLE lửng cho bé gái với màu sắc tươi sáng và thiết kế năng động. Chất liệu vải mềm mại, thoải mái cho bé trong mùa hè." },
    { id: "35", image: "./023.png", name: "Bộ Thun Lửng Bé Gái", price: "599.000", description: "Bộ thun lửng bé gái đơn giản nhưng trẻ trung, thích hợp cho bé mặc ở nhà hoặc khi đi dạo phố cùng gia đình." },
    { id: "36", image: "./025.png", name: "Bộ Shorts Karty Bé Gái", price: "399.000", description: " Bộ shorts Karty bé gái với kiểu dáng thời trang và màu sắc bắt mắt. Phối cùng áo thun sẽ tạo nên set đồ dễ thương và năng động cho bé." },
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
        <Navbaras handleSearchChange={handleSearchChange} />
      </div>
      <div className='product_women'>
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

        <div className="product-custom-women">
          <ChildSweater products={filterProductsByPrice(productMens)} search={search} onProductClick={handleClickProduct} />
        </div>
        <div className="product-customs-women">
          <ChildHome products={filterProductsByPrice(productStyle)} search={search} onProductClick={handleClickProduct} />
        </div>
      </div>

      <div className='contentsj'>
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
                  <FontAwesomeIcon />
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

export default Children;
