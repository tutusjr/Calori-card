import { Link , NavLink } from "react-router-dom"
import logo from '../Anasayfa/images/logo2temiz.png'
import { Helmet } from "react-helmet"

export default function Hakkimizda() {
    return(
        <>
        <Helmet Helmet>
            <title>Hakkımızda</title>
            <meta name='description' content='Hakkımızda Sayfasi'/>
        </Helmet>
        <div className="about-container">
        <nav className="about-nav">
            <Link to='/anasayfa'>Anasayfa</Link>
            <NavLink to='/hakkimizda'>Hakkımızda</NavLink>
        </nav>
        <div className="about-gobek">
            <img src={logo} alt="logo" />
            <p>Dünyada artmakta olan obezite sorunu ve bunla paralel büyüyen diyet sektörü çağımızın en popüler konularından biri haline geldi. Mevcut artış sürerse 2025’te dünya genelinde her 5 kişiden 1’i obez olacak. Bu da demek oluyor ki diyet sektörü de ekonomik açıdan aynı hızla gelişecek. Obezitenin önüne geçilmesi gereken ciddi bir sağlık sorunu olduğu ortada, her yıl 2,6 milyon kişi obeziteden dolayı hayatını kaybediyor. Peki ama diyetler, sosyal medyadaki sağlıklı beslenme içerikleri, diyet app’leri vb. uygulamalar bu kadar popüler olmuşken neden obezitenin seyrinde bir düşüş gerçekleşmiyor? Yetersiz olan şey ne? Bunun cevaplarından biri diyet mantalitesinin insanları türlü psikolojik rahatsızlıklara ve yeme bozukluklarına itiyor olması. Yani aslında birbiriyle ilişkili bu iki rahatsızlık, birbirlerine davetiye çıkarıyor. Sadece bunla bitmiyor, “diyet/light” adı altında satılan birçok ürünün içeriğine baktığımızda aslında vaadini gerçekleştirmenin tam zıttı şekilde, vücuda zararlı birçok katkı maddesi içerdiği gözleniyor. Hatta gerekli denetimin olmadığı bazı ülkelerde, insan sağlığı üzerindeki alerjik, kanser yapıcı, mutajenik ve teratajoneik etkiler göz ardı ediliyor. Bunun önüne geçmek için gıda katkı maddeleri tüketiminden kendimizi tamamen soyutlamamız mümkün değildir ancak dikkat etmemiz gereken nokta, bu maddeleri yasaların belirlediği şekilde ve miktarda kullanılmasını sağlayarak tehlikeleri olabildiğince minimuma indirmektir. Asıl soruya gelecek olursak; hem sağlıklı bir şekilde kilo verip/almak, hem herhangi bir psikolojik soruna/yeme bozukluğuna mahal vermeden, kendimizi aç bırakmadan günlük kalori ihtiyacımızı karşılamak hem de yediğimiz/içtiğimiz paketli gıdaların içindeki sağlığımızı tehdit edecek, vücudumuzun duyarlı olduğu maddelerin içeriğine ulaştığımız bir beslenme düzeni nasıl sağlayabiliriz? Bizler de bu soruya bir cevap aradık ve Calorie Card’ı tasarladık. Calorie Card kişinin sağlık bilgilerine dayalı ve kişiye özel olarak kullanılan bir kart sistemi olup, kişinin market alışverişlerinde, alacağı paketli gıdaların içeriğini öğrenip ve içeriğindeki maddelere karşı duyarlılığı olup olmadığını öğrenebilmesine yarayan, aynı zamanda da kişiye özel hesaplanan günlük alması gereken kalori miktarını hesaplayarak kişinin kilo verme/alma sürecine katkı sağlayan bir karttır. Kısaca Calorie Card size hem mental hem fiziksel açıdan sağlıklı ve bilinçli bir beslenme düzeni kazandırmayı hedeflemektedir.</p>
        </div> 
        </div>
        </>
    )
}