import Balance from "./components/Balance/Balance";
import Orders from "./components/Orders/Orders";
import { getAllOrders } from "./utils/orders";

export default async function Home() {
  const orders = await getAllOrders();

  return (
      <>
        <Orders orders={orders} />
        <Balance />
      </>
  );
}
