import yapilisbg from './images-tarifler-bg/wooden-background.jpg'
import malzemebg from './images-tarifler-bg/malzeme-arka-plan.jpg'
import {FaMortarPestle} from 'react-icons/fa'
import {GiTomato} from 'react-icons/gi'
import {MdOutlineRoomService} from 'react-icons/md'
import {BiBrain} from 'react-icons/bi'
import { Helmet } from 'react-helmet'


export default function Hurma(){

        
    return(
        <>
        <Helmet Helmet>
            <title>Tahinli Trabzon Hurması Tarifi</title>
            <meta name='description' content='Tahinli Trabzon Hurması Tarifi'/>
        </Helmet>
        <div className="yemek-container">
            <div className="daire">
            <h1 className='h1 hurma'>Tahinli Trabzon Hurması</h1>
            </div>
            <div className="yemek">
                <div className="yemek-alt">
                    <div className="yemek-malzeme">
                        <h2>malzemeler</h2>
                            <ol className='ol genis'>
                                <img src={malzemebg} alt="" />
                                <li>
                                    <input className="checkbox" id="checkbox0" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox0">2 adet Trabzon hurması</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox1" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox1">1 avuç ceviz</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox2" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox2">3 yemek kaşığı tahin</label>
                                </li>
                                <li>
                                    <input className="checkbox" id="checkbox3" type="checkbox"/>
                                    <label className="no-select" htmlFor="checkbox3">1/2 çay kaşığı toz tarçın</label>
                                </li>
                            </ol>
                            
                            
                    </div>
                    <div className="yemek-yapilis">
                        <h2>Yapilis</h2>
                            <ul>
                                <img src={yapilisbg} alt="" />
                                <li>
                                        <input id="checkboxr0" type="checkbox"/>
                                        <label className="label tek no-select hurma" htmlFor="checkboxr0">Trabzon hurmasını soyun.</label>
                                        <GiTomato className='kitchen cift bowl'/>
                                </li>
                                <li>
                                        <input   id='checkboxr1' type="checkbox"/>   
                                        <label className="label cift no-select hurma" htmlFor="checkboxr1">Çatalla ezin veya dilimleyin. Bir tabağa yayın.</label>
                                       <FaMortarPestle className='kitchen tek fridge'/>
                                                     
                                </li>
                                <li>
                                        <input  id="checkboxr2" type="checkbox"/>
                                        <label className="label tek no-select hurma" htmlFor="checkboxr2">Üzerine irili ufaklı böldüğünüz cevizleri serpin.</label>
                                        <BiBrain className='kitchen cift hint-ceviz'/>
                                </li>
                                <li> 
                                        <input  id="checkboxr3"  type="checkbox"/>
                                        <label className="label cift no-select hurma" htmlFor="checkboxr3">Tahini gezdirin ve tarçını serpip hemen servis edin</label>
                                        <MdOutlineRoomService className='kitchen tek kase'/>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}