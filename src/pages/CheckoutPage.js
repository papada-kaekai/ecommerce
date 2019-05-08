import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
  Box 
} from 'grommet'

class CheckoutPage extends Component {
  render() {
    const { items } = this.props.cart
    console.log(items)
    return (
      <Box 
        direction='row'
        pad='small'
      >
        <Box width='medium'>
          cart items
        </Box>
        <Box flex>
          form
        </Box>
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