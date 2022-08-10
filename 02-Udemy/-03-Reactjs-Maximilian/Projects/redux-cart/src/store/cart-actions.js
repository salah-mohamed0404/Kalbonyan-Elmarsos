import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => async dispatch => {
  const fetchData = async () => {
    const response = await fetch(
      "https://cart-5ff9c-default-rtdb.firebaseio.com/cart.json"
    );

    if (!response.ok) throw new Error("Could not fetch cart data!");

    return await response.json();
  };

  try {
    const cartData = await fetchData();
    dispatch(
      cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity,
      })
    );
  } catch (err) {
    dispatch(
      uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Fetching cart data failed!",
      })
    );
  }
};

export const sendCartData = cart => async dispatch => {
  dispatch(
    uiActions.showNotification({
      status: "pending",
      title: "Sending...",
      message: "Send cart data!",
    })
  );

  const sendRequest = async function () {
    const response = await fetch(
      "https://cart-5ff9c-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      }
    );

    if (!response.ok) throw new Error("Sending cart data failed.");
  };

  try {
    await sendRequest();

    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Send cart data successfully!",
      })
    );
  } catch (err) {
    dispatch(
      uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Send cart data failed!",
      })
    );
  }
};
