import Balance from "./components/Balance/Balance";
import Orders from "./components/Orders/Orders";
import styles from "./page.module.css";
import { getAllOrders, getOrder } from "./utils/orders";

export default async function Home() {
  var orders = await getAllOrders();

  return (
      <main className={styles.main}>
        <Orders orders={orders} />
        <Balance />
      </main>
  );
}
