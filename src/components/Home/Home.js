import React from 'react';
import videoHomePage from '../../assets/video-homepage.webm';
const Home = () => {
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
                    <button>Get's started. It's free</button>
                </div>
            </div>
            
        </div>
    );
};

export default Home;