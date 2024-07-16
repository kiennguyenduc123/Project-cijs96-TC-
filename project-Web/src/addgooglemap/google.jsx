import { useState } from 'react'
import './google.css'
import Navbarzx from '../introduce/Navbarzx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Google = () => {
  

  const [search,setSearch] = useState('');
  const  handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  //Filer Search
  // const filteredProductsMen = productMen.filter((product) => {
  //   product.name.toLowerCase().includes(search.toLowerCase())
  // })

  // const filteredProductsWomen = productWomen.filter((product) => {
  //   product.name.toLowerCase().includes(search.toLowerCase())
  // })

  // const filteredProductsChildren = productChildren.filter((product) => {
  //   product.name.toLowerCase().includes(search.toLowerCase())
  // })


  return (
    <>
      <div className='wrapper'>
        <Navbarzx handleSearchChange = {handleSearchChange} />
      </div>
    
     <div className='intro'>
        <div style={{padding: "12px"}} >
            <span ><Link to="/"style={{textDecoration: "none", color: "black"}} >Trang chủ</Link> / </span>
            <span>Giới thiệu</span>
        </div>
        <div className='add_google'>
             <iframe
                 title="Google Map"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0615602127473!2d105.81702497400916!3d21.030222687730745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7250ea0dd5%3A0xbd5ef64272d9b9d2!2zMTI1QTYgUC4gVHLhuqduIEh1eSBMaeG7h3UsIEdp4bqjbmcgVsO1LCBCYSDEkMOsbmgsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1719927769374!5m2!1svi!2s"
                 width="700"
                 height="550"
                 style={{ border: 0 }}
                 allowFullScreen=""
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
        <button className='chat_support'>
          <FontAwesomeIcon icon={faComment} className='icon_chat'  />
          <p className='support'>Hỗ trợ</p>
        </button>
     </div>

      <div className='contentq'>
          <h1 className='content_a'>Xem Thêm</h1>
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
                <li>Về chúng tôi</li>
                <li>Thông tin liên hệ</li>
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
  )
}

export default Google;
