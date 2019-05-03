import React, { Component } from 'react'
import { 
    Box
} from 'grommet'

import ProductItem from './ProductItem'

class ProductList extends Component
{
    
    render() {
        const { products } = this.props
        return (
            <Box
                direction='column'
                pad='small'
                fill
            >
                <Box pad='small' background='light-3'>
                    Product List
                </Box>
                <Box
                    pad='small'
                    direction='row'
                    fill
                    wrap
                    overflow='auto'
                >
                    {
                        products && products.length > 0 &&
                        products.map((product) => (
                            <ProductItem 
                                {...product}
                            />
                        ))
                    }
                </Box>
            </Box>
        )
    }
}

export default ProductList