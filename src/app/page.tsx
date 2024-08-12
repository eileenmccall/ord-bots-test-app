import Balance from "./components/Balance/Balance";
import Orders from "./components/Orders/Orders";
import styles from "./page.module.css";
import { getAllOrders } from "./utils/orders";

export default async function Home() {
  var orders = await getAllOrders();

  return (
      <>
        <Orders orders={orders} />
        <Balance />
      </>
  );
}
