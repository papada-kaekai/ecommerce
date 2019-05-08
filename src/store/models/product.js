import request from '../../utils/request'
import { 
    isEmptyString 
} from '../../utils/common';

export const product = {
    state: {
        products: [],
        keyword: '',
    },
    reducers: {
        setProductValue(state, payload, name) {
            return {
              ...state,
              [name]: payload
            }
        },
    },
    effects: (dispatch) => ({
        async getProducts(payload, rootState) {
            const search = isEmptyString(payload.keyword) ? '' : `&filter=like(name,*${payload.keyword}*)`
            const include = '&include=main_image'
            const resp = await request.get(`/products?page[offset]=0&page[limit]=10${include}${search}`)
            const products = resp.data.data.map(item => { 
                let image = 'https://via.placeholder.com/400x400.png'
                if (item.relationships.main_image) {
                    const fileId = item.relationships.main_image.data.id
                    const file = resp.data.included.main_images.find(function(el) {
                      return fileId === el.id;
                    });
                    image = file.link.href
                }
                return {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    image: image,
                    price: item.meta.display_price.with_tax.formatted,
                }
            })
            dispatch.product.setProductValue(products, 'products')
        },
    })
}