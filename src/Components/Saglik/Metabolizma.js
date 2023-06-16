import Metacalculator from "./Calculators/Metacalculator"

export default function Metabolizma() {
    return (
        <>
        <div className="gunluk-kalori-container">
            <h1>Metabolizma</h1>
            <div className="kalori hesap">
                <Metacalculator/>
            </div>
            <div className="kalori yazi">
                <h2>Bazal Metabolizma Hızını Bilmek Neden Önemli?</h2>
                <p>Günlük ne kadar kalori alınması gerektiğinin bilinmesi için BMH’nin bilinmesi oldukça önemlidir. Kilo verme, kilo alma, mevcut kiloyu koruma, aktif spor yapma gibi durumlarda günlük ne kadar kalori alınacağının bilinmesi için Bazal metabolizma hızını bilmek oldukça önemlidir.
                BMH’nizi bilmek ve buna uygun yaşamak için illa bir kilo hedefiniz olması da gerekmemektedir. Sağlıklı yaşamınızı sürdürmek ve gelecekte herhangi bir sağlık sorunu yaşamamak adına da BMH değerinizi bilmek ve buna uygun yaşamak önem taşır.
                Yavaş bazal metabolizma hızı hormonal bazı sorunlara da işaret edebileceğinden dikkat etmek gerekir. Bu sorunların çözülmemesi gelecekte daha ağır sonuçlara neden olabileceği gibi günlük hayatınızı da etkileyecektir.</p>
            </div>
        </div>
        </>
    )
}