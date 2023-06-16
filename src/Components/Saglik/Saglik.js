import Navbar from "../Anasayfa/Navbar"
import bgimage from './image/saglik-bg.png'
import calorie from './image/calorie.jpg'
import meta from './image/metabolizma.png'
import boykilo from './image/boy-kilo.jpg'
import nabiz from './image/nabiz.jpg'
import belkalca from './image/belkalca.jpg'
import gunluksu from './image/gunluksu.jpg'
import harcanankalori from  './image/harcanankalori.jpg'
import { useNavigate,} from "react-router-dom"
import Footer from "../Footer/Footer"
export default function Saglik() {


    const navigate = useNavigate()

    return(
        <>
        <Navbar/>
        
        <div className="saglik-container">
            <img src={bgimage} alt=""/>
            <div className="alt-saglik-container">
            <div className="box-container bir">
                <div onClick={()=> navigate('/saglik/Gunluk-kalori-ihtiyaci')} className="box">
                    <img src={calorie} alt="calori"/>
                    <span>günlük kalori ihtiyacı</span>  
                </div>
                <div onClick={()=> navigate('/saglik/metabolizma-hizi-hesaplama')} className="box">
                    <img src={meta} alt="resim" />
                    <span>Metabolizma hızı hesaplama</span>
                </div>
                <div onClick={()=> navigate('/saglik/boy-kilo-endeksi-hesaplama')} className="box">
                    <img src={boykilo} alt="resim" />
                    <span>Boy-Kilo endeksi hesaplama</span>
                </div>
            </div>
            <div className="box-container iki">
                <div onClick={()=> navigate('/saglik/Nabiz-hesaplama')}className="box iki">
                    <img src={nabiz} alt="resim" />
                    <span>nabız hesaplama</span>
                </div>
                <div onClick={()=> navigate('/saglik/gunluk-su-ihtiyaci-hesaplama')} className="box">
                    <img src={gunluksu} alt="resim" />
                    <span>günlük su ihtiyacı hesaplama</span>
                </div>
                <div onClick={()=> navigate('/saglik/bel-kalca-orani-hesaplama')} className="box">
                    <img src={belkalca} alt="resim" />
                    <span>bel-kalça oranı hesaplama</span>
                </div>
            </div>
            <div onClick={()=> navigate('/saglik/harcanan-kalori-hesaplama')} className="box-container uc">
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