import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import ProductWomen from './component/ProductWomen';
import ProductChild from './component/ProductChild';
import { Link } from 'react-router-dom';
import ProductModal from './Modal/ProductModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  const productMen = [
    { id: "1", image: "./image 29.png", name: "Áo Nam Tay Ngắn", price: "199.000", description: "Áo nam tay ngắn hàng cotton chất lượng cao và giá thành cực tốt." },
    { id: "2", image: "./image 27.png", name: "Áo Len Lông Cừu Úc", price: "499.000", description: "Áo len lông cừu Úc sang trọng, giữ ấm cực tốt vào mùa đông." },
    { id: "3", image: "./image 28.png", name: "Áo Len Nam Gile", price: "399.000", description: "Áo len lông cừu Úc sang trọng, giữ ấm cực tốt vào mùa đông." },
    { id: "4", image: "./image 26.png", name: "Áo Len Nam", price: "299.000", description: "Áo len lông cừu Úc sang trọng, giữ ấm cực tốt vào mùa đông." },
  ];

  const productWomen = [
    { id: "5", image: "./image 22.png", name: "Áo Tay Dài Nữ", price: "299.000", description: "Áo tay dài nữ thiết kế đơn giản, phù hợp với mọi hoàn cảnh." },
    { id: "6", image: "./image 24.png", name: "Áo Len Cổ Tím", price: "199.000", description: "Áo tay dài nữ thiết kế đơn giản, phù hợp với mọi hoàn cảnh." },
    { id: "7", image: "./image 23.png", name: "Áo Len Tay Lửng Nữ", price: "99.000", description: "Áo tay dài nữ thiết kế đơn giản, phù hợp với mọi hoàn cảnh." },
    { id: "8", image: "./image 25.png", name: "Áo Len Nữ", price: "399.000", description: "Áo tay dài nữ thiết kế đơn giản, phù hợp với mọi hoàn cảnh." },
  ];

  const productChildren = [
    { id: "9", image: "./image 33.png", name: "Áo Nam Tay Dài", price: "199.000", description: "Áo nam tay dài thời trang, phong cách trẻ trung và năng động." },
    { id: "10", image: "./image 32.png", name: "Áo Nữ Tay Ngắn", price: "499.000", description: "Áo nữ tay ngắn, phù hợp cho những ngày nắng nóng." },
    { id: "11", image: "./image 31.png", name: "Áo Nam Tay Ngắn", price: "99.000", description: "Áo nam tay ngắn thiết kế đơn giản, phù hợp với các hoàn cảnh khác nhau." },
    { id: "12", image: "./image 30.png", name: "Áo Len Nữ Tay Dài", price: "199.000", description: "Áo nam tay ngắn thiết kế đơn giản, phù hợp với các hoàn cảnh khác nhau." }
  ];

  const randomQuestions = [
    'Bạn cần hỗ trợ gì hôm nay?',
    'Có thể giúp gì cho bạn?',
    'Bạn có câu hỏi nào về sản phẩm của chúng tôi không?',
    'Bạn muốn biết thêm thông tin gì về chúng tôi?',
    'Chào! Hãy cho mình biết bạn đang quan tâm đến sản phẩm nào nhé!',
    'Bạn cần tư vấn sản phẩm nào cho ngày hôm nay?',
    'Bạn đã có sản phẩm ưa thích nào chưa?'
  ];

  const [showChatBox, setShowChatBox] = useState(false);
  const toggleChatBox = () => {
    setShowChatBox(!showChatBox);
  };

  const [inputMessage, setInputMessage] = useState('');
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (messages.length === 0) {
      const randomIndex = Math.floor(Math.random() * randomQuestions.length);
      const initialQuestion = randomQuestions[randomIndex];
      setMessages([{ text: initialQuestion, fromUser: false }]);
    }
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessageObj = {
        text: inputMessage,
        fromUser: true
      };
      setMessages([...messages, newMessageObj]);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * randomQuestions.length);
        const replyMessage = randomQuestions[randomIndex];
        const replyMessageObj = {
          text: replyMessage,
          fromUser: false
        };
        setMessages([...messages, replyMessageObj]);
      }, 1000);
      setInputMessage('');
    }
  };

  const [search, setSearch] = useState('');
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleClickProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  
  const handlePriceFilter = () => {
    // Chuyển đổi giá từ string sang number
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    
    if (!min && !max) {
      return {
        men: productMen,
        women: productWomen,
        children: productChildren,
      };
    }

    
    const filteredProductsMen = productMen.filter(product => {
      const price = parseFloat(product.price);
      return price >= min && price <= max;
    });

    const filteredProductsWomen = productWomen.filter(product => {
      const price = parseFloat(product.price);
      return price >= min && price <= max;
    });

    const filteredProductsChildren = productChildren.filter(product => {
      const price = parseFloat(product.price);
      return price >= min && price <= max;
    });

    
    return {
      men: filteredProductsMen,
      women: filteredProductsWomen,
      children: filteredProductsChildren,
    };
  };

  return (
    <>
      <div className='wrapper'>
        <Navbar handleSearchChange={handleSearchChange} />
      </div>
      <div className='productg'>
        <h1 className='hs_pros'>Danh Sách Sản Phẩm</h1>
        <button className='chat_supports' onClick={toggleChatBox}>
          <FontAwesomeIcon icon={faComment} className='icon_chat' />
          <p className='support'>Hỗ trợ</p>
        </button>
        {/* Hiển thị bộ lọc giá */}
        <div className="price-filter">
          <input type="number" placeholder="Giá từ" value={minPrice} onChange={handleMinPriceChange} />
          <span>-</span>
          <input type="number" placeholder="Giá đến" value={maxPrice} onChange={handleMaxPriceChange} />
          <button onClick={handlePriceFilter}>Lọc</button>
        </div>
        
        <div className="product-contenth">
          <ProductList products={handlePriceFilter().men} search={search} onProductClick={handleClickProduct} />
        </div>
        <div className="product-contentsh">
          <ProductWomen products={handlePriceFilter().women} search={search} onProductClick={handleClickProduct} />
        </div>
        <div className="product-contentss">
         
          <ProductChild products={handlePriceFilter().children} search={search} minPrice={minPrice} maxPrice={maxPrice} onProductClick={handleClickProduct} />
        </div>
      </div>

      <div className='contentcz'>
        <h1 className='content_a'><Link to="/seemore" style={{ textDecoration: "none", color: "black", opacity: "90%" }}>XEM THÊM</Link></h1>
        <div className='content-main'>
          <div className='content-a'>
            <h1>Về Chúng Tôi</h1>
            <p>Vuong-Group - Khoác lên niềm vui gia đình Việt Nam 2022, Công ty Cổ Phần Thương mại về Dịch vụ Vuong - Group được thành lập với mục đích ban đầu được hoạt động trong lĩnh vực sản xuất thời trang xuất khẩu với các sản phẩm chủ yếu làm từ len và sợi. Năm 2023 thương hiệu thời trang VPS ra đời, tự hào trở thành một cột mốc đáng nhớ của doanh nghiệp Việt trong ngành thời trang. Mang đến niềm vui cho hàng triệu gia đình Việt VPS hướng đến mục tiêu mang lại niềm vui mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Chúng tôi tin rằng người dân Việt Nam cũng đang hướng đến một cuộc sống năng động, tích cực hơn.</p>
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

      {/* Hiển thị hộp chat */}
      {showChatBox && (
        <div className="chat-box">
          <div className="chat-header">
            <button className="close-btn" onClick={toggleChatBox}>×</button>
            <h3>Chat</h3>
          </div>
          <div className="chat-body">
            {/* Nội dung chat */}
            {messages.map((message, index) => (
              <p key={index} className={message.fromUser ? 'user-message' : 'system-message'}>{message.text}</p>
            ))}
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Nhập tin nhắn..." value={inputMessage} onChange={handleInputChange} />
            <button onClick={sendMessage}>Gửi</button>
          </div>
        </div>
      )}

      {/* Hiển thị modal chi tiết sản phẩm */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseModal} />}
    </>
  );
}

export default App;
