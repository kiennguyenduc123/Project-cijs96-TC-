import { useState } from 'react'
import './contactinfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Navbarjs from './Navbarjs';
;

const Contactinfo = () => {
 

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
        <Navbarjs handleSearchChange = {handleSearchChange} />
      </div>
      <div className='product'>
        <div style={{width : "80%", height: "3px", background: "black", position: "relative" , left: "110px",top: "-300px"}}></div>
        <div style={{width : "80%", height: "3px", background: "black", marginTop: "22px", position: "relative" , left: "110px", top: "-260px"}}></div>
        <h1 className='hz_pro'>LIÊN HỆ</h1>
        <div style={{position: "relative" , top: "-50px"}} >
            <div  style={{position :"relative" , left: "140px"}} >
                <h1 style={{padding: "12px", marginLeft: "24px"}}>HỖ TRỢ KHÁCH HÀNG MUA ONLINE</h1>
                <ul style={{listStyle: "none", padding: "12px", marginLeft: "24px"}}>
                    <li style={{marginTop: "22px", fontSize: "18px"}}>Hotline:036323213</li>
                    <li style={{marginTop: "22px", fontSize: "18px"}}>Thời Gian:THỨ 2 đến THỨ 7</li>
                    <li style={{marginTop: "22px", fontSize: "18px"}}>Email:nguyenquocvuong270402@gmail.com</li>
                    <li style={{marginTop: "22px", fontSize: "18px"}}>Địa Chỉ:125A6 Trần Huy Liêuk ,Giảng Võ, Ba Đình, Hà Nội</li>
                </ul>
            </div>

            <div style={{width : "80%", height: "3px", background: "black",position: "relative" , left: "110px",top:"40px"}}></div>  
            
            <div style={{position :"relative" , top: "80px" , left: "140px"}}>
                <h1 style={{padding: "12px", marginLeft: "24px"}}>Chăm Sóc Khách Hàng</h1>
                <ul style={{listStyle: "none", padding: "12px", marginLeft: "24px"}}>
                    <li style={{marginTop: "22px", fontSize: "18px"}}>Số Điện Thoại:0412312512</li>
                    <li style={{marginTop: "22px", fontSize: "18px"}}>Email:vuongqn213@fpt.edu.vn</li>
                </ul>
            </div>

            <div style={{width : "80%", height: "3px", background: "black",position: "relative" , left: "108px",top:"150px"}}></div>  

            <div style={{position :"relative" , top: "200px" , left: "140px"}}>
                <h1 style={{padding: "12px", marginLeft: "24px"}}>Đặt Hàng Trước</h1>
                <ul style={{listStyle: "none", padding: "12px", marginLeft: "24px"}}> 
                    <li style={{marginTop: "22px", fontSize: "18px"}}>Liên Hệ: Mr Vượng</li>
                    <li style={{marginTop: "22px", fontSize: "18px"}}>Số Điện Thoại:023214175</li>
                </ul>
            </div>
        </div>
        <button className='chat_support'>
          <FontAwesomeIcon icon={faComment} className='icon_chat'  />
          <p className='supportzs'>Hỗ trợ</p>
        </button>
      
      </div>

      <div className='contenth'>
          <h1 className='content_a'><Link to="/"  style={{textDecoration: "none", color: "black",opacity: "90%"}}>Trang Chủ</Link></h1>
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

export default Contactinfo;
