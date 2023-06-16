import { useAuth } from "../context/AuthContext"
import { Navigate,} from "react-router-dom"

export default function PrivateRoute({children}) {

    
    const {user} = useAuth()
    if(!user) {
        return <Navigate to='/anasayfa'/>
}
    return children
}
