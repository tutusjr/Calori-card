import image from './images/1030841.jpg'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Imageslider from "../Slideshow/Imageslider"
import { SliderData } from "../Slideshow/Sliderdata"
import { SliderData2 } from '../Slideshow/SliderData2'
import Imageslider2 from '../Slideshow/ImageSlider2'
import Footer from '../Footer/Footer'

export default function Anasayfa() {


    const {user} = useAuth()

    return(
        <div className="anasayfa">
            <Navbar/>
            <div className='giris'>
                <h1 className='alt-baslik'>sağlık asistanınız</h1>
                <h1 className='ust-baslik'>caloıre-card</h1>
                <img src={image} alt="resim yuklenemedi" />
                <Link className='katil' to='/Sign'>
                   {!user ?  <button className='katil-btn'>BIZE KATIL!</button> : null}
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
    )
} 