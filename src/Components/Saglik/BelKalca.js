import Belkalcacalculator from "./Calculators/Belkalcacalculator";


export default function BelKalca() {
    return(
        <>
        <div className="gunluk-kalori-container">
            <h1>Bel kalca</h1>
            <div className="kalori hesap">
                <Belkalcacalculator/>
            </div>
            <div className= "kalori yazi">
                <h2>Bel-Kalça Oranı Hakkında</h2>
                <p>Vücuttaki toplam yağ miktarı önemli olmakla beraber, yağın nerede biriktiğini bilmek daha önemlidir. Karın çevresinde gerçekleşen yağ birikimi, vücudun diğer bölgelerinde (kalça, basen) olan yağ birikiminden daha fazla sağlık risklerine neden olur. Bu risk için basit fakat doğru bir yöntem bel/kalça çevresi ölçümüdür.

Diyetisyen (Beslenme Uzmanı) tarafından esnemeyen mezura ile ölçülmelidir. Doğru ölçümü için uzman yardımı almak önemlidir.

Bel/Kalça oranı, şişmanlığa bağlı kronik hastalıkların görülme riskinin değerlendirilmesi açısından önemlidir. Bu oran cinsiyete göre farklılıklar göstermektedir. Bel/Kalça oranı erkeklerde 1.0 ve kadınlarda 0.8’in üzerine çıkmamalıdır.

Bel çevresinin tek başına ölçümü de kronik hastalıkların riski açısından tamamlayıcı olabilmektedir.</p>
            </div>
        </div>
        
        </>
    )
}