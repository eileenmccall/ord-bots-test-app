import Balance from "./components/Balance/Balance";
import Orders from "./components/Orders/Orders";
import { getAllOrders } from "./utils/orders";

export default async function Home() {
  const orders = await getAllOrders();
  console.log("home page rendered");

  return (
      <>
        <Orders orders={orders} />
        <Balance />
      </>
  );
}
