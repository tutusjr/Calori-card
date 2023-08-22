import { useAuth } from "../context/AuthContext"
import { useState } from "react"
import Modal from "react-modal";
import {useFormik, Formik, Form, Field } from 'formik'
import {Link} from 'react-router-dom'


export default function ModalComponent(){


    const { setUser } = useAuth()
    const [activeForm, setActiveForm] = useState(false)
    const [modalIsOpen , setModalIsOpen] = useState(false)

    const addActiveForm= () => {
        setActiveForm(!activeForm)
    }
    
    const toggleModal= () =>{
        setModalIsOpen(!modalIsOpen)
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

    const addFormActive = `${activeForm ? 'active' : ''}`

    return(
    <>
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