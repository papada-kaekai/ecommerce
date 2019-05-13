import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
  Box 
} from 'grommet'
import CheckoutForm from '../components/CheckoutForm';

class CheckoutPage extends Component {

    state = {
      
    }

    onSubmit = (values) => {
        console.log(values)
    }

    render() {
        const { items } = this.props.cart
        return (
            <Box 
                direction='row'
                pad='small'
            >
               <Box width='medium'>
                    cart items
                </Box>
                <Box flex>
                    <CheckoutForm onSubmit={(values) => this.onSubmit(values)} />
                </Box>
              { 
                  
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
const mapDispatchToProps = dispatch => {
  return {
      cartAction: dispatch.cart
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)