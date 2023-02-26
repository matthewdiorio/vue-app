import axiosClient from '../axiosClient'

export function searchProducts({ commit }, keyword){
    axiosClient.get(`/products/search?q=${keyword}`)
    .then(({data}) => {
        console.log(data);
        commit('setSearchedProducts', data.products)
    })
}
export function addToCart({commit}, product){
    commit('addToCart', product)
}

export function removeFromCart({commit}, item){
    commit('removeFromCart', item)
}

/*
function searchProducts() {
  products.value = computed(() => store.state.searchedProducts)
  store.dispatch('searchProducts', keyword.value)
} */