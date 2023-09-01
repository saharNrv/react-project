import './tariffBox.css'
function TariffBox(){
    return(
        <div className='tarifbox'>
            <p className="tariff-img">
                <img src="./img/car.png" alt="" />
            </p>
            <p className="tariff-price">3 میلیون تومان</p>
            <ul className="tariff-list">
                <li className="tariff-item">تعداد درخواست نامحدود</li>
                <li className="tariff-item">پشتیبانی 24 ساعته</li>
                <li className="tariff-item line">دیزاین اختصاصی</li>
                <li className="tariff-item line">جلسه حضوری</li>
            </ul>
            <button className='triff-btn'>سفارش</button>

        </div>
    )
}


export default TariffBox