import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardFooter, CardSubtitle, CardText, Collapse, Button, Row, Col } from 'reactstrap'
import './Movie.css';
import AwardsModal from '../AwardsModal';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        const movie = this.props
        return (
            <Row>
                <Col xs='10'>
                    <Card>
                        <CardBody className='clickableTitle' onClick={this.toggle}>
                            <CardTitle ><div>
                                {movie.title}{' ('}{movie.year}{') '}
                            </div></CardTitle>
                            <Collapse isOpen={this.state.collapse}>
                                <CardText className="text-muted">Genre: {movie.genres.join(', ')}</CardText>
                                <CardSubtitle>Plot:</CardSubtitle>
                                <CardText>{movie.story}</CardText>
                                <CardSubtitle>Starring:</CardSubtitle>
                                <CardText className="text-muted">{movie.actors.map(actor => (
                                    ` ${actor.Name} (${actor.RoleType}) |`
                                ))}
                                </CardText>
                            </Collapse>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs='2'>
                <AwardsModal
                        participants={[...movie.actors.filter(part => (part.RoleType == "Actor" && part.IsOnScreen == true))]}
                        name = "Actors On Screen"
                        key = {movie.id}
                    />
                    <AwardsModal
                        participants={[...movie.staff.filter(part => (part.RoleType != "Actor"))]}                      
                        name = "Staff"                        
                        key = {movie.id}
                    />
                
                </Col>
            </Row>

        )
    }
}



export default MovieCard;