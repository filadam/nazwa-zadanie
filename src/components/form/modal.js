import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalWindow({ show, onHide, onClose, formProps }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title><h1>Twoje dane:</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-row">
                    <div class="col">
                        <p>Imię i nazwisko:</p>
                    </div>
                    <div class="col">
                        <p>{formProps.name}</p>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div class="col">
                        <p>Adres:</p>
                    </div>
                    <div class="col">
                        <p>{formProps.street + formProps.number}</p>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div class="col">
                        <p>Adres cd.:</p>
                    </div>
                    <div class="col">
                        <p>{formProps.province.charAt(0).toUpperCase() + formProps.province.slice(1) + ", " + formProps.place + " " + formProps.postal}</p>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div class="col">
                        <p>Telefon:</p>
                    </div>
                    <div class="col">
                        <p>{formProps.phone}</p>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div class="col">
                        <p>E-mail:</p>
                    </div>
                    <div class="col">
                        <p>{formProps.email}</p>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div class="col">
                        <p>{formProps.pesel === '' ? 'Nip:' : 'Pesel:'}</p>
                    </div>
                    <div class="col">
                        <p>{formProps.pesel === '' ? formProps.nip : formProps.pesel}</p>
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