import Harcanankaloricalculator from "./Calculators/Harcanankaloricalculator"
import { Helmet } from "react-helmet"

export default function HarcananKalori() {
    return (
        <>
        <Helmet Helmet>
            <title>Harcanan Kalori Hesaplayıcı</title>
            <meta name='description' content='Harcanan Kalori Hesaplayıcı'/>
        </Helmet>
        <div className="gunluk-kalori-container">
        <h1>Harcanan Kalori</h1>
        <div className="kalori hesap">
        <Harcanankaloricalculator/>
        </div>
        <div className= "kalori yazi" >
            <h2>Harcanan Kaloriler</h2>
            <p className="harcanan-kalori">Sağlıklı bir yaşam sürmek ve kilo alma-verme hedeflerine ulaşmak için Vücuda alınan kalori ile yakılan kalori arasında ki ilişki çok önemlidir. Gün içinde yaktığımız kalori miktarını bilmek bize günlük kalori ihtiyacı hesabı yaparken yardımcı olacaktır. Hatta yardımcı olacak kelimesi yerine direk etkiler demek daha doğrudur. Harcanan kaloriyi hesaplama aracı ile yaptığınız herhangi bir aktivitede veya sporda ne kadar kalori harcadığınızı bulabilirsiniz. Yapmanız gereken tek şey hesaplama aracına aktivite türünü,vücut ağırlığınızı ve aktivite sürenizi girdikten sonra hesaplama butonuna tıklamak. Bunun sonucu olarak yaptığınız aktiviteye ve bu aktiviteyi devam ettirme sürenize göre harcadığınız kaloriyi görebilirsiniz. </p>
        </div>
        
        </div>
        </>
    )
}