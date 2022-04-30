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
      <button>
      <Link to="/">
        Cadastrar cliente <AiOutlineUserAdd />
      </Link>
      </button>

      <br />

      <button>
      <Link to="/clients">
        Clientes <AiOutlineUser />
      </Link>
      </button>
      
    </div>
  ) : (
    <div className="sidebar closed" onClick={toggleActive}>
      <AiOutlineMenu className="menu-icon"></AiOutlineMenu>
    </div>
  );
}
