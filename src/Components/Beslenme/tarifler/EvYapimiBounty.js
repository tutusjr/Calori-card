import yapilisbg from './images-tarifler-bg/wooden-background.webp'
import malzemebg from './images-tarifler-bg/malzeme-arka-plan.webp'
import {DiRedis} from 'react-icons/di'
import {BsSnow3} from 'react-icons/bs'
import {FaMortarPestle} from 'react-icons/fa'
import {RiKnifeLine} from 'react-icons/ri'
import {GiPowder} from 'react-icons/gi'
import {AiOutlineContainer} from 'react-icons/ai'
import {GiCooler} from 'react-icons/gi'
import { Helmet } from 'react-helmet'


export default function EvYapimiBounty(){

        
    return(
        <>
        <Helmet Helmet>
            <title>Ev Yapımı Bounty Tarifi</title>
            <meta name='description' content='Ev Yapımı Bounty Tarifi'/>
        </Helmet>
        <div className="yemek-container bounty">
            <div className="daire">
            <h1 className='h1 bounty'>Ev Yapımı Bounty</h1>
            </div>
            <div className="yemek">
                <div className="yemek-alt">
                    <div className="yemek-malzeme">
                        <h2>malzemeler</h2>
                            <ol className='ol sol'>
                                <img src={malzemebg} alt="" />
                                <li>
                                    <input className="checkbox" id="checkbox0" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox0">75 g toz Hindistan cevizi</label>
                                    
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox1" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox1">1/2 vanilya çubuğu</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox2" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox2">2 yemek kaşığı bal</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox3" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox3">3 yemek kaşığı hindistan cevizi yağı(sıvı halde değilse eritin)</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox4" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox4">40 ml badem sütü</label>
                                </li>
                            </ol>
                        <h2 className='baslik bounty'>-Dis kaplamasi icin-</h2>
                            <ol className='ol sag'>
                                <img src={malzemebg} alt="" />
                                <li>
                                    <input className="checkbox" id="checkboxl0" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkboxl0">100 g %50 veya 60 kakao oranında çikolata, küçük parçalara bölünmüş</label>
                                    
                                </li>
                                <li>
                                    <input className="checkbox" id="checkboxl1" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkboxl1">1 yemek kaşığı hindistan cevizi yağı</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkboxl2" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkboxl2">Üzerine Toz Hindistancevizi veya cipsi</label>
                                </li>
                             </ol>
                            
                            
                    </div>
                    <div className="yemek-yapilis">
                        <h2 className='bounty-yapilis'>Yapilis</h2>
                            <ul>
                                <img src={yapilisbg} alt="" />
                                <li>
                                         <input id="checkboxr0" type="checkbox"/>
                                        <label className="label tek no-select bounty" htmlFor="checkboxr0">Toz Hindistan cevizini, vanilya çubuğunun iç tanelerini, balı, hindistan cevizi yağını, badem sütünü bir kapta homojen bir karışım elde edene karıştırın.</label>
                                        <FaMortarPestle className='kitchen cift fridge'/>
                                </li>
                                <li>
                                        <input   id='checkboxr1' type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr1">Kare veya dikdörtgen bir kek kalıbının tabanına yağlı kağıt serin ve karışımı 1 parmak kalınlığında olacak şekilde bastırarak kalıba yayın.</label>
                                        <DiRedis className='kitchen tek redis'/>
                                        
                                </li>
                                <li>
                                        <input  id="checkboxr2" type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr2">20 dakika kadar buzlukta dinlendirin. Benmaride çikolatayı, hindistancevizi yağı ile eritin ve eridikten sonra bir spatula ile 1-2 dakika karıştırarak soğutun.</label>
                                        <GiCooler className='kitchen cift pestle'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr3"  type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr3">Hindistan cevizli karışımı şef bıçağı ile 12 eşit kareye bölün. Her kareyi sırayla çatalın üzerine koyun ve tamamen üzeri kaplanacak şekilde çikolataya bulayın</label>
                                        <RiKnifeLine className='kitchen tek hint-ceviz'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr4"  type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr4">Çatalı havada tutarak ve sıyırarak fazla çikolatayı akıtın ve yağlı kağıt serilmiş bir tepsiye dizin. Hala çikolata donmamışken üzerine toz Hindistan cevizi veya cipsi serpin</label>
                                        <GiPowder className='kitchen cift kase'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr5"  type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr5">Tüm çikolataları aynı şekilde kaplayın ve süsleyin. Buzlukta yarım saat kadar dondurun ve oda sıcaklığında 5 dakika bekletip servis edin.</label>
                                        <BsSnow3 className='kitchen tek'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr6"  type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr6">Buzdolabında ağzı kapalı bir kapta 10 gün kadar saklayabilirsiniz</label>
                                        <AiOutlineContainer className='kitchen cift kakao'/>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}