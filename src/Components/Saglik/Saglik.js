import Navbar from "../Anasayfa/Navbar"
import bgimage from './image/saglik-bg.png'
import calorie from './image/calorie.jpg'
import meta from './image/metabolizma.png'
import boykilo from './image/boy-kilo.jpg'
import nabiz from './image/nabiz.jpg'
import belkalca from './image/belkalca.jpg'
import gunluksu from './image/gunluksu.jpg'
import harcanankalori from  './image/harcanankalori.jpg'
import { useNavigate} from "react-router-dom"
import Footer from "../Footer/Footer"
import { Helmet } from "react-helmet"
export default function Saglik() {


    const navigate = useNavigate()

    return(
        <>
        <Helmet Helmet>
            <title>Sağlık</title>
            <meta name='description' content='Sağlık Sayfası'/>
        </Helmet>
        <Navbar/>
        <div className="saglik-container">
            <img src={bgimage} alt=""/>
            <div className="alt-saglik-container">
            <div className="box-container bir">
                <div 
                onClick={()=> navigate('/saglik/Gunluk-kalori-ihtiyaci')} className="box"
                onMouseDown={(e) => e.button ===1 ? window.open('/saglik/Gunluk-kalori-ihtiyaci', '_blank') : null}>
                    <img src={calorie} alt="calori"/>
                    <span>günlük kalori ihtiyacı</span>  
                </div>
                <div 
                onClick={()=> navigate('/saglik/metabolizma-hizi-hesaplama')} className="box"
                onMouseDown={(e) => e.button ===1 ? window.open('/saglik/metabolizma-hizi-hesaplama', '_blank') : null}>
                    <img src={meta} alt="resim" />
                    <span>Metabolizma hızı hesaplama</span>
                </div>
                <div 
                onClick={()=> navigate('/saglik/boy-kilo-endeksi-hesaplama')} className="box"
                onMouseDown={(e) => e.button ===1 ? window.open('/saglik/boy-kilo-endeksi-hesaplama', '_blank') : null}>
                    <img src={boykilo} alt="resim" />
                    <span>Boy-Kilo endeksi hesaplama</span>
                </div>
            </div>
            <div className="box-container iki">
                <div 
                onClick={()=> navigate('/saglik/Nabiz-hesaplama')}className="box iki"
                onMouseDown={(e) => e.button ===1 ? window.open('/saglik/Nabiz-hesaplama', '_blank') : null}>
                    <img src={nabiz} alt="resim" />
                    <span>nabız hesaplama</span>
                </div>
                <div 
                onClick={()=> navigate('/saglik/gunluk-su-ihtiyaci-hesaplama')} className="box"
                onMouseDown={(e) => e.button ===1 ? window.open('/saglik/gunluk-su-ihtiyaci-hesaplama', '_blank') : null}>
                    <img src={gunluksu} alt="resim" />
                    <span>günlük su ihtiyacı hesaplama</span>
                </div>
                <div 
                onClick={()=> navigate('/saglik/bel-kalca-orani-hesaplama')} className="box"
                onMouseDown={(e) => e.button ===1 ? window.open('/saglik/bel-kalca-orani-hesaplama', '_blank') : null}>
                    <img src={belkalca} alt="resim" />
                    <span>bel-kalça oranı hesaplama</span>
                </div>
            </div>
            <div 
            onClick={()=> navigate('/saglik/harcanan-kalori-hesaplama')} className="box-container uc"
            onMouseDown={(e) => e.button ===1 ? window.open('/saglik/harcanan-kalori-hesaplama', '_blank') : null}>
                <div className="box uc">
                    <img src={harcanankalori} alt="resim" />
                    <span>harcanan kalori hesaplama</span></div>
            </div>
        </div>
        <footer className="saglik-footer">
            <Footer/>
        </footer>
        </div>
        </>
    )
}