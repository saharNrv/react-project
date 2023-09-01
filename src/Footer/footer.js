import './footer.css';
function Footer(){
    return(
        <div className='footer-section'>
            <div className='footer-wraper'>
                <div className="footer-box">
                    <img src="./img/logo-white.png" alt="" className='footer-logo' />
                    <p className="footer-text"> 
                    لورم ایپسوم متن ساختگی با تولید سادگی
                     نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                     </p>
                </div>
                <div className="footer-box box-item-footer">
                    <h3 className="footer-list-title">دسترسی سریع</h3>
                    <ul>
                        <li>درباره ما</li>
                        <li>خدمات ما</li>
                        <li>قیمت گذاری</li>
                        <li>وبلاگ</li>
                    </ul>
                </div>
                <div className="footer-box box-item-footer">
                <h3 className="footer-list-title">تماس</h3>
                    <ul>
                        <li>تهران خ آزادی</li>
                        <li>خ بهبودی شرکت ویستا</li>
                        <li>09305238720</li>
                        <li>yourmail@yourdomain.com</li>
                    </ul>
                </div>
                <div className="footer-box box-social-footer">
                    <h3 className="footer-list-title">شبکه های اجتماعی</h3>
                    <div className="social">

                    <img src="./img/download.png" alt="" />
                    <img src="./img/tel.png" alt="" />
                    <img src="./img/face.png" alt="" />
                    </div>

                </div>

            </div>
            <p className="copy-rigth">© تمامی حقوق برای شرکت ویستا محفوظ است</p>

        </div>
    )
}


export default Footer