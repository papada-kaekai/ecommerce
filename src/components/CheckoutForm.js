import React, { Component } from 'react'

import { 
    Box, 
    Form, 
    Heading, 
    FormField, 
    Stack ,
    Button
} from 'grommet'

import { handleInputChange } from '../utils/common'

export default class CheckoutForm extends Component {

    state = {
        name: '',
        email: '',
        first_name: '',
        last_name: '',
        company_name: '',
        phone_number: '',
        line_1: '',
        line_2: '',
        city: '',
        postcode: '',
        county: '',
        country: '',
        instructions: '',
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Form onSubmit={(values) => this.props.onSubmit(this.state)}>
                <Box>
                    <Heading level={3}>Your Info</Heading>

                    <FormField  name="name" label="Name" onChange={(e) => this.handleInputChange(e)} />
                    <FormField  name="email" label="Email" onChange={(e) => this.handleInputChange(e)} />
                </Box>
                <Box>
                    <Heading level={3}>Shippimg Address</Heading>

                    <FormField  name="first_name" label="First Name" onChange={(e) => this.handleInputChange(e)} />
                    <FormField  name="last_name" label="Last Name" onChange={(e) => this.handleInputChange(e)} />
                    <FormField  name="company_name" label="Company Name" onChange={(e) => this.handleInputChange(e)} />
                    <FormField  name="phone_number" label="Phone Number" onChange={(e) => this.handleInputChange(e)} />
                    <FormField  name="line_1" label="Address 1" onChange={(e) => this.handleInputChange(e)} />
                    <FormField  name="line_2" label="Address 2" onChange={(e) => this.handleInputChange(e)} />
                    <FormField  name="city" label="City" onChange={(e) => this.handleInputChange(e)} />
                    <FormField  name="postcode" label="Postcode" onChange={(e) => this.handleInputChange(e)} />
                    <FormField  name="country" label="Country" onChange={(e) => this.handleInputChange(e)} />
                    <FormField  name="instructions" label="Instructions" onChange={(e) => this.handleInputChange(e)} />
                </Box>
                <Box>
                    <Button primary type="submit" label="Checkout" ></Button>
                </Box>
            </Form>
        )
    }

}
