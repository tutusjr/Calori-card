import Nabizcalculator from "./Calculators/Nabizcalculator"

export default function Nabiz() {
    return (
        <>
        
        <div className="gunluk-kalori-container">
        <h1>Nabız</h1>
        <div className="kalori hesap" >
                <Nabizcalculator/>
            </div>
            <div className= "kalori yazi" >
                <h2 className="nabiz-baslik">Kalp Atış Hızı Hesaplama Nasıl Olmalıdır?</h2>
                <ol className="nabiz-list">
                    <li>
                    Nabzınızı bileğinizin iç kısmına baş parmağınızla veya boyun bölgenizdeki gırtlağın her iki tarafında bulunan arter yani atardamardan ölçeceksiniz.
                    </li>
                    <li>
                    Bileğinizdeki veya boynunuzdaki kan damarlarını hafifçe bastırmak için ilk iki parmağınızın ucunu (işaret ve orta parmaklar) kullanın.
                    </li>
                    <li>
                    Nabız atım sayısını 60 saniye (1 dakika) boyunca sayın ya da atım sayısını 10 saniye boyunca sayın ve 6 ile çarpın ve dakikadaki atımınızı bulun.
                    </li>
                </ol>
                <h2 className="nabiz-baslik iki">Sağlığınıza katkı sağlayacak öneriler:</h2>
                <p className="nabiz-p">Dinlenme sırasındaki kalp atış hızı, genel popülasyonda kalp damar cerrahisi hastalıklarının önemli bir belirleyicisidir. Artık diyet ve egzersiz programlarıyla yüksek riskli sağlık profillerinin olumlu bir şekilde değiştirilmesinin riski azaltabileceği ve dinlenme kalp atış hızı, kalp atış hızı değişkenliği ve kalp atış hızı iyileştirilmesi ile ilişkili olduğu kabul edilmektedir.

                Fiziksel olarak aktif olmak, kardiyovasküler hastalıkları önlemek için önemlidir . Amerikan Kalp Derneği (AHA) fiziksel aktivite için aşağıdakileri önermektedir:
                Haftada en az 30 dakika toplam 150 dakika boyunca en az 30 dakika orta şiddette aerobik aktivite VEYA toplam 75 dakika boyunca haftada en az üç gün en az 25 dakika yüksek yoğunluklu aerobik aktivite. Örneğin, orta şiddette bir yürüyüş, dakikada 100 adım veya 30 dakikada 3,000 adım anlamına gelmelidir. Sağlığınızın kontrolünü elinize alın! Doktorunuza danışın.</p>
            </div>
        </div>
        </>
    )
}