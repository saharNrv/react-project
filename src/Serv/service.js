import './service.css'
import ServiceBox from './serviceBox/serviceBox'

function Services(){
    let services=[
        {id:1,title:'برنامه نویسی موبایل',image:'./img/phone.png'},
        {id:2,title:'طراحی سایت',image:'./img/design.png'},
        {id:3,title:'برنامه نویسی موبایل',image:'./img/images.png'},
        {id:4,title:'خدمات تجاری',image:'./img/shop.png'},
        {id:5,title:'پشتیبانی درجه اول',image:'./img/support.png'},
        {id:6,title:'فناوری ابری',image:'./img/cloud.png'},
    ]
    return(
        <div className='service-section'>
            <div className="service-wrap">
                <div className="service-info">
                <h3 className='service-subtitle'>شرکت ویستا</h3>
                <h2 className='service-title'>خدمات نرم افزاری</h2>
                <p className='service-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                </div>
                <div className="service-box-wrapper">
                   <ServiceBox {...services[0]}/>
                    <ServiceBox {...services[1]}/>
                    <ServiceBox {...services[2]}/>
                    <ServiceBox {...services[3]}/>
                    <ServiceBox {...services[4]}/>
                    <ServiceBox {...services[5]}/>
                </div>

            </div>

        </div>
    )
}


export default Services