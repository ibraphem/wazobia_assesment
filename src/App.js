import { Route, Routes } from "react-router-dom";
import SignUp from "./screens/SignUp";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<SignUp />}/>
    </Routes>
  );
};

export default App;