import Gunluksucalculator from "./Calculators/Gunluksucalculator";

export default function GunlukSu() {
    return (
        <>
        <div className="gunluk-kalori-container">
        <h1> Gunluk su</h1>
        <div className="kalori hesap" >
                <Gunluksucalculator/>
            </div>
            <div className= "kalori yazi" >
                <h2>Suyun Önemi</h2>
                <p className="gunluksu">Canlı yaşamının en temel yaşamsal ihtiyaçlarından biri olan su, sağlıklı bir hayat için gerekli olan pek çok unsuru bir arada sunar. Sağlığa faydaları hem bilimsel verilerle açıklanabilen hem de gözle görülür etkileri ile gözlemlenebilen düzenli su tüketimi sayesinde vücudunuzun çok daha zinde olduğunu hissedebilirsiniz. Vücut ısısının düzeni, iç organların ve cildin sağlığı, sindirim ve boşaltım sistemlerinin işlevi ve metabolizmanın sağlıklı çalışması gibi pek çok olumlu etkiye sahip olan su, ihmal edilmeden tüketildiği takdirde daha sağlıklı ve mutlu bir hayatın anahtarı niteliğini taşır. Suyun önemini, vücuttaki yoğunluğu ile ifade etmek mümkündür. Bu anlamda yetişkin bir erkek vücudunun yaklaşık olarak %60’ını; yetişkin bir kadın vücudunun ise yaklaşık olarak %50’sini suyun oluşturduğunu belirtmekte yarar vardır. Çocuklarda ise bu oran daha fazladır. Günlük su tüketimi ise boşaltım ve terleme yoluyla kaybedilen su oranının telafisini sağlamak ve iç organların sağlıklı biçimde çalışmasını sürdürülebilir kılmak için önemlidir. İnsan vücudunun pek çok önemli bileşenini büyük oranda su oluşturur. Örneğin, vücuttaki suyun %60’ını hücreler kullanır. Bunun yanı sıra insan beyninin yaklaşık olarak dörtte üçünü su oluştururken akciğerlerdeki su oranı ise %80 seviyelerindedir.</p>
            </div>
        </div>
        
        </>
    )
}