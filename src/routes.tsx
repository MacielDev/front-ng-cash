import { Route, Routes } from "react-router-dom";
import { CreateUser } from "./pages/createUser";
import { Login } from "./pages/login";
import { Transaction } from "./pages/transaction";
import { Wallet } from "./pages/wallet";

export function MainRoutes() {
  return (
    <Routes>

      {/* Public Route */}
      <Route path='/' element={<Login />} />
      <Route path='/createUser' element={<CreateUser />} />

      {/* Private Routes */}
    
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/transactions' element={<Transaction />} />
      
    </Routes>
  )
}