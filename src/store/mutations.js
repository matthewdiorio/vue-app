export function setSearchedProducts(state, products){
   state.searchedProducts = products
};

export function addToCart(state, product){ 
    const cartItem = state.cart.find((item) => item.id === product.id)
    if(cartItem){
        cartItem.count += 1
    } else {
        state.cart.push({ ...product, count: 1})
    }
    state.cartQuantity++;
}

export function removeFromCart(state, product){
    const cartItem = state.cart.find((item) => item.id === product.id)
    if(cartItem){
        cartItem.count -= 1
        if(cartItem.count === 0){
            state.cart = state.cart.filter((item) => item.id !== cartItem.id)
        }
    }
    state.cartQuantity--;
}

export function removeEntireProduct(state, productId) {
    const cartItemsToRemove = state.cart.filter(item => item.id === productId);
    if (cartItemsToRemove.length > 0) {
      state.cartQuantity -= cartItemsToRemove.length;
      state.cart = state.cart.filter(item => item.id !== productId);
    }
  }

export function calculateTotal(state){

}