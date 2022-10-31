import React from "react";
import './form.scss';
import Provinces from "./provinces";
import Select from "./select"
import ModalWindow from "./modal"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { postalCodeAutoFormat } from './utils/index'

class FormPage extends React.Component {

    state = {
        selected: 'option1',
        name: '',
        street: '',
        number: '',
        place: '',
        zip: '',
        value: '',
        phone: '',
        email: '',
        pesel: '',
        nip: '',
        clicked: false,
        show: false,
        validated: false,
    }

    handleErase() {
        delete this.state.value
        this.setState({
            selected: 'option1',
            name: '',
            street: '',
            number: '',
            place: '',
            zip: '',
            value: '',
            phone: '',
            email: '',
            pesel: '',
            nip: '',
            clicked: false,
            show: false,
            validated: false,
        })
        console.log(this.state)
    }

    handleChange(event) {
        const pushToState = (value) => {
            this.setState({
                ...this.state,
                [event.target.name]: value
            })
        }
        switch (event.target.name) {
            case "zip":
                const value = postalCodeAutoFormat(event.target.value)
                pushToState(value)
                break;
            default: {
                const value = event.target.value;
                pushToState(value)
                break;
            }
        }
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            this.setState({
                show: true
            })
        }
        this.setState({
            validated: true
        });
    }

    handleClose() {
        this.setState({
            show: false
        })
    }
    render() {
        const multipleProps = {
            name: this.state.name,
            street: this.state.street,
            number: this.state.number,
            place: this.state.place,
            zip: this.state.zip,
            value: this.state.value,
            phone: this.state.phone,
            email: this.state.email,
            pesel: this.state.pesel,
            nip: this.state.nip,
        }
        return (
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className="form-wrapper">
                    <h1>Siemanko!</h1>
                    <p>Oto formularz rejestracyjny zrobiony na potrzeby zadania technicznego dla nazwa.pl!</p>
                    <Form className='d-flex flex-column form' noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}>
                        <Select
                            sendSelected={this.selectedData = (val) => { this.setState({ selected: val, pesel: '', nip: '' }) }}
                        />
                        <Form.Group className="" controlId="formBasicPhone">
                            <FloatingLabel
                                controlId="floatingInput"
                                label={this.state.selected === 'option1' ? 'Imię i nazwisko' : 'Nazwa firmy'}
                                className="pb-3"
                            >
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    value={this.state.name}
                                    name="name"
                                    placeholder={this.state.selected === 'option1' ? 'Imię i nazwisko' : 'Nazwa firmy'}
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Wpisz imię i nazwisko
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <div className="d-flex flex-row">
                            <div className="col-8 pe-2">
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Ulica"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            value={this.state.street}
                                            name="street"
                                            placeholder="Ulica"
                                            onChange={this.handleChange.bind(this)}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Wpisz ulicę
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Nr. domu"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            value={this.state.number}
                                            name="number"
                                            placeholder="Nr. domu"
                                            onChange={this.handleChange.bind(this)}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Wpisz nr. domu
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="col-8 pe-2">
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Miejscowość"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            value={this.state.place}
                                            name="place"
                                            placeholder="Miejscowość"
                                            onChange={this.handleChange.bind(this)}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Wpisz nazwę miejscowości
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Kod pocztowy"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            value={this.state.zip}
                                            name="zip"
                                            placeholder="Kod pocztowy"
                                            onChange={this.handleChange.bind(this)}
                                            minLength="6"
                                            maxLength="6"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Wpisz poprawny kod pocztowy (5 cyfr)
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>
                            </div>
                        </div>
                        <Provinces
                            sendData={this.provinceData = (val) => { this.setState({ value: val }); }}
                            checkClicked={this.clickedData = (val) => { this.setState({ clicked: val }) }}
                        />
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nr. Telefonu"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    value={this.state.phone}
                                    name="phone"
                                    placeholder="Nr. Telefonu"
                                    onChange={this.handleChange.bind(this)}
                                    minLength="9"
                                    maxLength="12"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Wpisz poprawny numer telefonu
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Adres e-mail"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Wprowadź email"
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Wpisz poprawny adres e-mail (W formacie example@mail.com)
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {this.state.selected === 'option1'
                                ?
                                <>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="PESEL"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="tel"
                                            placeholder="Wprowadź PESEL"
                                            name="pesel"
                                            onChange={this.handleChange.bind(this)}
                                            value={this.state.pesel}
                                            minLength="11"
                                            maxLength="11"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Wpisz poprawny numer PESEL (12 cyfr)
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </>
                                :
                                <>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="NIP"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="tel"
                                            placeholder="Wprowadź NIP"
                                            name="nip"
                                            onChange={this.handleChange.bind(this)}
                                            value={this.state.nip}
                                            minLength="10"
                                            maxLength="10"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Wpisz poprawny numer NIP (10 cyfr)
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </>
                            }
                        </Form.Group>
                        <div className="d-flex flex-row justify-content-end">
                            <Button
                                variant="danger"
                                className='me-2'
                                onClick={this.handleErase.bind(this)}
                            >
                                Wyczyść
                            </Button>
                            <Button
                                type="submit"
                                value="Zapisz"
                            // disabled={this.state.clicked ? false : true}
                            >
                                Zapisz
                            </Button>
                        </div>
                        <ModalWindow
                            show={this.state.show}
                            onHide={this.handleClose.bind(this)}
                            onClose={this.handleClose.bind(this)}
                            formProps={multipleProps}
                        />
                    </Form>

                </div >
            </div >
        )
    }
}


export default FormPage;