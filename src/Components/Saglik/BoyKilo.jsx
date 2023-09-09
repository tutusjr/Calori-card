import Boykilocalculator from "./Calculators/Boykilocalculator"
import { Helmet } from "react-helmet"

export default function BoyKilo() {
    return(
        <>
        <Helmet Helmet>
            <title>Boy-Kilo Endeksi Hesaplama</title>
            <meta name='description' content='Boy-Kilo Endeksi Hesaplama'/>
        </Helmet>
        <div  className="gunluk-kalori-container">
            <h1>Boy-kilo endeksi</h1>
            <div className="kalori hesap" >
                <Boykilocalculator/>
            </div>
            <div className="kalori yazi">
                <h2>Vücut Kitle İndeksi Sonuçları Ne Anlama Gelir?</h2>
                <p className="boykilo">VKİ hesaplamasında elde edilen sonuç vücudunuzdaki yağ oranı, vücut tipi, yağ ve kas dokusu ile alakalı değildir. Bu yüzden bir değerlendirme yapılırken sadece VKİ hesaba katılmamalıdır. Sadece VKİ’yi baz alıp diğer etmenleri göz ardı etmek kişinin sağlığıyla ilgili pek çok unsuru görmezden gelmek olacaktır.

İdeal kilo ölçümünün yapılabilmesi adına VKİ hesaplamasıyla birlikte başka uygulamalar da yapılır. Bunlardan biri bel çevresi ölçümüdür. Bel bölgesinde yağlanma olup olmadığını gözlemlemeye yönelik basit, ayrıntılı olmayan bir ölçümdür.

Kadınlarda eğer bel çevresi 80 cm’yi geçerse bu durum riskli olarak değerlendirilir. 88 cm’yi geçmesi durumunda ise bu yüksek riskli olarak kabul görür. Erkeklerde ise bel çevresinin 94 cm’yi geçmesi riskli olarak kabul edilirken 102 cm’yi geçmesi de yüksek risk olarak görülür.

Bel ölçümünün yanı sıra metabolizma hızı ölçümü ve detaylı vücut analizleri de bireyin kilo sorunu hakkında daha ayrıntılı bir analiz yapmaya olanak sağlar.  Metabolizma hızı ölçümü özel bir cihaza bağlı maskenin 15 dakika boyunca takılmasıyla yapılır. Kişi, maske takılıyken normal bir şekilde soluk alıp verir.  Bireyin ortalama oksijen tüketimi, nefes miktarı, nefes sıklığı ve ortalama oksijen yoğunluğuna hesaplanarak metabolizma hızı ölçülür.

Kişinin kilosu değerlendirilirken tüm bu unsurlar göz önüne alınmalıdır. Bireyin ideal kilosu altında veya üstünde olup olmadığı, tüm bu etmenler göz önüne alınarak bir hekim tarafından değerlendirilmelidir. Kiloya bağlı mevcut sağlık sorunlarını iyileştirmek ya da ileride karşılaşılabilecek sağlık sorunlarını önlemek için de yine uzman bir hekimle çalışılmalıdır.</p>
            </div>
        </div>
        </>
    )
}