import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Step1 from "./pages/FormSteps/Step1";
import Step2 from "./pages/FormSteps/Step2";
import Step3 from "./pages/FormSteps/Step3";
import Clients from "./pages/Clients";
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
    </Routes>
    </BrowserRouter>
  );
};

export default Router;
