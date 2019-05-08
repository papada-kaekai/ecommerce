import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Switch 
} from "react-router-dom";

import { 
    Grommet, 
    Box 
} from 'grommet'

import AppBar from './components/AppBar'

import ProductListPage from './pages/ProductListPage'
import CheckoutPage from './pages/CheckoutPage'
import NotFoundPage from './pages/NotFoundPage'

import './App.css'

class App extends Component {

    render() {
        return (
            <Router>
                <Grommet plain full>
                    <Box direction="column" fill>
                        <AppBar />
                        <Switch>
                            <Route path="/" component={ProductListPage} exact />
                            <Route path="/checkout" component={CheckoutPage} exact />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </Box>
                </Grommet>
            </Router>
        )
    }
}

export default App;
