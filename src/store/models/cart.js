import request from '../../utils/request'

export const cart = {
    state: {
        itemsCart: [],
        cartID: 1234,
        totalPrice: 0,
    },
    reducers: {
        setCartValue(state, payload, name) {
            return {
                ...state,
                [name]: payload
            }
        },
        setTotalPrice(state, payload) {
            return {
                ...state,
                totalPrice: payload
            }
        },
    },
    effects: (dispatch) => ({
        async getItemsCart(payload, rootState) {
            const resp = await request.get(`/carts/${payload.cartID}/items`)
            const items = resp.data.data.map(item => { 
                return {
                    id: item.id,
                    productID: item.product_id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.meta.display_price.with_tax.formatted,
                }
            })
            dispatch.cart.setCartValue(items, 'itemsCart')
        },
        async addItemCart(payload, rootState) {
            let data = {}
            data['data'] = {
                type: 'cart_item',
                id: payload.productID,
                quantity: payload.quantity,
            }
            const resp = await request.post(`/carts/${payload.cartID}/items`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const items = resp.data.data.map(item => { 
                return {
                    id: item.id,
                    productID: item.product_id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.meta.display_price.with_tax.formatted,
                }
            })
            dispatch.cart.setCartValue(items, 'itemsCart')
        },
        async updateItemCart(payload, rootState) {
            let data = {}
            data['data'] = {
                type: 'cart_item',
                id: payload.productID,
                quantity: payload.quantity + payload.item.quantity,
            }
            const resp = await request.put(`/carts/${payload.cartID}/items/${payload.item.id}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const items = resp.data.data.map(item => { 
                return {
                    id: item.id,
                    productID: item.product_id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.meta.display_price.with_tax.formatted,
                }
            })
            dispatch.cart.setCartValue(items, 'itemsCart')
        },
    })
}