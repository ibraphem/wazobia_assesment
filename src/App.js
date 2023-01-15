import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import IndexModal from "./modals/IndexModal";
import Dashboard from "./screens/Dashboard";
import SignUp from "./screens/SignUp";

const App = () => {
  return (
    <>
    <IndexModal/>
    <Routes>
      <Route exact path="/" element={<SignUp />}/>
      <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
    </Routes>
    </>
  );
};

export default App;