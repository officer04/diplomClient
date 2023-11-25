import { Route, Routes } from 'react-router-dom'

import UserFormSignUp from '../user/UserFormSignUp'
import UserFormLogin from '../user/UserFormLogin'
import Home from './../../Pages/Home/Home'
import Cours from './../../Pages/Cours/Cours'
import Backend from './../../Pages/Backend/Backend'
import Frontend from './../../Pages/Frontend/Frontend'
import Account from './../PersonalArea/Account/Account'
import ListMyCours from '../PersonalArea/ListMyCours/ListMyCours'
import SingleMyCours from './../PersonalArea/SingleMyCours/SingleMyCours'
import SingleTasksMyCours from '../PersonalArea/SingleTasksMyCours/SingleTasksMyCours'
import TaskMyCours from '../PersonalArea/TaskMyCours/TaskMyCours'
import SingleQuestion from '../SingleQuestion/SingleQuestion'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/cours' element={<Cours/>}/>
      <Route path='/signup' element={<UserFormSignUp/>}/>
      <Route path='/login' element={<UserFormLogin/>}/>
      <Route path='/frontend' element={<Frontend/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/my-cours' element={<ListMyCours/>}/>
      <Route path='/backend' element={<Backend/>}/>
      <Route path='/single-my-cours' element={<SingleMyCours/>}/>
      <Route path='/single-my-cours-task' element={<SingleTasksMyCours/>}/>
      <Route path='/single-my-cours-tasks' element={<TaskMyCours/>}/>
      <Route path='/single-question' element={<SingleQuestion/>}/>
    </Routes>
  )
}

export default AppRoutes