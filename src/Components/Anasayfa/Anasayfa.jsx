import image from './images/1030841.webp'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Imageslider from "../Slideshow/Imageslider"
import { SliderData } from "../Slideshow/Sliderdata"
import { SliderData2 } from '../Slideshow/SliderData2'
import Imageslider2 from '../Slideshow/ImageSlider2'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import Modal from 'react-modal'
import { useFormik, Formik, Form, Field } from 'formik'
import {Helmet} from  'react-helmet'

export default function Anasayfa() {


    const [modalIsOpen , setModalIsOpen] = useState(false)
    const [activeForm, setActiveForm] = useState(false)
    const { setUser } = useAuth()

    const addActiveForm= () => {
        setActiveForm(!activeForm)
    }
    
    const toggleModal= () =>{
        setModalIsOpen(!modalIsOpen)
    }

    const {user} = useAuth()

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

    const addFormActive = `${activeForm ? 'active' : ''}`

    return(
        <>
        <Helmet>
            <title>Calorie-Card</title>
            <meta name='description' content='Calorie-Card Saglik Asistaniniz'/>
        </Helmet>
        
            <div className="anasayfa">
            <Navbar/>
            <div className='giris'>
                <h1 className='alt-baslik'>sağlık asistanınız</h1>
                <h1 className='ust-baslik'>caloıre-card</h1>
                <img src={image} alt="resim yuklenemedi" />
                <Link className='katil'>
                   {!user ?  <button onClick={formSign} className='katil-btn'>BIZE KATIL!</button> : null}
                </Link>
            </div>
            <div className="ikinci-kisim">
                <div className="sol-yazi">
                    <p>“Calorie Card” ve beraberindeki aplikasyon tasarımı sayesinde online veya market alışverişlerinde paketli ürünler için yapılan satın alma durumunun birey için sağlıklı bir şekilde tamamlanması sağlanmaktadır. Bireylerin aplikasyona girecekleri bilgiler doğrultusunda kart aktivasyonu tamamlanmaktadır. Bireylerin vücut kitle indeksi hesaplanarak bu veri kart içerisine aktarılmaktadır. Alışveriş esnasında marketlerde bulunan barkod okuyuculara okutulan kart sayesinde bireyin günlük, aylık veya yıllık olarak alabileceği kalori miktarı görülmektedir. Satın alınan ürünün kalori miktarı, olarak birey veya bireylerin günlük alabilecekleri kalori miktarından otomatik olarak düşürülerek sağlıklı alışveriş aşamasının ilk güvenlik seviyesi tamamlanmaktadır. Aynı zamanda daha spesifik ve besin kontrolü gerektiren ciddi rahatsızlıklarda, kişinin alışverişi tamamlanmadan önce, satın alınan ürünlerin özellikleri ve içerikleri baştan sona tekrar taranarak ikinci güvenlik aşaması da geçildikten sonra alışveriş işlemi başarıyla tamamlanmaktadır.  </p>
                </div>
                <div className='sag-foto'>
                    <Imageslider slides={SliderData}/>
                </div>
            </div>
            <div className="ucuncu-kisim">
                <div className="sol-foto">
                <Imageslider2 slides={SliderData2}/>
                </div>
                <div className="sag-yazi">
                    <p>Cep telefonu aplikasyon içerisinden uygun olan kategoriler seçilerek aynı zamanda alınan ürünlerin takibi gerçekleşebilmektedir. Satın alınan ürün kare kodu okutularak ürün içerisindeki merak edilen besin maddelerinin görülmesi sağlanabilmektedir. Bu sayede, satın alınan ürünün alerjik reaksiyonlar ve gıda in-toleransları gibi etkileri tetikleyen madde içerip içermediği incelenebilmektedir. Bu avantajlı özellik sayesinde, bireyler için gözden kaçan olası hastalık tetikleyici unsurların en aza indirmesi sağlanmaktadır. </p>
                    <p className='ikinci-p'>Özetle; 
                        sağlıklı yaşamı benimsemiş, belirli bir besine alerjisi bulunan veya besinlerle ilgili dikkat edilmesi gereken bir hastalığa sahip bireylerin hayat standartlarını yükselterek daha sağlıklı bir yaşam kazandırmak amaçlanmaktadır. Bu amaca ulaşmak için besinlerin içerikleri hakkında akıllı filtreleme sistemi kullanılarak yapay bir irade kazandırması hedeflenmektedir.
                    </p>
                </div>
            </div>
            <Footer/>
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