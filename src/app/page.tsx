import BalancePane from "./components/balancePane";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import OrderPane from "./components/orderPane";
import Orders from "./components/Orders/Orders";
import styles from "./page.module.css";
import { getAllOrders, getOrder } from "./utils/orders";

export default async function Home() {
  var orders = await getAllOrders();

  return (
      <main className={styles.main}>
        <Header />
        <Nav />
        <Orders orders={orders} />
        <hr />
        <BalancePane />
      </main>
  );
}
