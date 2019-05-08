import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { 
    DropButton, 
    Box, 
    Stack, 
    Button 
} from 'grommet'
import { Shop } from 'grommet-icons'

import CartItemList from './CartItemList'

class ShoppingCartButton extends Component {

    componentDidMount() {
        const { cartID } = this.props.cart
        const { getItemsCart } = this.props.cartAction

        getItemsCart({cartID})
    }

    render() {
        const { itemsCart } = this.props.cart

        return (
            <DropButton
                dropAlign={{
                    top: 'bottom',
                    right: 'right'
                }}
                dropContent={
                    <Box>
                        <CartItemList />
                        <Link to='/checkout'>
                            <Button primary alignSelf='center'>Checkout</Button>
                        </Link>
                    </Box>
                }
            >
                <Stack
                    anchor='top-right'
                >
                    <Box pad='xsmall'>
                        <Shop size='32px'/>
                    </Box>
                    <Box
                        background='accent-1'
                        pad={{horizontal: 'xsmall'}}
                        round
                    >
                        {itemsCart.length}
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