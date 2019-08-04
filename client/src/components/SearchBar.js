import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Input, Col, Label } from 'reactstrap';

class SearchBar extends Component {
    state = {
        userInput: '',
        movie: "",
        genre: '',
        person: ''
    }
    handleInputChange = e => {
        const {name,  value } = e.target
        this.setState({
            [name]: value
        });
        console.log(this.state)
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
                        <Input name="movie" value={this.state.movie} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Genre</Label>
                        <Input name="genre" value={this.state.genre} onChange={this.handleInputChange}/>
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