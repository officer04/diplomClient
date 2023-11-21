import { Route, Routes } from 'react-router-dom'

import UserFormSignUp from '../user/UserFormSignUp'
import UserFormLogin from '../user/UserFormLogin'
import Home from './../../Pages/Home/Home'
import Cours from './../../Pages/Cours/Cours'
import Backend from './../../Pages/Backend/Backend'
import Frontend from './../../Pages/Frontend/Frontend'
import Account from '../Account/Account'
import ListCours from '../ListCours/ListCours'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/cours' element={<Cours/>}/>
      <Route path='/signup' element={<UserFormSignUp/>}/>
      <Route path='/login' element={<UserFormLogin/>}/>
      <Route path='/frontend' element={<Frontend/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/listcourse' element={<ListCours/>}/>
      <Route path='/backend' element={<Backend/>}/>
    </Routes>
  )
}

export default AppRoutes