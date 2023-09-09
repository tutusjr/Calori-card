import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import {Helmet} from 'react-helmet'


export default function Profile() {

    const {setUser} = useAuth()
    const navigate = useNavigate()

    const logoutHandle= () => {
        setUser(false)
        navigate('/anasayfa')
    }
    const toAnasayfa = () => {
        navigate('/anasayfa')
    }


    return(
        <>
         <Helmet Helmet>
            <title>Profil</title>
            <meta name='description' content='Profil Sayfasi'/>
        </Helmet>
        <div className="profil">
        <div className="stars">
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
        </div>
            <h1>BU BİR TEST SAYFASIDIR.</h1>
        <button onClick={logoutHandle}>Cikis Yap</button>
        <button onClick={toAnasayfa}>Ana Sayfaya Don</button>
        </div>
        </>
    )
}