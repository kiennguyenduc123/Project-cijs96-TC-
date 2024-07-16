import { useState } from 'react'
import './LoginSignUp.css'
import Navbarjs from '../contact/Navbarjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faLocationDot,faPhone,faEnvelope,faCircleUser,faLock,faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'
// import { message } from 'antd'
const LoginSignUp = () => {


  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev)
  }

  const navigate = useNavigate();

//   const onFinish = (values) => {
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const userExists = users.some((user) => user.username === values.username);
//     if(userExists) {
//         message.error('Username already exists');
//     }else  {
//         users.push(values);
//         localStorage.setItem('users', JSON.stringify(users));
//         message.success('Registeration successful');
//         navigate('/Login');
//     }
//   }


const handleRegister = (event) => {
    event.preventDefault(); // Ngăn chặn reload trang khi submit form

    // Lấy giá trị từ các trường input
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Kiểm tra các điều kiện để đăng ký
    if (!username || !email || !password) {
        alert('Vui lòng nhập đầy đủ thông tin.');
        return;
    }
    // Lấy danh sách users từ localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra xem username đã tồn tại chưa
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
        alert('Tên đăng nhập đã tồn tại.');
        return;
    }

    // Thêm user mới vào danh sách
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Chuyển hướng đến trang đăng nhập
    navigate('/Login');
}




    return (
        <>
        <div className='wrappers'>
            <Navbarjs/>
        </div>

        <div style={{padding: "12px", background: "#F6F6F6"}}  >
            <span><Link to="/" className='homie'>Trang chủ</Link> / </span>
            <span>Đăng nhập tài khoản</span>
        </div>

        <section className='section'>
            <div className='section-container'>
                <div className='background'>
                    <div className='heading-nav'>
                        <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
                        <p>Bạn đã có tài khoản ? Đăng nhập 
                             <Link to="/Login"  style={{marginLeft: "4px"}} >tại đây</Link>
                        </p>
                    </div>

                    <form className='inputs' onSubmit={handleRegister}>
                        <div className='input'>
                            <FontAwesomeIcon icon={faCircleUser} className='icon' />
                            <input type="text" placeholder='Name' name="username" />
                        </div>

                        <div className='input'>
                            <FontAwesomeIcon icon={faEnvelope} className='icon' />
                            <input type="email" placeholder='Email' name="email" />
                        </div>


                        <div className='input'>
                            <FontAwesomeIcon icon={faLock} className='icon' />
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                placeholder='Password'
                                name="password"
                            />
                            <FontAwesomeIcon
                                icon={isPasswordVisible ? faEyeSlash : faEye}
                                className='iconbd'
                                onClick={togglePasswordVisibility}
                            />
                        </div> 
                        
                         
                        <button type="submit" style={{outline: "none", border: "none"}} className='submit-containers'>Đăng ký</button>
                    </form>

                    {/* <button type="submit" style={{outline: "none", border: "none"}} className='submit-container'>Đăng ký</button> */}
                </div>
            </div>
        </section>
        

      <div className='content'>
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
                <li><Link to="/introduce" target='_blank' style={{textDecoration: "none" , color: "white"}}>Về Chúng Tôi</Link></li>
                <li><Link to="/contactinfor" target='_blank' style={{textDecoration: "none" , color: "white"}}>Thông tin liên hệ</Link></li>
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

export default LoginSignUp;