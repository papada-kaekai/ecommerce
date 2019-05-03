import React, { Component } from 'react';
// import request from './utils/request'
import { 
    Grommet, 
    Box 
} from 'grommet'
import AppBar from './components/AppBar'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import './App.css'

class App extends Component {

    render() {
        return (
            <Grommet plain full>
                <Box direction="column" fill>
                    <AppBar />
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
                </Box>
            </Grommet>
        )
    }
}

export default App;
