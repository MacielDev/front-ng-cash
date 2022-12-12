import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Transaction } from "./pages/transaction/Transaction";
import { Wallet } from "./pages/wallet/Wallet";

export function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/transactions' element={<Transaction/>}/>
    </Routes>
  )
}