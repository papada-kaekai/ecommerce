import React, { Component } from 'react'
import { DropButton, Box, Stack } from 'grommet';
import { Shop } from 'grommet-icons'
import { connect } from 'react-redux';

class ShoppingCartButton extends Component {
    render() {
        return (
        <DropButton
            dropAlign={{
                top: 'bottom',
                right: 'right'
            }}
            dropContent={
                <Box>Cart product list</Box>
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
                    {0}
                </Box>
            </Stack>
        </DropButton>
        )
    }
}

const mapStateToProps = state => {
    return {
    //   cartLength: state.cart.cartItems.length
    }
}

export default connect(mapStateToProps)(ShoppingCartButton)