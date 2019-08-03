import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, Col, CardText } from 'reactstrap'

class SearchBar extends Component {
    state = {
        userInput: ''
    }


    handleInputChange = e => {
        const { value } = e.target
        this.setState({
            userInput: value
        });
    };

    handleClick = e => {
        e.preventDefault()
        this.props.handleSearch(this.state)
    };

    render() {
        return (
            <Card>
                <CardBody>
                <CardTitle>Movie Search</CardTitle>
                <Form>
                    <FormGroup>
                        <Input name="title" value={this.state.userInput} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup className="mt-2" row>
                        <Col sm={{ size: 12 }}>
                            <Button onClick={this.handleClick}>Search</Button>
                        </Col>
                    </FormGroup>
                </Form>
                </CardBody>
            </Card>
        )
    }
}

export default SearchBar;