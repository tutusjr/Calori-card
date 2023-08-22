import yapilisbg from './images-tarifler-bg/wooden-background.jpg'
import malzemebg from './images-tarifler-bg/malzeme-arka-plan.jpg'
import {GiBlender} from 'react-icons/gi'
import {LuBanana} from 'react-icons/lu'
import {MdOutlineRoomService} from 'react-icons/md'
import {BiBrain} from 'react-icons/bi'
import {FaMortarPestle} from 'react-icons/fa'
import {LuIceCream2} from 'react-icons/lu'
import {GiBerriesBowl} from 'react-icons/gi'
import { Helmet } from 'react-helmet'


export default function Dondurma(){

        
    return(
        <>
        <Helmet Helmet>
            <title>Yer Fıstıklı Dondurma Tarifi</title>
            <meta name='description' content='Yer Fıstıklı Dondurma Tarifi'/>
        </Helmet>
        <div className="yemek-container">
            <div className="daire">
            <h1 className='h1 dondurma'>Yer fistikli dondurma</h1>
            </div>
            <div className="yemek">
                <div className="yemek-alt">
                    <div className="yemek-malzeme">
                        <h2>malzemeler</h2>
                            <ol className='ol genis'>
                                <img src={malzemebg} alt="" />
                                <li>
                                    <input className="checkbox" id="checkbox0" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox0">2 küçük boy muz (dondurulmuş)</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox1" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox1">150-200 gram yer fıstığı</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox2" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox2">8-10 adet ceviz</label>
                                </li>
                            </ol>
                    </div>
                    <div className="yemek-yapilis">
                        <h2>Yapilis</h2>
                            <ul>
                                <img src={yapilisbg} alt="" />
                                <li>
                                        <input id="checkboxr0" type="checkbox"/>
                                        <label className="label tek no-select hurma" htmlFor="checkboxr0">Muzu önceden buzlukta dondurun.</label>
                                        <LuBanana className='kitchen cift kase'/>
                                </li>
                                <li>
                                        <input   id='checkboxr1' type="checkbox"/>   
                                        <label className="label cift no-select hurma" htmlFor="checkboxr1">Dondurulmuş muzu blender’ın içine alın.</label>
                                       <GiBlender className='kitchen tek blender-iki'/>
                                                     
                                </li>
                                <li>
                                        <input  id="checkboxr2" type="checkbox"/>
                                        <label className="label tek no-select hurma" htmlFor="checkboxr2">Ceviz ve yer fıstığını da ilave edip malzemeleri doğrayıcıdan geçirin.</label>
                                        <BiBrain className='kitchen cift bowl'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr3"  type="checkbox"/>
                                        <label className="label cift no-select hurma" htmlFor="checkboxr3">Ara sıra karıştırarak büyük parçaların da iyice karıştığından emin olun.</label>
                                        <FaMortarPestle className='kitchen tek fridge'/>
                                </li>
                                <li>
                                        <input  id="checkboxr4" type="checkbox"/>
                                        <label className="label tek no-select hurma" htmlFor="checkboxr4">Hazırladığınız karışımı dondurma kaplarına aktarın.</label>
                                        <LuIceCream2 className='kitchen cift hint-ceviz'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr5"  type="checkbox"/>
                                        <label className="label cift no-select hurma" htmlFor="checkboxr5">Dondurma kasesinin kenarlarına muz dilimleri yerleştirin ve biraz tarçın serpin</label>
                                        <MdOutlineRoomService className='kitchen tek firegem'/>
                                </li>
                                <li>
                                        <input  id="checkboxr6" type="checkbox"/>
                                        <label className="label tek no-select hurma" htmlFor="checkboxr6">İsteğe bağlı olarak üzerin çilek ve yaban mersini ile de süsleyebilirsiniz.</label>
                                        <GiBerriesBowl className='kitchen cift berries'/>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}