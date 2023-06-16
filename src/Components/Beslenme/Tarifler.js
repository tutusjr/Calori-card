import tarif1 from './image/tarif1.png'
import tarif2 from './image/t2.jpg'
import tarif3 from './image/3.png'
import tarif4 from './image/4.png'
import tarif5 from './image/5.png'
import { NavLink, Link } from 'react-router-dom'


export default function Tarifler() {
    return(
        <>
        <div className="tarifler-container">
        <nav className="tarifler-nav">
            <Link to='/anasayfa'>Anasayfa</Link>
            <NavLink to='/beslenme/tarifler'>tarifler</NavLink>
            <Link to='/beslenme'>beslenme</Link>
        </nav>
            <div className="tarifler-giris">
                <p>Tatlılar, doğru olarak hazırlandığında ve ölçülü olarak tüketildiğinde sağlıklı bir beslenme programına iyi bir katkı sağlayabilir. Gerçek şu ki, hepimizin canı tatlı ister. Bu yüzden asıl soru, bu isteği nasıl yöneteceğimizdir.
                    Lezzetten uzaklaşmayan ve ona katkıda bulunarak daha tatmin edici hale getiren doğal malzemeler, biraz yaratıcılıkla harika tatlılara dönüşebilir. Kuruyemişler, meyveler, yumurta, yulaf ve hurma gibi doğal bileşenler, sağlıklı besin maddeleri ile doludur. Aynı zamanda, doğal ve fit tatlılar için harika bileşenlerdir.
                </p>
            <h2>Tatlı krizine son veren 5 pratik ve fit tarif</h2>
            </div>
                <div className="tarifler">
                    <div className="tarif ilk">
                        <h1>Yer Fıstıklı Dondurma Tarifi</h1>
                        <h2>malzemeler</h2>
                        <ul>
                            <li>2 küçük boy muz (dondurulmuş)</li>
                            <li>150-200 gram yer fıstığı</li>
                            <li>8-10 adet ceviz</li>
                        </ul>
                        <h2>yapılış</h2>
                        <ul>
                            <li>Muzu önceden buzlukta dondurun.</li>
                            <li>Dondurulmuş muzu blender’ın içine alın.</li>
                            <li>Ceviz ve yer fıstığını da ilave edip malzemeleri doğrayıcıdan geçirin.</li>
                            <li>Ara sıra karıştırarak büyük parçaların da iyice karıştığından emin olun.</li>
                            <li>Hazırladığınız karışımı dondurma kaplarına aktarın.</li>
                            <li>Dondurma kasesinin kenarlarına muz dilimleri yerleştirin ve biraz tarçın serpin.</li>
                            <li>İsteğe bağlı olarak üzerin çilek ve yaban mersini ile de süsleyebilirsiniz.</li>
                        </ul>
                        <div className='tarif-img ilk'><img src={tarif1} alt="" /></div>
                    </div>
                    <div className="tarif iki">
                    <h1>Chia Puding Tarifi</h1>
                        <h2>malzemeler</h2>
                        <ul>
                            <li>8-10 adet çilek</li>
                            <li>3 çorba kaşığı süzme yoğurt</li>
                            <li>2 çorba kaşığı Hindistan cevizi rendesi</li>
                            <li>2 çorba kaşığı chia tohumu</li>
                            <li>İsteğe bağlı toz kakao</li>
                        </ul>
                        <h2>yapılış</h2>
                        <ul>
                            <li>Çilekleri güzelce yıkayın ve saplarını ayırın.</li>
                            <li>Çilekleri blender’ın içerisine alın.</li>
                            <li>Süzme yoğurt ve chia tohumunu da ilave edip malzemeleri blender’dan geçirin.</li>
                            <li>Hindistan cevizini ekleyin ve tekrar çekin.</li>
                            <li>Puding kıvamındaki karışımı servis kaselerine aktarın.</li>
                            <li>Buzdolabında 1-2 saat soğuttuktan sonra, servis ederken üzerini çilek ve yaban mersini gibi meyvelerle süsleyin.</li>
                            <li>İsteğe bağlı olarak biraz kakao da serpebilirsiniz.
                            <p>Afiyet olsun.</p>
                        </li>
                        </ul>
                        <div className='tarif-img iki'>
                        <img src={tarif2} alt="" />
                        </div>
                    </div>
                    <div className="tarif uc">
                        <h1>Ev Yapımı Bounty (Sütsüz, Yağsız, Şekersiz)</h1>
                        <h2>malzemeler</h2>
                        <ul>
                            <li>1.	75 g toz Hindistan cevizi</li>
                            <li>1/2 vanilya çubuğu</li>
                            <li>2 yemek kaşığı bal</li>
                            <li>3 yemek kaşığı hindistan cevizi yağı(sıvı halde değilse eritin)</li>
                            <li>40 ml badem sütü</li>
                        </ul>
                        <h2>Kaplamak icin:</h2>
                        <ul>
                            <li>100 g %50 veya 60 kakao oranında çikolata, küçük parçalara bölünmüş</li>
                            <li>1 yemek kaşığı hindistan cevizi yağı</li>
                            <li>Üzerine Toz Hindistancevizi veya cipsi</li>
                        </ul>
                        <h2>yapılış</h2>
                        <ul>
                            <li>Toz Hindistan cevizini, vanilya çubuğunun iç tanelerini, balı, hindistan cevizi yağını, badem sütünü bir kapta iyice ezerek homojen bir karışım elde edene dek bir kaşıkla karıştırın.</li>
                            <li>Kare veya dikdörtgen bir kek kalıbının tabanına yağlı kağıt serin ve karışımı 1 parmak kalınlığında olacak şekilde bastırarak kalıba yayın. 20 dakika kadar buzlukta dinlendirin. Buzluktan çıkartın. Benmaride çikolatayı, hindistancevizi yağı ile eritin ve eridikten sonra bir spatula ile devamlı 1-2 dakika karıştırarak basit bir şekilde temperleyin/soğutun. Çikolatayı bir çay fincanına dökün.</li>
                            <li>Hindistan cevizli karışımı şef bıçağı ile 12 eşit kareye bölün. Her kareyi sırayla çatalın üzerine koyun ve tamamen üzeri kaplanacak şekilde çikolataya bulayın. Çatalı havada tutarak ve sıyırarak fazla çikolatayı akıtın ve yağlı kağıt serilmiş bir tepsiye dizin. Hala çikolata donmamışken üzerine toz Hindistan cevizi veya cipsi serpin.</li>
                            <li>Tüm çikolataları aynı şekilde kaplayın ve süsleyin. Buzlukta yarım saat kadar dondurun ve oda sıcaklığında 5 dakika bekletip servis edin. Buzdolabında ağzı kapalı bir kapta 10 gün kadar saklayabilirsiniz.</li>
                        </ul>
                        <div className='tarif-img uc'><img src={tarif3} alt="" /></div>
                    </div>
                    <div className="tarif dort">
                        <h1>Kırmızı Meyveli Çikolata Parçalı Sağlıklı Muffin</h1>
                        <h2>malzemeler</h2>
                        <ul>
                            <li>170 g yulaf unu</li>
                            <li>60 g Hindistan cevizi unu</li>
                            <li>1/2 çay kaşığı doğal toz vanilya (isteyen toz vanilya kullanabilir)</li>
                            <li>1 paket kabartma tozu</li>
                            <li>1 adet yumurta</li>
                            <li>120 g Hindistan cevizi şekeri</li>
                            <li>1 adet muz, çatalla ezilmiş</li>
                            <li>240 ml süt (badem sütü kullanılabilinir)</li>
                            <li>60 g Hindistan cevizi yağı</li>
                            <li>200 g donmuş Ahududu&Böğürtlen karışımı (donmuş çilek veya vişne de olabilir)</li>
                            <li>100 g beyaz çikolata (iri parçalar halinde kesilmiş)</li>
                            <li>100 g bitter çikolata (iri parçalar halinde kesilmiş)</li>
                        </ul>
                        <h2>yapılış</h2>
                        <p>Fırını 185 dereceye ayarlayın. Yulaf ununu, Hindistancevizi ununu, vanilyayı, kabartma tozunu bir kapta karıştırın. Başka bir kaba yumurta, şeker ve muzu koyup 3-4 dakika kadar çok az kabarana dek çırpın. Sütü ve yağı ekleyip tekrar çırpın. Islak malzemeye kuru malzemeyi ekleyip bir spatula ile karıştırın. Meyveleri ve çikolatayı ekleyip tekrar karıştırın. 12 adet yüksek muffin kabını muffin kalıbına yerleştirin. Hamuru eşit olarak kaplara paylaştırın. Eğer kalıplarınız kısa ise 14-16 adet çıkacaktır. Kek kalıbında pişirmek isterseniz. Kürdan batırdığınızda temiz çıkana dek 40-45 dakika kadar pişirin. Muffinler tamamen soğuduktan sonra servis edin.</p>
                        <div className='tarif-img dort'><img src={tarif4} alt="" /></div>
                    </div>
                    <div className="tarif bes">
                    <h1>Tahinli Trabzon Hurması</h1>
                        <h2>malzemeler</h2>
                        <ul>
                            <li>2 adet Trabzon hurması</li>
                            <li>1 avuç ceviz</li>
                            <li>3 yemek kaşığı tahin</li>
                            <li>1/2 çay kaşığı toz tarçın</li>
                        </ul>
                        <h2>yapılış</h2>
                        <p>Trabzon hurmasını soyun. Çatalla ezin veya dilimleyin. İyice olgun olması ve eziliyor olması tadının buruk olmaması için önemli. Bir tabağa yayın. Üzerine irili ufaklı böldüğünüz cevizleri serpin. Tahini gezdirin ve tarçını serpip hemen servis edin.</p>
                        <div className='tarif-img bes'><img src={tarif5} alt="" /></div>
                    </div>
                </div>
        </div>
        </>
    )
}