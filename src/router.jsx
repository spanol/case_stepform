import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./pages/Clients";
import SideBar from "./components/Sidebar";
import CreateClient from "./pages/CreateClient";
const Router = () => {
  return (
      <BrowserRouter>
      <div className="container">
      <SideBar />
        <Routes>
          <Route path="/" element={<CreateClient />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
