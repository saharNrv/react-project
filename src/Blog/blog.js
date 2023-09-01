import BlogBox from './BlogBox/blogBox'
import './blog.css'
function Blog(){
    return(
        <div className='blog-section'>
            <div className="blog-wrapper">

                <div className="blog-info">
                    <h3 className="blog-subtitle">آخرین اخبار ما</h3>
                    <h2 className='blog-title'>وبلاگ ما</h2>
                    <p className="blog-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                </div>

                <div className="blog-box-wrpapper">
                    <BlogBox/>
                    <BlogBox/>
                    <BlogBox/>
                </div>

            </div>

        </div>
    )
}

export default Blog