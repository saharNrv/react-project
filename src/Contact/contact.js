import './contact.css'
function Contact(){
    return(
        <div className='contact-section'>
            <div className="contact-wrapper">
                <div className="contact-right">
                    <form className='form'>
                        <div className="form-wrap">
                            <span > اسم</span>
                            <input type="text" />
                        </div>
                        <div className="form-wrap">
                            <span > شماره تماس</span>
                            <input type="text" />
                        </div>
                        <div className="form-wrap">
                            <span > ایمیل</span>
                            <input type="text" />
                        </div>
                        <div className="form-wrap">
                            <span > پیام</span>
                            <textarea name="" id=""  rows="3"></textarea>
                        </div>
                        <button className='form-btn'>ارسال</button>
                    </form>
                </div>

                <div className="contact-left">
                    <div className="contact-info">
                        <h2 className="contact-title">تماس با ما</h2>
                        <p className="contact-text" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم 
                        از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    </div>
                    <div className='contact-img'>
                        <img src="./img/contact.svg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Contact