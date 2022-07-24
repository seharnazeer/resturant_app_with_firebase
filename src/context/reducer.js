
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_DATA":
            return {
                ...state,
                data: action.data
            }
        case "SET_CAT":
            return {
                ...state,
                categorytype: action.categorytype
            }
        case "SET_CART":
                return {
                    ...state,
                    cartItems: action.cartItems
                }
     
        default:
            return state;
    }

}
export default reducer;