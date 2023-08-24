import yapilisbg from './images-tarifler-bg/wooden-background.webp'
import malzemebg from './images-tarifler-bg/malzeme-arka-plan.webp'
import {FaBlender} from 'react-icons/fa'
import {GiBlender} from 'react-icons/gi'
import {GiStrawberry} from 'react-icons/gi'
import {GiCoconuts} from 'react-icons/gi'
import {TbBowl} from 'react-icons/tb'
import {BiFridge} from 'react-icons/bi'
import {SiChocolatey} from 'react-icons/si'
import { Helmet } from 'react-helmet'


export default function ChiaPuding(){

        
    return(
        <>
        <Helmet Helmet>
            <title>Chia Puding Tarifi</title>
            <meta name='description' content='Chia Puding Tarifi'/>
        </Helmet>
        <div className="yemek-container chia">
            <div className="daire">
            <h1 className='h1 chia'>Chia Puding</h1>
            </div>
            <div className="yemek">
                <div className="yemek-alt">
                    <div className="yemek-malzeme">
                        <h2>malzemeler</h2>
                            <ol className='ol genis'>
                                <img src={malzemebg} alt="" />
                                <li>
                                    <input className="checkbox" id="checkbox0" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox0">8-10 adet çilek</label>
                                    
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox1" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox1">3 çorba kaşığı süzme yoğurt</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox2" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox2">2 çorba kaşığı Hindistan cevizi rendesi</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox3" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox3">2 çorba kaşığı chia tohumu</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox4" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox4">İsteğe bağlı toz kakao</label>
                                </li>
                            </ol>
                    </div>
                    <div className="yemek-yapilis">
                        <h2>Yapilis</h2>
                            <ul>
                                <img src={yapilisbg} alt="" />
                                <li>
                                        <input id="checkboxr0" type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr0">Çilekleri güzelce yıkayın ve saplarını ayırın.</label>
                                        <GiStrawberry className='kitchen cift cilek'/>
                                </li>
                                <li>
                                        <input   id='checkboxr1' type="checkbox"/>   
                                        <label className="label cift no-select" htmlFor="checkboxr1">Çilekleri blender’ın içerisine alın.</label>
                                       <FaBlender className='kitchen tek blender'/>
                                                     
                                </li>
                                <li>
                                        <input  id="checkboxr2" type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr2">Süzme yoğurt ve chia tohumunu da ilave edip malzemeleri blender’dan geçirin.</label>
                                        <GiBlender className='kitchen cift blender-iki'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr3"  type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr3">Hindistan cevizini ekleyin ve tekrar çekin.</label>
                                        <GiCoconuts className='kitchen tek hint-ceviz'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr4"  type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr4">Puding kıvamındaki karışımı servis kaselerine aktarın.</label>
                                        <TbBowl className='kitchen cift kase'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr5"  type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr5">Buzdolabında 1-2 saat soğuttuktan sonra, servis ederken üzerini çilek ve yaban mersini gibi meyvelerle süsleyin.</label>
                                        <BiFridge className='kitchen tek fridge'/>  
                                </li>
                                <li> 
                                        <input  id="checkboxr6"  type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr6">İsteğe bağlı olarak biraz kakao da serpebilirsiniz.</label>
                                        <SiChocolatey className='kitchen cift kakao'/>  
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}