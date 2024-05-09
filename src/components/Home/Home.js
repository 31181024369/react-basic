import React from 'react';
import videoHomePage from '../../assets/video-homepage.webm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const account=useSelector(state=>state.user.account);
    const isAuthenticated=useSelector(state=>state.user.isAuthenticated);
    const navigate=useNavigate();
    console.log('account:',account,' isAuthenticated:',isAuthenticated);
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source src={videoHomePage} type="video/mp4"
                 />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>Máy Vi Tính Nguyên Kim - Công Ty TNHH Vi Tính Nguyên Kim</div>
                <div className='title-2'>Máy vi tính Nguyên Kim được nhập khẩu từ các công ty đa quốc gia hứa hẹn sẽ mang đến cho khách hàng những trải nghiệm tuyệt vời nhất:</div>
                <div className='title-3'>
                    { isAuthenticated===false ?
                     <button onClick={()=>navigate('/login')}>Get's started. It's free</button>:
                     <button onClick={()=> navigate('/users')}>Doing Quiz Now</button>}
                    
                </div>
            </div>
            
        </div>
    );
};

export default Home;