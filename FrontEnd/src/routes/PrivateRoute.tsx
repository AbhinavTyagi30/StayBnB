
import { ReactNode } from 'react'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'

const PrivateRoute = ({children}:{ children: ReactNode }) => {
 const loginStore = useSelector((store:RootState) => store.auth)
//  const navigate = useNavigate();
 if(!loginStore.isAuth || !loginStore.user.isAdmin){
   return <Navigate to={"/"}/>
 }
 return children;
 
}

export default PrivateRoute
