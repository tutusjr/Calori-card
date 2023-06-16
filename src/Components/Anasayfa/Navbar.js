import { useState, useEffect } from "react";
import {Link, NavLink, useNavigate} from 'react-router-dom'
import logo from './images/logo2temiz.png'
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {

    const [isFixed, setIsFixed] = useState(false);
    const [activeSection, setActiveSection] = useState(false)
    const {user} = useAuth()
    const navigate = useNavigate()

    const handleMouseHover = (section) => {
        setActiveSection(section)
    };
    const handleMouseleave = () => {
        setActiveSection(null)
    };

    const toLogin = () => {
        navigate('/login')
    }

    //navbarin sabitligi
    useEffect(() => {
        // Scroll olayını dinle
        const handleScroll = () => {
          if (window.scrollY > 0 && !isFixed) {
            setIsFixed(true);
          } else if (window.scrollY === 0 && isFixed) {
            setIsFixed(false);
          }
        };
    
        // Scroll olayını dinlemeye başla
        window.addEventListener('scroll', handleScroll);
    
        // Temizle
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isFixed]);


      const navbarClasses = `navbar ${isFixed ? 'scrolled' : ''}`;


    return(
        <>
        <nav className={navbarClasses}>
            <div className="logo">
                <Link to="/anasayfa">
                <img src={logo} alt="bok" />
                </Link>
            </div>
            <div className="menus">
                <NavLink onMouseEnter={()=> handleMouseHover('saglik')} onMouseLeave={handleMouseleave} to="/saglik">Sağlık
                {activeSection === 'saglik' && (
                    <ul className="alt-yapi saglik">
                        <li>
                            <Link to='/saglik/Gunluk-kalori-ihtiyaci'>Günlük Kalori ihtiyacı</Link>
                        </li>
                        <li>
                            <Link to='/saglik/Metabolizma-Hizi-Hesaplama'>Metabolizma Hızı Hesaplama</Link>
                        </li>
                        <li>
                            <Link to='/saglik/Boy-Kilo-Endeksi-Hesaplama'>Boy-Kilo Endeksi Hesaplama</Link>
                        </li>
                        <li>
                            <Link to='/saglik/Nabiz-Hesaplama'>Nabız Hesaplama</Link>
                        </li>
                        <li>
                            <Link to='/saglik/Gunluk-Su-Ihtiyaci-Hesaplama'>Günlük Su Ihtiyacı Hesaplama</Link>
                        </li>
                        <li>
                            <Link to='/saglik/Bel-Kalca-Orani-Hesaplama'>Bel-Kalça Oranı Hesaplama</Link>
                        </li>
                        <li>
                            <Link to='/saglik/Harcanan-Kalori-Hesaplama'>Harcanan Kalori Hesaplama</Link>
                        </li>
                    </ul>)}
                </NavLink>
                <NavLink onMouseEnter={()=> handleMouseHover('beslenme')} onMouseLeave={handleMouseleave} to="/beslenme">beslenme
                {activeSection === 'beslenme' && (
                   <ul className="alt-yapi beslenme">
                    <li>
                        <Link to='/beslenme/Tarifler'>Tarifler</Link>
                    </li>
                   </ul>)} 
                </NavLink>
                <NavLink to="/calorie-card">calorie card</NavLink>
                <NavLink to="/hakkimizda">hakkımızda</NavLink>
                
            </div>
            
            {!user ? (<button onClick={toLogin} className="btn">Giriş Yap</button>): null}
            <Link className="user" to='/profile'>
                    {user ? <h4 className="user-name">{user.username}</h4> : null }
            </Link>
            
        </nav>
        </>
    )
}