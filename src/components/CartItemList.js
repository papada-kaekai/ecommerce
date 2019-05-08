import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Box } from 'grommet'

class CartItemList extends Component {

    render() {
        const {
            items,
        } = this.props.cart

        return (
            <Box 
                pad="small"
            >
                {
                    items.map(item => (
                        <Box 
                            pad="small"
                        >
                            {item.name} x {item.quantity}
                        </Box>
                    ))
                }
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}
export default connect(mapStateToProps)(CartItemList)