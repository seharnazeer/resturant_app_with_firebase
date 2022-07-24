export const fetchUser=()=>{
    const userinfo=localStorage.getItem("user")!=="undefined"?
    JSON.parse(localStorage.getItem("user")):
    localStorage.clear();
    return userinfo;
}
export const fetchCart=()=>{
    const userInfo=localStorage.getItem("cart")!=="undefined"?
    JSON.parse(localStorage.getItem("cart")):
    localStorage.setItem("cart",JSON.stringify([]));
    return userInfo;
}
