import './serviceBox.css';
function ServiceBox(props){
    return(
        <div className='service-box'>
        <div className='icon'>
            <img src={props.image} alt="" />
        </div>
        <h3 className="box-title">{props.title}</h3>
        <p className="box-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>

    </div>
    )
}

export default ServiceBox