import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Router, Link, Routes } from "react-router-dom";
import WithDraw from "./pages/WithDraw";
import Deposit from "./pages/Deposit";
import Transfer from "./pages/Transfer";
import Transaction from "./pages/Transaction";
import UserDetails from "./pages/UserDetails";
import Balance from "./pages/Balance";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/withdraw" element={<WithDraw />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/balance" element={<Balance />} />
      </Routes>
    </div>
  );
}

export default App;
