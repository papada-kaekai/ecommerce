import React, { Component } from 'react';
import request from './utils/request'
import { 
    Grommet, 
    Box 
} from 'grommet'
import AppBar from './components/AppBar'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import './App.css'

class App extends Component {

    state = {
        products: [],
        keyword: ''
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.keyword !== this.state.keyword) {
            this.fetchData(this.state.keyword)
        }
    }

    isEmpty = (str) => {
        return (!str || 0 === str.length);
    }

    hangleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    fetchData = async (keyword) => {
        const search = this.isEmpty(keyword) ? '' : '&filter=like(name,*' + keyword +'*)'
        const resp = await request.get('/products?page[offset]=0&page[limit]=10' + search)
        const products = resp.data.data.map(item => {
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                image: 'https://via.placeholder.com/300x400.png',
                price: item.meta.display_price.with_tax.formatted,
            }
        })
        this.setState({
            products,
        })
    }

    render() {
        const { products, keyword } = this.state
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
                            <SearchBar 
                                products = {products}
                                keyword = {keyword}
                                hangleInputChange = {this.hangleInputChange}
                                onSearch = {this.fetchData}
                            />
                        </Box>
                        <Box flex>
                            <ProductList 
                                products = {products}
                            />
                        </Box>
                    </Box>
                </Box>
            </Grommet>
        )
    }
}

export default App;
