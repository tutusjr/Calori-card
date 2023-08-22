import yapilisbg from './images-tarifler-bg/wooden-background.jpg'
import malzemebg from './images-tarifler-bg/malzeme-arka-plan.jpg'
import {FaBlender} from 'react-icons/fa'
import {GiBlender} from 'react-icons/gi'
import {GiFireGem} from 'react-icons/gi'
import {GiSaucepan} from 'react-icons/gi'
import {GiPieSlice} from 'react-icons/gi'
import {MdOutlineRoomService} from 'react-icons/md'
import {FaMortarPestle} from 'react-icons/fa'
import { Helmet } from 'react-helmet'

export default function IslakKek(){

   
    return(
        <>
        <Helmet Helmet>
            <title>Islak Kek Tarifi</title>
            <meta name='description' content='Islak Kek Tarifi'/>
        </Helmet>
        <div className="yemek-container islak-kek">
            <div className="daire">
            <h1 className='h1 islak'>Islak Kek</h1>
            </div>
            <div className="yemek">
                <div className="yemek-alt">
                    <div className="yemek-malzeme">
                        <h2>malzemeler</h2>
                        <div className='kek-ve-sos'>
                            <h2 className='baslik kek'>-Kek Icin-</h2>
                            <ol className='ol kek'>
                                <img src={malzemebg} alt=""/>
                                <li>
                                    <input className="checkbox" id="checkboxl0" type="checkbox"/>
                                    <label className="no-select kek" htmlFor="checkboxl0">4 yumurta</label>
                                    
                                </li>
                                <li>
                                    <input className="checkbox" id="checkboxl1" type="checkbox"/>
                                    <label className="no-select kek" htmlFor="checkboxl1">1 su bardağı şeker</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkboxl2" type="checkbox"/>
                                    <label className="no-select kek" htmlFor="checkboxl2">1 su bardağı süt</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkboxl3" type="checkbox"/>
                                    <label className="no-select kek" htmlFor="checkboxl3">Yarım su bardağı sıvıyağ</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkboxl4" type="checkbox"/>
                                    <label className="no-select kek" htmlFor="checkboxl4">50 gram kakao (3 tepeleme yemek kaşığı)</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkboxl5" type="checkbox"/>
                                    <label className="no-select kek" htmlFor="checkboxl5">2 paket kabartma tozu</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkboxl6" type="checkbox"/>
                                    <label className="no-select kek" htmlFor="checkboxl6">1 tepeleme su bardağı un</label>
                                </li>
                            </ol>
                        </div>
                        <div className='kek-ve-sos'>
                            <h2 className='baslik sos'>-Sos Icin-</h2>
                            <ol className='ol sos'>
                                <img src={malzemebg} alt=""/>
                                <li>
                                    <input className="checkbox" id="checkbox0" type="checkbox"/>
                                    <label className="no-select kek" htmlFor="checkbox0">1,5 su bardağı süt</label>
                                    
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox1" type="checkbox"/>
                                    <label className="no-select kek" htmlFor="checkbox1">1 su bardağı şeker</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox2" type="checkbox"/>
                                    <label className="no-select kek" htmlFor="checkbox2">2 yemek kaşığı tereyağı (oda sıcaklığında)</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox3" type="checkbox"/>
                                    <label className="no-select kek" htmlFor="checkbox3">1 yemek kaşığı sıvıyağ</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox4" type="checkbox"/>
                                    <label className="no-select kek" htmlFor="checkbox4">50 gram kakao (3 tepeleme yemek kaşığı)</label>
                                </li>
                            </ol>
                        </div>                
                    </div>
                    <div className="yemek-yapilis">
                        <h2>Yapilis</h2>
                            <ul>
                                <img src={yapilisbg} alt="" />
                                <li>
                                        <input id="checkboxr0" type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr0">Yumurtaları ve şeker iyice eriyinceye kadar çırpın ve fırınınızı 170 derecede ısıtın </label>
                                        <FaMortarPestle className='kitchen cift pestle'/>
                                </li>
                                <li>
                                        <input   id='checkboxr1' type="checkbox"/>   
                                        <label className="label cift no-select" htmlFor="checkboxr1">Sıvı yağı ve sütü ekleyip çırpmaya devam edin.</label>
                                       <FaBlender className='kitchen tek blender'/>
                                                     
                                </li>
                                <li>
                                        <input  id="checkboxr2" type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr2">Unu, kabartma tozlarını ve kakaoyu ekleyip karıştırın.</label>
                                        <GiBlender className='kitchen cift blender-iki'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr3"  type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr3">Uzun dikdörtgen borcamın tabanını tereyağı ile yağlayın. Kek karışımını döküp 170 dereceye önceden ısıttığınız fırında 20-22 dakika kadar pişirin.</label>
                                        <GiFireGem className='kitchen tek firegem'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr4"  type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr4">Kek pişerken tüm sos malzemesini sos tenceresinde alın. Orta ateşte kıvam alıncaya kadar pişirin ve ocaktan alın.</label>
                                        <GiSaucepan className='kitchen cift kase'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr5"  type="checkbox"/>
                                        <label className="label cift no-select" htmlFor="checkboxr5">Fırından aldığınız keki dilimleyin. Sosu sıcak sıcak üstüne dökün.</label>
                                        <GiPieSlice className='kitchen tek pie'/>  
                                </li>
                                <li> 
                                        <input  id="checkboxr6"  type="checkbox"/>
                                        <label className="label tek no-select" htmlFor="checkboxr6">10 dakika kadar sosu çekip ılınması icin bekleyin ve servis yapın.</label>
                                        <MdOutlineRoomService className='kitchen cift kakao'/>  
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}