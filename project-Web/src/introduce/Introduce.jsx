import { useState } from 'react'
import './Introduce.css'
import Navbarzx from './Navbarzx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Introduce = () => {
  

  const [search,setSearch] = useState('');
  const  handleSearchChange = (e) => {
    setSearch(e.target.value);
  }



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
        <h1 className='h_pros'>VPS_Fashion - Khoác Lên Mình Niềm Vui Gia Đình Việt</h1>
        <button className='chat_support'>
          <FontAwesomeIcon icon={faComment} className='icon_chat'  />
          <p className='support'>Hỗ trợ</p>
        </button>
        <div className='description' style={{widt: "100%",height: "800px" , backgroundColor:"#A49E9C "}}>
            <img src="./001.png" style={{position: "relative" , top :"20px", left: "20px"}} />
            <p style={{ position: "absolute", width: "720px",fontSize: "24px", left: "280px" }}><b>VPS_Fashion</b> 2 năm - Khoác lên niềm vui gia đình Việt Năm 2021, Công Ty Cổ Phần Thương Mại và Dịch vụ Hoàng Dương được thành lập với mục đích chính ban đầu là hoạt động trong lĩnh vực 
                sản xuất hàng thời trang xuất khẩu với các sản phẩm chủ yếu làm từ len và sợi. Năm 2022 thương hiệu thời trang VPS-Fashion ra đời, tự hào trở thành một cột mốc đáng nhớ của doanh nghiệp Việt trong ngành thời trang.
            </p>
            <div className='description-s' >
                <img src="./060.png" style={{width: "360px", height: "240px", position: "relative", top: "180px", left: "600px"}} />
                <p style={{position: "relative", width: "440px", fontSize: "24px",top: "190px",right: "-200px"}}><b>VPS-Fashion</b> hướng đến mục tiêu mang lại niềm vui mặc mới cho mỗi ngày cho hàng triệu người tiêu dùng Việt. Chúng tôi tin rằng người dân Việt Nam cũng đang hướng đến một cuộc sống năng động, tích cực hơn.</p>
            </div>
        </div>
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

export default Introduce;
