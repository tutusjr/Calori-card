import Navbar from "../Anasayfa/Navbar"
import caloriinfo from './images/calorie-info-foto.jpg'
import {AiOutlineDown} from 'react-icons/ai'
import birlesik from './images/birlesik1.png'
import gym from './images/gym.png'
import cardpers from './images/card-pers.png'
import Footer from "../Footer/Footer"

export default function CalorieCard() {
    return(
        <>
        <Navbar/>
        <div className="calorie-container">
            <div className="calorie-header">
                <div className="card-image">
                    <img src={caloriinfo} alt="" />
                </div>
                <div className="card-information">
                    <h1>Calorie-Card</h1>
                    <p>Calorie-Card, günde alman gereken kaloriyi hesaplar ve aplikasyon sayesinde diyetine uygun olarak hastalığın varsa tetiklenmesini önleyerek sana market alışverişlerinde yardımcı olur.</p>
                    <br/>
                    <p className="last-p">Aşağıda hazırlamış olduğumuz teklifleri görebilir ve anlaşmalı olduğumuz mağazalarda bu teklifleri değerlendirebilirsin.</p>
                    <h1 className="arrow"><AiOutlineDown/></h1>
                </div>
            </div>
            <div className="card-sell">
                <div className="card first">
                    <img src={birlesik} alt="" />
                    <h2 className="card-h2">Calorıe-Card</h2>
                    <p className="card-p">Calorie-Card + Online Diyet</p>
                    <span className="card-price">₺1899</span>
                    <button className="card-btn">+</button>
                </div>
                <div className="card second">
                    <img src={gym} alt="gym" />
                    <h2 className="card-h2">Calorıe-card</h2>
                    <p className="card-p">Calorie-Card + 3 aylık fitness üyeliği</p>
                    <span className="card-price">₺2199</span>
                    <button className="card-btn left">+</button>
                </div>
            </div>
            <div className="page-down">
                <div className="down-left">
                    <img src={cardpers} alt="" />
                </div>
                <div className="down-right">
                    <h1>Calorie-Card</h1>
                <div className="price-informations">
                    <div className="price-box left">
                    <h2>Aylik</h2>
                    <p>₺119.90</p>
                    <button className="add-pay">+</button>
                    </div>
                    <div className="price-box right">
                    <h2>Yillik</h2>
                    <p>₺1299<span>₺1540</span></p>
                    <button className="add-pay">+</button>
                    </div>
                </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}