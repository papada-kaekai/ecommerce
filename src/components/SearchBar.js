import React, { Component } from 'react'
import { 
    Box, 
    FormField, 
    TextInput, 
    Button
} from 'grommet'

class SearchBar extends Component
{
    
    render() {  
        const { keyword, hangleInputChange, onSearch } = this.props
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
                        onChange={(event) => hangleInputChange(event)}
                    />
                </FormField>
                <Button
                    label='Search'
                    onClick={() => onSearch(keyword)}
                />
            </Box>
        )
    }
}

export default SearchBar