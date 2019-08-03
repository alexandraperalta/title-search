import React, { Component } from 'react';
import { Container, Row, Col, Modal, ModalBody } from 'reactstrap';
import API from '../utils/API';
import SearchBar from '../components/SearchBar';
import ResultsContainer from '../containers/ResultsContainer';

class LandingPage extends Component {

    state = {
        results: []
    }


    handleSearch = (userInput) => {
        API.getTitles(userInput)
            .then(res => {
                this.setState({
                    results: res.data
                });
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="mt-3">
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <SearchBar handleSearch={this.handleSearch} />
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <ResultsContainer results={this.state.results}  />
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default LandingPage;