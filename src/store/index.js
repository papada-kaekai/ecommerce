import { init } from '@rematch/core'
import { product } from './models/product'
import { cart } from './models/cart'

const store = init({
    models: {
        product,
        cart,
    }
})

export default store