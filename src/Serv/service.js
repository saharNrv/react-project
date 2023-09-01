import './service.css'
import ServiceBox from './serviceBox/serviceBox'

function Services(){
    return(
        <div className='service-section'>
            <div className="service-wrap">
                <div className="service-info">
                <h3 className='service-subtitle'>شرکت ویستا</h3>
                <h2 className='service-title'>خدمات نرم افزاری</h2>
                <p className='service-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                </div>
                <div className="service-box-wrapper">
                    <ServiceBox/>
                    <ServiceBox/>
                    <ServiceBox/>
                    <ServiceBox/>
                    <ServiceBox/>
                    <ServiceBox/>
                </div>

            </div>

        </div>
    )
}


export default Services