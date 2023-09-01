import './navbar.css';

function NavBar(){
    return(
        <div className='nav'>
            <div>
                <img src="./img/logo.png" alt="" className='logo' />
            </div>
            <div>
                <ul className="menu">
                    <li className='item'><a href="#" className="link">خانه</a></li>
                    <li className='item'><a href="#" className="link">درباره ما</a></li>
                    <li className='item'><a href="#" className="link">خدمات ما</a></li>
                    <li className='item'><a href="#" className="link">تعرفه ها</a></li>
                    <li className='item'><a href="#" className="link">وبلاگ</a></li>
                    <li className='item'><a href="#" className="link">نظرات مشتریان</a></li>
                </ul>
            </div>
            <div>
                <button>تماس</button>
            </div>

        </div>
    )
}


export default NavBar