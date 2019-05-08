import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    Box
} from 'grommet'

import ProductItem from './ProductItem'

class ProductList extends Component
{

    componentDidMount() {
        const { 
            getProducts 
        } = this.props.productAction
        
        getProducts({})
    }
    
    render() {
        const { 
            products 
        } = this.props.product
        
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

const mapStateToProps = state => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = dispatch => {
    return {
        productAction: dispatch.product
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)