import React from "react";
import Provinces from "./provinces";
import Select from "./select"
import ModalWindow from "./modal"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'react-phone-number-input/style.css'

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
        phone2: '',
        email: '',
        pesel: '',
        nip: '',
        clicked: false,
        show: false,
        validated: false,
    }

    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value
        })
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
        console.log(form.checkValidity())
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
            phone2: this.state.phone2,
            email: this.state.email,
            pesel: this.state.pesel,
            nip: this.state.nip,
        }
        return (
            <div className='container d-flex justify-content-center'>
                <div className='col-10 p-5'>

                    <Form className='d-flex flex-column' noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}>
                        <Select
                            sendSelected={this.selectedData = (val) => { this.setState({ selected: val, pesel: '', nip: '' }) }}
                        />
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <FloatingLabel
                                controlId="floatingInput"
                                label={this.state.selected === 'option1' ? 'Imię i nazwisko' : 'Nazwa firmy'}
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    value={this.state.name}
                                    name="name"
                                    placeholder={this.state.selected === 'option1' ? 'Imię i nazwisko' : 'Nazwa firmy'}
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
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
                                            required
                                        />
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
                                    type="tel"
                                    value={this.state.phone}
                                    name="phone"
                                    placeholder="Nr. Telefonu"
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
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
                                            type="text"
                                            placeholder="Wprowadź PESEL"
                                            name="pesel"
                                            onChange={this.handleChange.bind(this)}
                                            value={this.state.pesel}
                                            required
                                        />
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
                                            type="text"
                                            placeholder="Wprowadź NIP"
                                            name="nip"
                                            onChange={this.handleChange.bind(this)}
                                            value={this.state.nip}
                                            required
                                        />
                                    </FloatingLabel>
                                </>
                            }
                        </Form.Group>
                        <Button
                            className='align-self-end'
                            type="submit"
                            value="Zapisz"
                            disabled={this.state.clicked ? false : true}
                        >
                            Zapisz
                        </Button>
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