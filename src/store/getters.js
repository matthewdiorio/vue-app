export function getTotal(state){
    let total = 0;
    state.cart.forEach((item) => {
        total += item.count * item.price
    })
    state.total = total;
    return state.total
}
