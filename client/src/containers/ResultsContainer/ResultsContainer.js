import React, { Component } from 'react';
import { Card, CardBody, CardText, Row, Col } from 'reactstrap'
import MovieCard from '../../components/MovieCard'
import AwardsModal from '../../components/AwardsModal'

class ResultsContainer extends Component {

    render() {
        console.log(this.props.results)
        const results = this.props.results;
        return (
            <Card>
                <CardBody>
                    <Row >
                        <Col>
                            {results.length > 0
                                ?
                                results.map(movie => (
                                    <MovieCard
                                        key={movie._id}
                                        id={movie.TitleId}
                                        title={movie.TitleName}
                                        genres={movie.Genres}
                                        awards={movie.Awards}
                                        story={movie.Storylines[0].Description}
                                        actors={[...movie.Participants.filter(part => (part.RoleType == "Actor" && part.IsOnScreen == true))]}
                                        staff={[...movie.Participants.filter(part => (part.RoleType != "Actor"))]}
                                        participants={[...movie.Participants]}
                                        year={movie.ReleaseYear}
                                    />
                                )
                                ) : (
                                    <CardText>Search above to get results.</CardText>
                                )}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default ResultsContainer;