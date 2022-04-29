import { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineUserAdd, AiOutlineUser, AiOutlineClose} from 'react-icons/ai'
export default function SideBar() {
  const [active, setActive] = useState(false);
  return active ? (
    <div className="sidebar">
      <Link to="/create_client">Cadastrar cliente <AiOutlineUserAdd/></Link>
      <br />
      <Link to="/clients">Clientes <AiOutlineUser/></Link>
      <AiOutlineClose onClick={() => setActive(!active)}/>
    </div>
  ) : (
    <div className="sidebar closed">
      <AiOutlineMenu onClick={()=>setActive(!active)}>desativado</AiOutlineMenu>
    </div>
  );
}
