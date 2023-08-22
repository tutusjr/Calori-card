import { useState, useEffect} from "react";
import {useFormik, Formik, Form, Field } from 'formik'
import {Link, NavLink} from 'react-router-dom'
import logo from './images/logo2temiz.png'
import { useAuth } from "../../context/AuthContext";
import Modal from "react-modal";
import {AiOutlineUser} from 'react-icons/ai'
import {SlArrowDown} from 'react-icons/sl'


export default function Navbar() {

    const [isFixed, setIsFixed] = useState(false);
    const {user} = useAuth()
    const { setUser } = useAuth()
    const [activeForm, setActiveForm] = useState(false)
    const [modalIsOpen , setModalIsOpen] = useState(false)
    const [activeBar , setActiveBar] = useState(false)
    const [activeArrow, setActiveArrow] = useState(false)
    const [activeArrow2, setActiveArrow2] = useState(false)


    const addActiveForm= () => {
        setActiveForm(!activeForm)
    }

    const mouseLeave=() => {
        if(window.innerWidth <= 1300){
            setActiveArrow(false)
            setActiveArrow2(false)
        }
    }

    const toggleModal= () =>{
        setModalIsOpen(!modalIsOpen)
    }

    const formLogin  = () => {
        setModalIsOpen(!modalIsOpen)
        setActiveForm(false)
    }
    //navbarin sabitligi2
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

      const navbarClasses = `${isFixed ? 'scrolled' : ''}`;
      const addFormActive = `${activeForm ? 'active' : ''}`

      useFormik({
            initialValues:{
            username:'',
            password:''
        },
        onSubmit: values => {
            setUser(values)
        }
    })


    return(
        <>
        <nav className={`navbar ${navbarClasses} ${activeBar ? 'active' : ''}`}>
            <div className="logo">
                <Link to="/anasayfa">
                <img src={logo} alt="bok" />
                </Link>
            </div>
            <div
            className={`menus ${activeBar ? 'active' : ''}`}>
                <div className="menu-arrow">
                <NavLink 
                className='menuler saglik' 
                to="/saglik">Sağlık
                <div  className="sekmeler saglik">
                    <ul className={`alt-yapi saglik ${activeArrow ? 'active' : null}`}>
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
                    </ul>
                </div>
                </NavLink>
                <SlArrowDown
                onClick={()=> setActiveArrow(!activeArrow)}
                onMouseLeave={mouseLeave}
                className={`mobile-arrow-down ${activeArrow ? 'active' : ''}`}/>
                </div>

                <div className="menu-arrow">
                <NavLink
                className='menuler beslenme'
                to="/beslenme"> beslenme
                <div className="sekmeler beslenme">
                   <ul className={`alt-yapi beslenme ${activeArrow2 ? 'active' : null}`}>
                    <li>
                        <Link to='/beslenme/tarifler'>Tarifler</Link>
                    </li>
                   </ul>
                </div>
                </NavLink>
                <SlArrowDown
                onClick={()=> setActiveArrow2(!activeArrow2)}
                onMouseLeave={mouseLeave}
                className={`mobile-arrow-down ${activeArrow2 ? 'active' : ''}`}/>
                </div>

                <div className="menu-arrow">
                <NavLink
                className='menuler'
                to="/calorie-card">calorıe card</NavLink>
                </div>

                <div className="menu-arrow">
                <NavLink 
                className='menuler'
                to="/hakkimizda">hakkımızda</NavLink>
                </div>
            </div>
            <button
            onClick={()=> setActiveBar(!activeBar)} 
            className={`menu__icon ${activeBar ? 'active': ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {!user ? (<button onClick={formLogin} className="mobile-btn"><AiOutlineUser className="user-icon"/></button>): null}
            {!user ? (<button onClick={formLogin} className="btn">Giriş Yap</button>): null}
            <Link className="user" to='/profile'>
                    {user ? <h4 className="user-name">{user.username}</h4> : null }
            </Link>
        </nav>

        <Modal 
                appElement={document.getElementById('root')}
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className='about-modal'
                overlayClassName='about-modal-overlay'>
        <div className="main-container">
            <div className='form'>
                <div className={`card login ${addFormActive}`}>
                <h1 className='login-title'>Giris Yap</h1>
            <Formik initialValues={{
                    username:'',
                    password:''
            }} 
            onSubmit={values => {
                 setUser(values)
                 toggleModal();
            }}>
                {({values}) => (
                <Form className='input'>
                    <div className="input-container">
                        <span className='overlay'>Kullanici Adi</span>
                        <Field autocomplete="off" required=" " name='username'/>
                    </div>
                    <div className="input-container">
                        <span className='overlay'>Sifre</span>
                        <Field outocomplate='off' required=" " name='password' type='password'/>
                    </div>
                    <button className='giris-btn' type='submit'>Giris Yap</button>
                    <Link className='login-bottom' >Sifrenizi mi Unuttunuz</Link>
                    <Link className='login-bottom flip' onClick={addActiveForm} >Hesabiniz yok mu? hemen kaydolun.</Link>
                </Form>
                )}
                </Formik>
                </div>
                <div className={`card sign ${addFormActive}`}>
                <h1 className='login-title'>Kayit ol</h1>
        <Formik initialValues={{
                    username:'',
                    password:'',
                    email:''
            }} onSubmit={values => {
                 console.log(values)
            }}>
                     {({values}) => (
                <Form className='input'>
                    <div className="input-container">
                        <span className='overlay'>Kullanici Adi</span>
                        <Field autocomplete="off" required=" " name='username'/>
                    </div>
                    <div className="input-container">
                        <span className='overlay'>Sifre</span>
                        <Field outocomplate='off' required=" " name='password' type='password'/>
                    </div>
                    <div className="input-container">
                        <span className='overlay'>E-mail</span>
                        <Field autocomplete="off" name='Email' type='email'/>
                    </div>
                    <button className='giris-btn' type='submit'>Kayit Ol</button>
                    <Link className='login-bottom' onClick={addActiveForm} to='#'>Hesabınız var mı? Giriş yapın.</Link>
                </Form>
            )}
        </Formik>
                </div>
            </div>
        </div>
        
      </Modal>
        </>
    )
}