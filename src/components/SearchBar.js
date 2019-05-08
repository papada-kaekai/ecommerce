import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    handleInputChange 
} from '../utils/common';

import { 
    Box, 
    FormField, 
    TextInput, 
    Button
} from 'grommet'

class SearchBar extends Component
{
    render() {  
        const { 
            keyword, 
        } = this.props.product
        
        const { 
            setProductValue, 
            getProducts,
        } = this.props.productAction

        return (
            <Box
                direction='column'
                basis='medium'
                pad='small'
            >
                <FormField label='Name'>
                    <TextInput 
                        name='keyword'
                        placeholder='Search'
                        onChange={(event) => handleInputChange(event, setProductValue)}
                    />
                </FormField>
                <Button
                    label='Search'
                    onClick={() => getProducts({keyword})}
                />
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = dispatch => {
    return {
        productAction: dispatch.product
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)