import './opinion.css'
function Opinion(){
    return(
        <div className='opinion-section'>
            <div className="opinion-wrapper">
                <div className="opinion-right">
                    <div className="opinion-ifon">
                    <h3 className='opinion-subtitle'>نظرات مشتریان</h3>
                    <h2 className='opinion-title'>لورم ایپسوم متن ساختگی</h2>
                    <p className="opinion-text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم 
                    از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                     و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز 
                    </p>
                    <p className="opinion-btn"> اسم شخص</p>

                    </div>

                </div>
                <div className="opinion-left">
                    <img src="./img/testi-2.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Opinion