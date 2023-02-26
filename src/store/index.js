import { createStore } from 'vuex'
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import * as plugins from './plugins'

const store = createStore({
    state,
    actions,
    mutations,
    getters,
    plugins: [plugins.localStoragePlugin]
})

export default store;