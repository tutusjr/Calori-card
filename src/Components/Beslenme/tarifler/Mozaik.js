import yapilisbg from './images-tarifler-bg/wooden-background.jpg'
import malzemebg from './images-tarifler-bg/malzeme-arka-plan.jpg'
import {GiButter} from 'react-icons/gi'
import {FaMortarPestle} from 'react-icons/fa'
import {GiApothecary} from 'react-icons/gi'
import {FaBlender} from 'react-icons/fa'
import {GiCooler} from 'react-icons/gi'
import {MdRoomService} from 'react-icons/md'
import {BiCookie} from 'react-icons/bi'
import { Helmet } from 'react-helmet'

export default function Mozaik() {
   
    return(
        <>
        <Helmet>
            <title>Mozaik Pasta Tarifi</title>
            <meta name='description' content='Mozaik Pasta Tarifi'/>
        </Helmet>
        <div className="yemek-container">
            <div className="daire">
            <h1 className='h1' >Mozaik Pasta</h1>
            </div>
            <div className="yemek">
                <div className="yemek-alt">
                    <div className="yemek-malzeme">
                        <h2>malzemeler</h2>
                            <ol className="ol">
                                <img src={malzemebg} alt="" />
                                <li>
                                    <input className="checkbox" id="checkbox0" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox0">300 gram petibör bisküvi</label>
                                    
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox1" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox1">1 su bardağı süt</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox2" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox2">3 yemek kaşığı kakao</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox3" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox3">5 yemek kaşığı şeker</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox4" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox4">3 yemek kaşığı eritilmiş tereyağı/margarin</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox5" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox5">1 su bardağı ceviz veya fındık (isteğe bağlı)</label>
                                </li>
                            </ol>
                    </div>
                    <div className="yemek-yapilis">
                        <h2>Yapilis</h2>
                            <ul>
                                <img src={yapilisbg} alt="" />
                                <li>
                                        <input id="checkboxr0" type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr0">Mozaik pasta için öncelikle bisküvileri kırın, kırarken de fazla ufalamamaya dikkat edin.</label>
                                        <BiCookie className='kitchen cift hint-ceviz'/>
                                </li>
                                <li>
                                        <input   id='checkboxr1' type="checkbox"/>   
                                        <label className="label cift no-select" htmlFor="checkboxr1">Margarin veya tereyağını bir tavada eritin.</label>
                                        <GiButter className='kitchen tek butter'/>
                                                     
                                </li>
                                <li>
                                        <input  id="checkboxr2" type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr2">Eriyen yağı, sütü, şekeri ve kakaoyu bir kabın içerisinde karistirin.</label>
                                        <FaMortarPestle className='kitchen cift hint-ceviz'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr3"  type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr3">Elde ettiğiniz karışımı, kırmış olduğunuz bisküvilerin üzerine dökün veya tam tersi bisküvileri bu karışımın içine ekleyebilirsiniz</label>
                                        <GiApothecary className='kitchen tek fridge'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr4"  type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr4">Daha sonra bisküvileri ezmemeye özen göstererek, iyice karıştırın</label>
                                        <FaBlender className='kitchen cift blender'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr6"  type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr6">Servis etmeden önce, buzlukta 2-3 saat kadar dinlenmeye bırakın.</label>
                                        <GiCooler className='kitchen tek'/>  
                                </li>
                                <li> 
                                        <input  id="checkboxr7"  type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr7">Daha sonra dilimleyerek servis edin. Afiyet olsun.</label>
                                        <MdRoomService className='kitchen cift bowl'/>   
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
