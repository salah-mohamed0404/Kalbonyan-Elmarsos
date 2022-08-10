import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendCartData = async function () {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Send cart data!",
        })
      );

      const response = await fetch(
        "https://cart-5ff9c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) throw new Error("Sending cart data failed.");

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Send cart data successfully!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(_ =>
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Send cart data failed!",
        })
      )
    );
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
