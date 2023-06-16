import Navbar from "../Anasayfa/Navbar";
import { useNavigate } from "react-router-dom";
import beslenme from './image/saglikli-beslenme-neden-onemlidir.jpg'

export default function Beslenme() {

    const navigate = useNavigate()
   

    const toTarifler= () => {
        navigate('/beslenme/tarifler')
    }



    return(
        <>
        <Navbar/>
        <div className="beslenme-container">
            <div className="beslenme-giris">
            <div className="beslenme-sol">
                <h2>Sağlıklı Beslenme Nedir?</h2>
                <p>Sağlıklı beslenme, hem sağlığın hem de vücut formunun korunması açısından en önemli konulardan bir tanesidir. Bebeklerde anne sütü veya formülalar ile başlayan süreçten, yetişkinlik ve yaşlılık dönemine kadar tüm yaş gruplarında sağlıklı ve dengeli beslenme konusunda gerekliliklerin yerine getirilmesi, hastalıklardan korunmak ve ideal vücut kütlesine sahip olmak açısından büyük önem taşır. Vücutta günlük işlevlerin sorunsuz bir şekilde yerine getirilebilmesi için tüm besin ögelerinin eksiksiz bir şekilde karşılanması gerekir. Bunun sağlanabilmesi için sağlıklı ve dengeli beslenme elzemdir. Ek olarak her yaştan birey için obezite, akut ve kronik birçok hastalık türü için en önemli risk faktörleri arasında yer alır. Dolayısıyla sağlıklı beslenme ve enerji ihtiyacına uygun kalori alımı ile vücut kütlesinin ideal aralıkta tutulması, hastalıklardan korunmak ve sağlıklı bir yaşam sürebilmek adına oldukça önemlidir. Tüm bu nedenlerden dolayı, bebeklikten yaşlılığa kadar insan ömrünün her döneminde sağlıklı beslenme konusunda gerekli özen gösterilmeli ve bu konuda bilinçli davranmaya gayret edilmelidir.</p>
            </div>
            <div className="beslenme-sag">
                <img src={beslenme} alt="" />
            </div>
            </div>
            
            <div className="beslenme-alt">
                <button onClick={toTarifler} className="alt-btn tarifler">Tarifler</button>
            </div>
        </div>
        </>
    )
}