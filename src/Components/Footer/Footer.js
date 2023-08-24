/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link,NavLink} from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import {BsInstagram , BsFacebook , BsYoutube ,BsTwitter , BsLinkedin} from 'react-icons/bs'
import pngwing from './image/pngwing.com.webp'
export default function Footer() {

    
    const {user} =useAuth

    return(
        <>
            <div className="footer-container">
                <div className="footer-alt-container">
                    <div className="footer sol">
                    <div className="sol-link">
                    <NavLink to="/saglik">Sağlık</NavLink>
                    <NavLink to="/beslenme">beslenme</NavLink>
                    <NavLink to="/calorie-card">calorıe card</NavLink>
                    <NavLink to="/hakkimizda">hakkımızda</NavLink>
                    </div>
                    <div className="sign-kismi">
                    {!user ? (<button className="btn footer">Giriş Yap</button>): null}
                    {!user ? (<button className="btn footer">Kayıt Ol</button>): null}
            <Link className="user" to='/profile'>
                    {user ? <h4 className="user-name">{user.username}</h4> : null }
            </Link>
                    </div>
                    </div>
                    <div className="footer orta">
                        <div className="icons">
                            <a className="face-a" ><BsFacebook className="face"/></a>
                            <a className="insta-a" ><BsInstagram className="insta"/></a>
                            <a className="in-a" ><BsLinkedin className="in"/></a>
                            <a className="twit-a" ><BsTwitter className="twit"/></a>
                            <a className="yt-a" ><BsYoutube className="yt"/></a>
                        </div>
                        <div className="author">
                            <p>Created By<span> | Mustafa TUTUS</span></p>
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