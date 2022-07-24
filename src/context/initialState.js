import { isArray } from "lodash";
import {fetchUser,fetchCart} from "../utils/fetchuser"
const persistentuser=fetchUser();
const cartpersistent=fetchCart();
export const initialState={
    user:persistentuser,
    data: [],
    categorytype:"Ice Creams",
    cartItems: isArray(cartpersistent) ? cartpersistent : [],
}

