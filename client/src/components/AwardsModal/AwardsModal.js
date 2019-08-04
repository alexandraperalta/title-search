import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './AwardsModal.css'

export default class AwardsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal: false, name: '' };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        const people = this.props;
        return (
            <div>
                <Button className="peopleButton" color="warning" onClick={this.toggle}>{people.name}</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Actors
                        <Button className="float-right" color="danger" onClick={this.toggle} close />

                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="text-muted">{people.participants.map(actor => (
                                <div>
                                    {actor.Name} - ({actor.RoleType})
                                </div>
                            ))}
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.toggle}>Exit</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

