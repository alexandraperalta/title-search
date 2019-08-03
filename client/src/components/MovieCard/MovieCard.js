import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardFooter, CardSubtitle, CardText, Collapse, Button } from 'reactstrap'

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
                <CardBody>
                    <CardTitle>{movie.title}{' ('}{movie.year}{') '}</CardTitle>
                    <Button color="primary" onClick={this.toggle}>View details</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <CardText className="text-muted">Genre: {movie.genres.join(', ')}</CardText>
                        <CardSubtitle>Starring/Directing:</CardSubtitle>
                        <CardText>{this.props.actors.map(actor => (
                            ` ${actor.Name} (${actor.RoleType}) |`
                        ))}
                        </CardText>
                        <CardSubtitle>Plot:</CardSubtitle>
                        <CardText>{movie.story}</CardText>
                    </Collapse>

                </CardBody>
            </Card>

        )
    }
}

export default MovieCard;