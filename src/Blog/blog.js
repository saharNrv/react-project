import BlogBox from './BlogBox/blogBox'
import './blog.css'
function Blog(){
    let blogs=[
        {id:1,image:'./img/blog-1.jpg',date:'1402/06/15',btn:'مدرن'},
        {id:2,image:'./img/blog-2.jpg',date:'1401/02/25',btn:'اخبار'},
        {id:3,image:'./img/blog-3.jpg',date:'1400/10/08',btn:'نرم افزار'},
    ]
    return(
        <div className='blog-section'>
            <div className="blog-wrapper">

                <div className="blog-info">
                    <h3 className="blog-subtitle">آخرین اخبار ما</h3>
                    <h2 className='blog-title'>وبلاگ ما</h2>
                    <p className="blog-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                </div>

                <div className="blog-box-wrpapper">
                    <BlogBox {...blogs[0]}/>
                    <BlogBox {...blogs[1]}/>
                    <BlogBox {...blogs[2]}/>
                </div>

            </div>

        </div>
    )
}

export default Blog