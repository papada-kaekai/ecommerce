import React, { Component } from 'react'

import { 
    Layer, 
    Box, 
    Button
} from 'grommet'

export default class PaymentModel extends Component {
  render() {
      const { setShow } = this.props
        return (
        <Layer
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
        >
            <Box pad='medium'>
                <Box pad='small'>
                    <Button primary label='Pay Now' onClick={() => this.payNow()}></Button>
                </Box>
                <Box pad='small'>
                    <Button primary label='Cash on delivery' onClick={() => this.cod()}></Button>
                </Box>
            </Box>
        </Layer>
        )
    }
}
