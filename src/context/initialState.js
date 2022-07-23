import {fetchUser,fetchCart} from "../utils/fetchuser"
const persistentuser=fetchUser();
const cartpersistent=fetchCart();
export const initialState={
    user:persistentuser,
    data:null,
    categorytype:"Ice Creams",
    cartItems:cartpersistent,
}

