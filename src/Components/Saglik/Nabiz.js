import Nabizcalculator from "./Calculators/Nabizcalculator"
import { Helmet } from "react-helmet"

export default function Nabiz() {
    return (
        <>
        <Helmet Helmet>
            <title>Kalp Ritmi Hesaplama</title>
            <meta name='description' content='Kalp Ritmi Hesaplama'/>
        </Helmet>
        <div className="gunluk-kalori-container">
        <h1>Nabız</h1>
        <div className="kalori hesap" >
                <Nabizcalculator/>
            </div>
            <div className= "kalori yazi" >
                <div className="nabiz bir">
                </div>
                <div className="nabiz iki">
                <h2 >Sağlığınıza katkı sağlayacak öneriler</h2>
                <p >Dinlenme sırasındaki kalp atış hızı, genel popülasyonda kalp damar cerrahisi hastalıklarının önemli bir belirleyicisidir. Artık diyet ve egzersiz programlarıyla yüksek riskli sağlık profillerinin olumlu bir şekilde değiştirilmesinin riski azaltabileceği ve dinlenme kalp atış hızı, kalp atış hızı değişkenliği ve kalp atış hızı iyileştirilmesi ile ilişkili olduğu kabul edilmektedir.
                Fiziksel olarak aktif olmak, kardiyovasküler hastalıkları önlemek için önemlidir . Amerikan Kalp Derneği (AHA) fiziksel aktivite için aşağıdakileri önermektedir:
                Haftada en az 30 dakika toplam 150 dakika boyunca en az 30 dakika orta şiddette aerobik aktivite VEYA toplam 75 dakika boyunca haftada en az üç gün en az 25 dakika yüksek yoğunluklu aerobik aktivite. Örneğin, orta şiddette bir yürüyüş, dakikada 100 adım veya 30 dakikada 3,000 adım anlamına gelmelidir. Sağlığınızın kontrolünü elinize alın! Doktorunuza danışın.</p>
                </div>
            </div>
        </div>
        </>
    )
}