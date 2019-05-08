import React, { Component } from 'react'
import { connect } from 'react-redux'

import { DropButton, Box, Stack } from 'grommet'
import { Shop } from 'grommet-icons'

import CartItemList from './CartItemList'

class ShoppingCartButton extends Component {

    componentDidMount() {
        const {
            cartID,
        } = this.props.cart
        const {
            getItems,
        } = this.props.cartAction

        getItems({cartID})
    }

    render() {
        const {
            items,
        } = this.props.cart

        return (
            <DropButton
                dropAlign={{
                    top: 'bottom',
                    right: 'right'
                }}
                dropContent={
                    <Box>
                        <CartItemList />
                    </Box>
                }
            >
                <Stack
                    anchor="top-right"
                >
                    <Box pad='xsmall'>
                        <Shop size="32px"/>
                    </Box>
                    <Box
                        background="accent-1"
                        pad={{horizontal: 'xsmall'}}
                        round
                    >
                        {items.length}
                    </Box>
                </Stack>
            </DropButton>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        cartAction: dispatch.cart
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartButton)