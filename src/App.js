import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import IndexModal from "./modals/IndexModal";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Verify from "./screens/Verify";

const App = () => {
  return (
    <>
    <IndexModal/>
    <Routes>
    <Route exact path="/" element={<Login />}/>
      <Route exact path="/signup" element={<SignUp />}/>
      <Route exact path="/email/verify/:code" element={<Verify />}/>
      <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
    </Routes>
    </>
  );
};

export default App;