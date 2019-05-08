import React, { Component } from 'react'

import {  
    Box 
} from 'grommet'

import SearchBar from '../components/SearchBar'
import ProductList from '../components/ProductList'

export default class ProductListPage extends Component {
  render() {
    return (
        <Box
            direction='row'
            pad='medium'
            fill
        >
            <Box width='medium'>
                <SearchBar />
            </Box>
            <Box flex>
                <ProductList />
            </Box>
        </Box>
    )
  }
}
