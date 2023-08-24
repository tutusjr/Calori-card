import yapilisbg from './images-tarifler-bg/wooden-background.webp'
import malzemebg from './images-tarifler-bg/malzeme-arka-plan.webp'
import {GiApothecary} from 'react-icons/gi'
import {FaMortarPestle} from 'react-icons/fa'
import {GiFurnace} from 'react-icons/gi'
import {LuMilk} from 'react-icons/lu'
import {TbGrillSpatula} from 'react-icons/tb'
import {GiFruitBowl} from 'react-icons/gi'
import {GiBerriesBowl} from 'react-icons/gi'
import {GiDoughRoller} from 'react-icons/gi'
import {TfiTimer} from 'react-icons/tfi'
import {MdOutlineRoomService} from 'react-icons/md'
import { Helmet } from 'react-helmet'

export default function Muffin() {
   
    return(
        <>
        <Helmet>
            <title>Kırmızı Meyveli Çikolata Parçalı Muffin Tarifi</title>
            <meta name='description' content='Kırmızı Meyveli Çikolata Parçalı Muffin Tarifi'/>
        </Helmet>
        <div className="yemek-container muffin">
            <div className="daire">
            <h1 className='h1 muffin' >Kırmızı Meyveli Çikolata Parçalı Muffin</h1>
            </div>
            <div className="yemek">
                <div className="yemek-alt">
                    <div className="yemek-malzeme muffin">
                        <h2>malzemeler</h2>
                            <ol className="ol muffin">
                                <img src={malzemebg} alt="" />
                                <li>
                                    <input className="checkbox" id="checkbox0" type="checkbox"/>
                                    <label className="no-select muffin" htmlFor="checkbox0">170 g yulaf unu</label>
                                    
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox1" type="checkbox"/>
                                    <label className="no-select muffin" htmlFor="checkbox1">60 g Hindistan cevizi unu</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox2" type="checkbox"/>
                                    <label className="no-select muffin" htmlFor="checkbox2">1/2 çay kaşığı doğal toz vanilya (isteyen toz vanilya kullanabilir)</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox3" type="checkbox"/>
                                    <label className="no-select muffin" htmlFor="checkbox3">1 paket kabartma tozu</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox4" type="checkbox"/>
                                    <label className="no-select muffin" htmlFor="checkbox4">1 adet yumurta</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox5" type="checkbox"/>
                                    <label className="no-select muffin" htmlFor="checkbox5">120 g Hindistan cevizi şekeri</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox6" type="checkbox"/>
                                    <label className="no-select muffin" htmlFor="checkbox6">1 adet muz, çatalla ezilmiş</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox7" type="checkbox"/>
                                    <label className="no-select muffin" htmlFor="checkbox7">240 ml süt (badem sütü kullanılabilinir)</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox8" type="checkbox"/>
                                    <label className="no-select muffin" htmlFor="checkbox8">60 g Hindistan cevizi yağı</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox9" type="checkbox"/>
                                    <label className="no-select muffin" htmlFor="checkbox9">200 g donmuş Ahududu&Böğürtlen karışımı (donmuş çilek veya vişne de olabilir)</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox10" type="checkbox"/>
                                    <label className="no-select muffin" htmlFor="checkbox10">100 g beyaz çikolata (iri parçalar halinde kesilmiş)</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox11" type="checkbox"/>
                                    <label className="no-select muffin" htmlFor="checkbox11">100 g bitter çikolata (iri parçalar halinde kesilmiş)</label>
                                </li>
                            </ol>
                    </div>
                    <div className="yemek-yapilis muffin">
                        <h2>Yapilis</h2>
                            <ul>
                                <img src={yapilisbg} alt="" />
                                <li>
                                        <input id="checkboxr0" type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr0">Fırını 185 dereceye ayarlayın</label>
                                        <GiFurnace className='kitchen cift cilek'/>
                                </li>
                                <li>
                                        <input   id='checkboxr1' type="checkbox"/>   
                                        <label className="label cift no-select" htmlFor="checkboxr1">Yulaf ununu, Hindistancevizi ununu, vanilyayı, kabartma tozunu bir kapta karıştırın</label>
                                        <GiApothecary className='kitchen tek blender'/>
                                                     
                                </li>
                                <li>
                                        <input  id="checkboxr2" type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr2">bir kaba yumurta, şeker ve muzu koyup 3-4 dakika kadar çok az kabarana dek çırpın</label>
                                        <FaMortarPestle className='kitchen cift hint-ceviz'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr3"  type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr3">Sütü ve yağı ekleyip tekrar çırpın</label>
                                        <LuMilk className='kitchen tek milk'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr4"  type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr4">Islak malzemeye kuru malzemeyi ekleyip bir spatula ile karıştırın</label>
                                        <TbGrillSpatula className='kitchen cift kase'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr5"  type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr5">Meyveleri ve çikolatayı ekleyip tekrar karıştırın.</label>
                                        <GiFruitBowl className='kitchen tek fruit-cho'/>  
                                </li>
                                <li> 
                                        <input  id="checkboxr6"  type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr6">12 adet yüksek muffin kabını muffin kalıbına yerleştirin</label>
                                        <GiBerriesBowl className='kitchen cift bowl'/>  
                                </li>
                                <li> 
                                        <input  id="checkboxr7"  type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr7">Hamuru eşit olarak kaplara paylaştırın</label>
                                        <GiDoughRoller className='kitchen tek bowl'/>   
                                </li>
                                <li> 
                                        <input  id="checkboxr8"  type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr8">Kürdan batırdığınızda temiz çıkana dek 40-45 dakika kadar pişirin</label>
                                        <TfiTimer className='kitchen cift fridge'/> 
                                </li>
                                <li> 
                                        <input  id="checkboxr9"  type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr9">Muffinler tamamen soğuduktan sonra servis edin</label>
                                        <MdOutlineRoomService className='kitchen tek blender-iki'/>  
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
