import NavBar from './Navbar/navbar';
import './header.css';

function Header(){
    return(
        <div className='header'>
            <NavBar/>

            <div className="wrapper">
                <div className="left">
                    <img src="./img/banner-2.svg" alt="" className='header-img'/>
                </div>
                <div className="right">
                    <h1 className="header-title">شرکت تجارت الکترونیک ویستا در زمینه طراحی سایت</h1>
                    <p className="header-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    <div className="header-btn-wrap">
                        <button className='btn1'>تماس با ما</button>
                        <button className='btn2'>خدمات ما</button>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Header