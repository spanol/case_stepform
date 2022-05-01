import { useClients } from "../../context";
import ListClients from "../../components/ListClients";
export default function Clients() {
  const { clientList } = useClients();


  return (
    <div className="flex page">
      <ListClients clientList={clientList} />
    </div>
  );
}
