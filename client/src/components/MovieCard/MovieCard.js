import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardFooter, CardSubtitle, CardText, Collapse, Button } from 'reactstrap'
import './Movie.css';

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
            <Card>
                <CardBody className='clickableTitle' onClick={this.toggle}>
                    <CardTitle >{movie.title}{' ('}{movie.year}{') '}</CardTitle>
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
        )
    }
}

export default MovieCard;