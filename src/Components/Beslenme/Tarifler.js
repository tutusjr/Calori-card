import { NavLink, Link } from "react-router-dom"
import tarif1 from './image/tarif1.webp'
import tarif4 from './image/4.webp'
import tarif3 from './image/3.webp'
import tarif5 from './image/5.webp'
import tarif2 from './image/t2.webp'
import tarif6 from './image/islak-kek.webp'
import tarif7 from './image/mozaik.webp'
import { useNavigate } from "react-router-dom"
import {AiFillStar} from 'react-icons/ai'
import {Helmet} from 'react-helmet'


export default function Tarifler(){

    const navigate = useNavigate()

    return( 
    <>
        <Helmet Helmet>
            <title>Tarifler</title>
            <meta name='description' content='Tarifler Sayfasi'/>
        </Helmet>

    <div className="tarifler-container">
        <nav className="tarifler-nav">
            <Link to='/anasayfa'>Anasayfa</Link>
            <NavLink to='/beslenme/tarifler'>tarifler</NavLink>
            <Link to='/beslenme'>beslenme</Link>
        </nav>
        <div className="tarifler-baslik">
            <p>Tatlılar, doğru olarak hazırlandığında ve ölçülü olarak tüketildiğinde sağlıklı bir beslenme    programına iyi bir katkı sağlayabilir. Gerçek şu ki, hepimizin canı tatlı ister. Bu yüzden asıl soru, bu isteği nasıl yöneteceğimizdir.
                Lezzetten uzaklaşmayan ve ona katkıda bulunarak daha tatmin edici hale getiren doğal malzemeler, biraz yaratıcılıkla harika tatlılara dönüşebilir. Kuruyemişler, meyveler, yumurta, yulaf ve hurma gibi doğal bileşenler, sağlıklı besin maddeleri ile doludur. Aynı zamanda, doğal ve fit tatlılar için harika bileşenlerdir.</p>
            <h2>Tatlı krizine son veren pratik ve fit tarifler</h2>
        </div>
        <div className="tarifler-giris">
            {/* 1 */}
            <div 
            className="tarif-box bir" 
            onClick={() => navigate('/beslenme/tarifler/Chia-puding')}
            onMouseDown={(e) => e.button ===1 ? window.open('/beslenme/tarifler/Chia-puding', '_blank') : null}>
                <div className="tarif-img-box">
                <div className="tarif-img">
                    <img src={tarif2} alt="" />
                </div>
                </div>
                <div className="tarif-info">
                <div className="alt-yazi">
                    <h2>Chia Puding</h2>
                </div>
                <div className="alt-yazi">
                    <p>Chia tohumlu puding, yapması kolay, besleyici bir pudingdir; bir şey pişirmek zorunda olmadan kolayca hazırlanır. Temel malzemeleri birkaç dakika içinde bir araya getirin, ardından pudingin dokusunu geliştirmek için karışımı birkaç saat veya gece boyunca bekletin. Sonsuz varyasyonlar yaratmak için sevdiğiniz aromaları veya malzemeleri ekleyin!</p>
                </div>
                <div className="fake-views">
                    <p>12.200 <span>tiklanma</span></p>
                </div>
                <div className="fake-stars">
                    <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></span>
                </div>
                </div>
            </div>
            {/* 2 */}
            <div 
            className="tarif-box iki" 
            onClick={() => navigate('/beslenme/tarifler/Muffin')}
            onMouseDown={(e) => e.button ===1 ? window.open('/beslenme/tarifler/Muffin', '_blank') : null}>
                <div className="tarif-img-box">
                <div className="tarif-img">
                    <img src={tarif4} alt="" />
                </div>
                </div>
                <div className="tarif-info">
                <div className="alt-yazi">
                    <h2>Kırmızı Meyveli Çikolata Parçalı Sağlıklı Muffin</h2>
                </div>
                <div className="alt-yazi">
                    <p>Fırını 185 dereceye ayarlayın. Yulaf ununu, Hindistancevizi ununu, vanilyayı, kabartma tozunu bir kapta karıştırın. Başka bir kaba yumurta, şeker ve muzu koyup 3-4 dakika kadar çok az kabarana dek çırpın. Sütü ve yağı ekleyip tekrar çırpın. Islak malzemeye kuru malzemeyi ekleyip bir spatula ile karıştırın. Meyveleri ve çikolatayı ekleyip tekrar karıştırın...</p>
                </div>
                <div className="fake-views">
                    <p>12.200 <span>tiklanma</span></p>
                </div>
                <div className="fake-stars">
                    <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></span>
                </div>
                </div>
            </div>
            {/* 3 */}
            <div 
            className="tarif-box uc" 
            onClick={() => navigate('/beslenme/tarifler/Islak-kek')}
            onMouseDown={(e) => e.button ===1 ? window.open('/beslenme/tarifler/Islak-kek', '_blank') : null}>
            <div className="tarif-img-box">
                <div className="tarif-img">
                    <img src={tarif6} alt="" />
                </div>
                </div>
                <div className="tarif-info">
            <div className="alt-yazi">
                    <h2>Islak Kek</h2>
                </div>
                <div className="alt-yazi">
                    <p>Kek tarifleri arasından ıslak keki çok seviyor, ama şimdiye kadar ıslak kek tarifinin yapılışını bilmiyorsanız veya denemediyseniz iste firsat!</p>
                </div>
                <div className="fake-views">
                    <p>12.200 <span>tiklanma</span></p>
                </div>
                <div className="fake-stars">
                    <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></span>
                </div>
                </div>
            </div>
            {/* 4 */}
            <div 
            className="tarif-box dort" 
            onClick={()=> navigate('/beslenme/tarifler/Ev-yapimi-bounty')}
            onMouseDown={(e) => e.button ===1 ? window.open('/beslenme/tarifler/Ev-yapimi-bounty', '_blank') : null}>
            <div className="tarif-img-box">
                <div className="tarif-img">
                    <img src={tarif3} alt="" />
                </div>
                </div>
                <div className="tarif-info">
                <div className="alt-yazi">
                    <h2>Ev Yapimi Bounty</h2>
                </div>
                <div className="alt-yazi">
                    <p>Hindistan cevizi ve çikolatanın eşsiz uyumuna kimse hayır diyemez. Hele evde yaptıklarımızın lezzeti de gerçekten bir başka oluyor. Hadi o zaman buyursunlar tarifimize. Bu lezzeti çok seveceğinizden ve sık sık yapmak isteyeceğinizden eminiz. Lezzeti de keyfi de bol olsun.</p>
                </div>
                <div className="fake-views">
                    <p>12.200 <span>tiklanma</span></p>
                </div>
                <div className="fake-stars">
                    <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></span>
                </div>
                </div>
            </div>
            {/* 5 */}
            <div 
            className="tarif-box bes" 
            onClick={() => navigate('/beslenme/tarifler/Mozaik-pasta')}
            onMouseDown={(e) => e.button ===1 ? window.open('/beslenme/tarifler/Mozaik-pasta', '_blank') : null}>
            <div className="tarif-img-box">
                <div className="tarif-img">
                    <img src={tarif7} alt="" />
                </div>
                </div>
                <div className="tarif-info">
                <div className="alt-yazi">
                    <h2>Mozaik Pasta</h2>
                </div>
                <div className="alt-yazi">
                    <p>Bisküvi, tereyağı, toz şeker ve kakaonun bir araya gelip yaptığı en lezzetli pasta tariflerinden biri.</p>
                </div>
                <div className="fake-views">
                    <p>12.200 <span>tiklanma</span></p>
                </div>
                <div className="fake-stars">
                    <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></span>
                </div>
                </div>
            </div>
            {/* 6 */}
            <div 
            className="tarif-box alti" 
            onClick={() => navigate('/beslenme/tarifler/Yer-fistikli-dondurma')}
            onMouseDown={(e) => e.button ===1 ? window.open('/beslenme/tarifler/Yer-fistikli-dondurma', '_blank') : null}>
            <div className="tarif-img-box">
                <div className="tarif-img">
                    <img src={tarif1} alt="" />
                </div>
                </div>
                <div className="tarif-info">
                <div className="alt-yazi">
                    <h2>Yer Fıstıklı Dondurma</h2>
                </div>
                <div className="alt-yazi">
                    <p>Çocuklarımız için sağlıklı beslenme alışkanlığını destekleyecek, güzel tariflerden biri daha. Içinde işlenmiş şeker ve zararlı hiç bir şey olmayan, yüzde yüz doğal ve ev yapımı bir anne dondurması.</p>
                </div>
                <div className="fake-views">
                    <p>12.200 <span>tiklanma</span></p>
                </div>
                <div className="fake-stars">
                    <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></span>
                </div>
                </div>
            </div>
            {/* 7 */}
            <div 
            className="tarif-box yedi" 
            onClick={() => navigate('/beslenme/tarifler/Tahinli-trabzon-hurmasi')}
            onMouseDown={(e) => e.button ===1 ? window.open('/beslenme/tarifler/Tahinli-trabzon-hurmasi', '_blank') : null}>
            <div className="tarif-img-box">
                <div className="tarif-img">
                    <img src={tarif5} alt="" />
                </div>
                </div>
                <div className="tarif-info">
                <div className="alt-yazi">
                    <h2>Tahinli Trabzon Hurması</h2>
                </div>
                <div className="alt-yazi">
                    <p>Kabak tatlısı severlerin tadına bayılacağı, oldukça pratik bir tarifimiz var. Sağlıklı bir ara öğün olarak da gün içinde tüketebileceğiniz Trabzon hurma tatlısı tarifi için mutfağa geçin.</p>
                </div>
                <div className="fake-views">
                    <p>12.200 <span>tiklanma</span></p>
                </div>
                <div className="fake-stars">
                    <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></span>
                </div>
                </div>
            </div>
            
        </div>
    </div>
    </>
    )
}