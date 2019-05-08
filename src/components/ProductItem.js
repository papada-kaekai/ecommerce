import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    Box, 
    Image, 
    Heading, 
    Text, 
    Stack ,
    Button
} from 'grommet'
import { Shop } from 'grommet-icons'

class ProductItem extends Component
{

    handleAddToCart = (productID, cartID) => {
        const { items } = this.props.cart
        const { getItems, addItem, updateItem } = this.props.cartAction
        getItems({cartID})

        const item = items.find(o => o.productID === productID)
        if(!item) {
            const payload = {
                cartID,
                productID,
                quantity: 1,
            }
            addItem(payload)
        } else {
            const payload = {
                cartID,
                productID,
                quantity: 1,
                item: item,
            }
            updateItem(payload)
        }
    }
    
    render() {  
        const { 
            id, 
            name, 
            description, 
            image, 
            price
        } = this.props

        const { 
            cartID, 
        } = this.props.cart

        return (
            <Box
                direction='column'
                basis='medium'
                pad='small'
            >
                <Box>
                    <Stack
                        fill
                        anchor='top-right'
                    >
                        <Box
                            height='small'
                        >
                            <Image 
                                fit='cover' 
                                src={image} 
                            />
                        </Box>
                        <Box
                            background='brand'
                            pad='xsmall'
                        >
                            <Text>{price}</Text>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Heading
                        textAlign='center'
                        level={4}
                        margin={{
                            vertical: 'xsmall'
                        }}
                    >
                        {name}
                    </Heading>
                    <Text
                        textAlign='center'
                    >
                        {description}
                    </Text>
                    <Button primary pad="small" margin="small" icon={<Shop />} label="Add to cart" onClick={() => this.handleAddToCart(id, cartID)}/>
                </Box>
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        cartAction: dispatch.cart
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)