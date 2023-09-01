import './blogBox.css'

function BlogBox(){
    return(
        <div className='blog-box'>
            <img src="./img/blog-3.jpg" alt="" className='blog-box-img'/>
            <h3 className='blog-box-title'>لورم ایپسوم متن ساختگی با</h3>
            <div className='blog-box-btn'>
                <span className='blog-date'>1398-04-15</span>
                <span className='blog-btn'>مدرن</span>
            </div>

        </div>
    )
}

export default BlogBox