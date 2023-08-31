/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link,NavLink} from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import {useFormik, Formik, Form, Field } from 'formik'
import Modal from "react-modal";
import {BsInstagram , BsFacebook , BsYoutube , BsLinkedin, BsGithub} from 'react-icons/bs'
import pngwing from './image/pngwing.com.webp'
import { useState } from "react"
export default function Footer() {

    
    const {user} =useAuth
    const { setUser } = useAuth()
    const [activeForm, setActiveForm] = useState(false)

    const [modalIsOpen , setModalIsOpen] = useState (false)
    const toggleModal= () =>{
        setModalIsOpen(!modalIsOpen)
    }
    const addActiveForm= () => {
        setActiveForm(!activeForm)
    }
    const addFormActive = `${activeForm ? 'active' : ''}`

    const formLogin  = () => {
        setModalIsOpen(!modalIsOpen)
        setActiveForm(false)
    }
    const formSign  = () => {
        setModalIsOpen(!modalIsOpen)
        setActiveForm(true)
    }
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
                    {!user ? (<button onClick={formLogin} className="btn footer">Giriş Yap</button>): null}
                    {!user ? (<button onClick={formSign} className="btn footer">Kayıt Ol</button>): null}
            <Link className="user" to='/profile'>
                    {user ? <h4 className="user-name">{user.username}</h4> : null }
            </Link>
                    </div>
                    </div>
                    <div className="footer orta">
                        <div className="icons">
                            <a className="face-a" ><BsFacebook className="face"/></a>
                            <a className="insta-a" href="https://www.instagram.com/tutusbey/" ><BsInstagram className="insta"/></a>
                            <a className="in-a" href="https://www.linkedin.com/in/mustafa-tutus-24b81321a/" ><BsLinkedin className="in"/></a>
                            <a className="twit-a" href="https://github.com/tutusjr"><BsGithub className="twit"/></a>
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