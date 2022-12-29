import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Transaction } from "./pages/transaction/Transaction";
import { Wallet } from "./pages/wallet/Wallet";

export function MainRoutes() {
  return (
    <Routes>

      {/* Public Route */}
      <Route path='/' element={<Login />} />


      {/* Private Routes */}
    
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/transactions' element={<Transaction />} />
      
    </Routes>
  )
}