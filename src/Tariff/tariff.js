import TariffBox from './TariffBox/tariffBox';
import './tariff.css';

function Tariff() {
    return (
        <div className='tariff-section'>
            <div className="tariff-wrapper">
                <div className="tariff-info">
                    <h3 className='tariff-title'>تعرفه ها</h3>
                    <p className="tariff-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                </div>
                <div className="tariff-box">
                    <TariffBox />
                    <div className='tarifbox1'>
                        <p className="tariff-img1">
                            <img src="./img/scooter.png" alt="" />
                        </p>
                        <p className="tariff-price1">3 میلیون تومان</p>
                        <ul className="tariff-list1">
                            <li className="tariff-item1">تعداد درخواست نامحدود</li>
                            <li className="tariff-item1 line1">پشتیبانی 24 ساعته</li>
                            <li className="tariff-item1">دیزاین اختصاصی</li>
                            <li className="tariff-item1">جلسه حضوری</li>
                        </ul>
                        <button>سفارش</button>

                    </div>
                    <TariffBox />
                </div>
            </div>

        </div>
    )
}

export default Tariff