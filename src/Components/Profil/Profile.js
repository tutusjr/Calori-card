import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"


export default function Profile() {

    const {setUser} = useAuth()
    const navigate = useNavigate()

    const logoutHandle= () => {
        setUser(false)
        navigate('/anasayfa')
    }


    return(
        <>
        <div className="profil">
            <h1>BU BİR TEST SAYFASIDIR.</h1>
        <button onClick={logoutHandle}>Cikis Yap</button>
        </div>
        </>
    )
}