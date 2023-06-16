import { Link,NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import {BsInstagram , BsFacebook , BsYoutube ,BsTwitter , BsLinkedin} from 'react-icons/bs'
import pngwing from './image/pngwing.com.png'
export default function Footer() {

    const navigate= useNavigate()
    const {user} =useAuth
    const toLogin = () => {
        navigate('/login')
    }

    const toSign = () => {
        navigate('/sign')
    }

    return(
        <>
            <div className="footer-container">
                <div className="footer-alt-container">
                    <div className="footer sol">
                    <div className="sol-link">
                    <NavLink to="/calorie-card">calorie card</NavLink>
                    <NavLink to="/saglik">Sağlık</NavLink>
                    <NavLink to="/beslenme">beslenme</NavLink>
                    <NavLink to="/hakkimizda">hakkımızda</NavLink>
                    </div>
                    <div className="sign-kismi">
                    {!user ? (<button onClick={toLogin} className="btn footer">Giriş Yap</button>): null}
                    {!user ? (<button onClick={toSign} className="btn footer">Kayıt Ol</button>): null}
            <Link className="user" to='/profile'>
                    {user ? <h4 className="user-name">{user.username}</h4> : null }
            </Link>
                    </div>
                    </div>
                    <div className="footer orta">
                        <div className="icons">
                            <a className="face-a" href="#"><BsFacebook className="face"/></a>
                            <a className="insta-a" href="#"><BsInstagram className="insta"/></a>
                            <a className="in-a" href="#"><BsLinkedin className="in"/></a>
                            <a className="twit-a" href="#"><BsTwitter className="twit"/></a>
                            <a className="yt-a" href="#"><BsYoutube className="yt"/></a>
                        </div>
                    </div>
                    <div className="footer sag">
                        <img className="store-footer" src={pngwing} alt="" />
                    </div>
                </div>
            </div>    
        </>
    )
}