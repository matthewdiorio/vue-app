import axiosClient from '../axiosClient'
export function searchProducts({ commit }, keyword){
    axiosClient.get(`/products/search?q=${keyword}`)
    .then(({data}) => {
        console.log(data)
        debugger;
        commit('setSearchedProducts', data.products)
    })
}