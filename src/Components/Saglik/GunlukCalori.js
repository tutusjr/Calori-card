import BmhCalculator from "./Calculators/Bmhcalculator"

export default function GunlukCalori() {
    return (
        <>
        
        <div className="gunluk-kalori-container">
                <h1>Günlük kalori</h1>
            <div className="kalori hesap">
                <BmhCalculator/>
            </div>
            <div className="kalori yazi">
                <h2>Günde kaç kalori almalıyım?</h2>
            <p>
                Bazal metabolizma hesaplaması sonucu elde edilen hız sabit bir değer değildir. Kişilerin yağsız vücut kütlesini artıracak egzersizler yapması, hormonal bozuklukların giderilmesi, doğru beslenme, düzenli uyku gibi desteklerle bazal metabolizma hızını artırabilirsiniz. Günlük sıvı tüketimine dikkat edilmesi ve vücut ağırlığına göre kişinin alması gereken su miktarının altına düşmemesi de bazal metabolizmanın yavaşlamaması için önemlidir. Unutmayın, bazal metabolizma hızınızı ne kadar yüksek tutabilirseniz, almanız gereken günlük kalori de o oranda artar. Yapılan uzun süreli yanlış diyetler, sık sık kilo alıp vermek, erken yaşlarda ihtiyaç olmasa dahi düşük kalorili diyetleri uygulamak, yetersiz sıvı alımı bazal metabolizma hızınızı yavaşlatabilir. Bu durum da günlük almanız gereken kaloriyi düşürür.
            </p>
            </div>
        </div>
        </>
    )
}