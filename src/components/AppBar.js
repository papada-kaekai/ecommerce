import React, { Component } from 'react'

import { Box, Heading } from 'grommet'

import ShoppingCartButton from './ShoppingCartButton'

class AppBar extends Component
{
    render() {
        return (
            <Box
                tag='header'
                direction='row'
                align='center'
                justify='between'
                background='brand'
                pad={{ 
                    left: 'medium', 
                    right: 'small',
                    vertical: 'small'
                }}
                elevation='medium'
                style={{ 
                    zIndex: '1'
                }}
            >
                <Heading
                    level='4'
                    margin='xsmall'
                >
                    Modern Store
                </Heading>
                <Box>
                    <ShoppingCartButton />
                </Box>
            </Box>
        )
    }
}

export default AppBar