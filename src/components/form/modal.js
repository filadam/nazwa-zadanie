import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalWindow({ show, onHide, onClose, formProps }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Twoje dane:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Imię i nazwisko: {formProps.name}</p>
                <p>Adres: {formProps.street + formProps.number}</p>
                <p>Adres #2: {formProps.value.charAt(0).toUpperCase() + formProps.value.slice(1) + ", " + formProps.place + " " + formProps.zip}</p>
                <p>Telefon: {formProps.phone + formProps.phone2}</p>
                <p>Email: {formProps.email}</p>
                <p>{formProps.pesel === '' ? 'Nip: ' : 'Pesel: '} {formProps.pesel === '' ? formProps.nip : formProps.pesel}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalWindow;