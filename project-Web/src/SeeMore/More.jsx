import { useState } from 'react';
import './More.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Navbarcs from './Navbarcs';
import MenMore from './MenMore';
import WomenMore from './WomenMore';
import ChildMore from './ChildMore';
import ChildMenMore from './ChildMenMore';
import ProductModal from '../Modal/ProductModal';

const More = () => {
  const productMen = [
    { id: "37", image: "./037.png", name: "Bộ Đồ Thể Thao Nam", price: "899.000", description: "Bộ đồ thể thao nam với thiết kế trẻ trung, phong cách thể thao hiện đại. Bao gồm áo thun và quần short phù hợp cho các hoạt động thể thao nhẹ nhàng và đi chơi." },
    { id: "38", image: "./038.png", name: "Áo PoLo Nam", price: "499.000", description: "Áo Polo nam với chất liệu thoáng mát, phối hợp màu sắc trẻ trung. Thích hợp cho các hoạt động ngoài trời và cuộc sống hàng ngày." },
    { id: "39", image: "./040.png", name: "Áo PoLo Nam Hoa Tiet", price: "399.000", description: " Áo Polo nam hoa tiết đơn giản nhưng đầy phong cách, dễ phối đồ. Lựa chọn tuyệt vời cho những ngày xuân hè." },
    { id: "40", image: "./041.png", name: "Áo Sơ Mi Nam Flannel", price: "299.000", description: " Áo sơ mi nam dài tay với chất liệu vải flannel ấm áp, phù hợp cho mùa thu đông." },
  ];

  const productWomen = [
    { id: "41", image: "./042.png", name: "Áo T-Shirt Nữ Dáng Rộng ", price: "199.000", description: " Áo T-shirt nữ dáng rộng, phong cách thời trang đơn giản nhưng thanh lịch. Lựa chọn hàng ngày cho phái đẹp." },
    { id: "42", image: "./043.png", name: "Áo Len Nữ Ngắn Tay Dệt Kẻ", price: "399.000", description: "Áo len nữ ngắn tay, chất liệu len dệt kẻ tinh tế, thích hợp cho mùa thu đông." },
    { id: "43", image: "./044.png", name: "Áo PoLo Nữ Mắt Chim", price: "299.000", description: ": Áo Polo nữ với họa tiết mắt chim trẻ trung, năng động. Phối cùng quần jeans hoặc chân váy làm nổi bật phong cách." },
    { id: "44", image: "./045.png", name: "Đầm Tiệc Nữ Sang Trọng", price: "399.000", description: "Đầm tiệc nữ sang trọng với thiết kế đẹp mắt, chất liệu cao cấp. Lựa chọn hoàn hảo cho các dịp đặc biệt." },
  ];

  const productChildren = [
    { id: "45", image: "./046.png", name: "Áo Thun Trẻ Em Cổ Tròn", price: "99.500", description: "Áo thun trẻ em cổ tròn đơn giản, thoải mái cho các hoạt động ngoài trời." },
    { id: "46", image: "./050.png", name: "Áo Khoác Gió Trẻ Em ", price: "299.000", description: " Áo khoác gió trẻ em với thiết kế bảo vệ cơ thể bé trong những ngày gió lạnh." },
    { id: "47", image: "./048.png", name: "Áo Thun Trẻ Em Dài Tay ", price: "199.000", description: "Áo thun trẻ em dài tay với chất liệu cotton thoáng mát, phù hợp cho mọi mùa." },
    { id: "48", image: "./051.png", name: "Đầm Kid Hoạ Tiết Trái Tim", price: "299.000", description: "Đầm cho bé gái với hoạ tiết trái tim dễ thương, phong cách ngọt ngào." },
  ];

  const productChildrenMen = [
    { id: "49", image: "./047.png", name: "Áo Khoác Kid Nhỏ ", price: "99.500", description: "Áo khoác trẻ em nam nhỏ, dễ dàng mặc với mọi trang phục." },
    { id: "50", image: "./049.png", name: "Quần Dài Trẻ Em KaKi ", price: "299.000", description: "Quần dài trẻ em nam chất liệu kaki, bền chắc và thoải mái." },
    { id: "51", image: "./055.png", name: "Sơ Mi Trẻ Em Phối Mũ Nỉ", price: "199.000", description: "Sơ mi trẻ em nam phối mũ nỉ, giữ ấm và thời trang." },
    { id: "52", image: "./056.png", name: "Áo PoLo Thể Thao Trẻ Em", price: "299.000", description: "Áo Polo trẻ em nam thể thao, phối hợp màu sắc nổi bật, thích hợp cho các hoạt động ngoài trời." },
  ];

  const [search, setSearch] = useState('');
  const [minPriceInput, setMinPriceInput] = useState('');
  const [maxPriceInput, setMaxPriceInput] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPriceInput(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPriceInput(e.target.value);
  };

  const handleClickProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleClosedModal = () => {
    setSelectedProduct(null);
  };

  const filterProductsByPrice = (products) => {
    const filteredProducts = products.filter((product) => {
      const price = parseFloat(product.price);
      const min = parseFloat(minPriceInput);
      const max = parseFloat(maxPriceInput);

      if ((!minPriceInput && !maxPriceInput) || (isNaN(min) && isNaN(max))) {
        return true; 
      }

      if (isNaN(min)) {
        return price <= max;
      }

      if (isNaN(max)) {
        return price >= min;
      }

      return price >= min && price <= max;
    });

    return filteredProducts;
  };

  return (
    <>
      <div className='wrapper'>
        <Navbarcs handleSearchChange={handleSearchChange} />
      </div>
      <div className='product'>
        <h1 className='h_pro'>Danh Sách Sản Phẩm</h1>
        <button className='chat_support'>
          <FontAwesomeIcon icon={faComment} className='icon_chat' />
          <p className='support'>Hỗ trợ</p>
        </button>
        <div className="price-filter">
          <input type="number" placeholder="Giá từ" value={minPriceInput} onChange={handleMinPriceChange} />
          <span>-</span>
          <input type="number" placeholder="Giá đến" value={maxPriceInput} onChange={handleMaxPriceChange} />
          <button onClick={ filterProductsByPrice}>Lọc</button>
        </div>
        <div className="product-content">
          <MenMore products={filterProductsByPrice(productMen)} search={search} onProductClick={handleClickProduct} />
        </div>
        <div className="product-contents">
          <WomenMore products={filterProductsByPrice(productWomen)} search={search} onProductClick={handleClickProduct} />
        </div>
        <div className="product-contentssz">
          <ChildMore products={filterProductsByPrice(productChildren)} search={search} onProductClick={handleClickProduct} />
        </div>
        <div className="product-contentsss">
          <ChildMenMore products={filterProductsByPrice(productChildrenMen)} search={search} onProductClick={handleClickProduct} />
        </div>
      </div>

      <div className='contentbn'>
        <h1 className='content_a'><Link to="/" style={{ textDecoration: "none", color: "black", opacity: "90%" }}>Trang Chủ</Link></h1>
        <div className='content-main'>
          <div className='content-a'>
            <h1>Về Chúng Tôi</h1>
            <p>Vuong-Group - Khoác lên niềm vui gia đình Việt Nam 2022,Công ty Cổ Phần Thương mại về Dịch vụ Vuong -Group được thành lập với mục đích ban đầu được hoạt động trong lĩnh vực sản xuất thời trang xuất khẩu với các sản phẩm chủ yếu làm từ len và sợi.Năm 2023 thương hiệu thời trang VPS ra đời, tự hào trở thành một cột mốc đáng nhớ của doanh nghiệp Việt trong ngành thời trang. Mang đến niềm vui cho hàng triệu gia đình Việt VPS hướng đến mục tiêu mang lại niềm vui mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Chúng tôi tin rằng người dân Việt Nam cũng đang hướng đến một cuộc sống năng động, tích cực hơn.</p>
          </div>

          <div className='content-b'>
            <h1>ĐƯỜNG DẪN</h1>
            <ul>
              <li>Trang chủ</li>
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

export default More;
