import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineUserAdd,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";
export default function SideBar() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };
  return active ? (
    <div className="flex sidebar">
      <AiOutlineClose className="close-icon" onClick={toggleActive} />

      <div>
        <Link to="/" className="button">
          Cadastrar cliente <AiOutlineUserAdd className="sidebar-icon" />
        </Link>

        <Link to="/clients" className="button">
          Clientes <AiOutlineUser className="sidebar-icon" />
        </Link>
      </div>
    </div>
  ) : (
    <div className="sidebar closed" onClick={toggleActive}>
      <AiOutlineMenu className="menu-icon"></AiOutlineMenu>
    </div>
  );
}
