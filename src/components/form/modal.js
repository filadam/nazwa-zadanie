import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalWindow({ show, onHide, onClose, formProps }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Twoje dane:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-row">
                    <div class="col">
                        <p>Imię i nazwisko:</p>
                    </div>
                    <div class="col">
                        {formProps.name}
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div class="col">
                        <p>Adres:</p>
                    </div>
                    <div class="col">
                        {formProps.street + formProps.number}
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div class="col">
                        <p>Adres cd.:</p>
                    </div>
                    <div class="col">
                        {formProps.province.charAt(0).toUpperCase() + formProps.province.slice(1) + ", " + formProps.place + " " + formProps.postal}
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div class="col">
                        <p>Telefon:</p>
                    </div>
                    <div class="col">
                        {formProps.phone}
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div class="col">
                        <p>E-mail:</p>
                    </div>
                    <div class="col">
                        {formProps.email}
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div class="col">
                        <p>{formProps.pesel === '' ? 'Nip: ' : 'Pesel: '} </p>
                    </div>
                    <div class="col">
                        {formProps.pesel === '' ? formProps.nip : formProps.pesel}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Wyślij</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalWindow;