import './blogBox.css'

function BlogBox(props){
    return(
        <div className='blog-box'>
            <img src={props.image} alt="" className='blog-box-img'/>
            <h3 className='blog-box-title'>لورم ایپسوم متن ساختگی با</h3>
            <div className='blog-box-btn'>
                <span className='blog-date'>{props.date}</span>
                <span className='blog-btn'>{props.btn}</span>
            </div>

        </div>
    )
}

export default BlogBox