import React from "react";
import Provinces from "./provinces";
import Select from "./select"

class Form extends React.Component {

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
        clicked: false
    }

    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className='container d-flex justify-content-center'>
                <div className='col-10 p-5'>
                    <form className='d-flex flex-column' onSubmit={this.handleSubmit.bind(this)}>
                        <Select
                            sendSelected={this.selectedData = (val) => { this.setState({ selected: val }) }}
                        />
                        <span className="input-text">{this.state.selected === 'option1' ? 'Imię i nazwisko' : 'Nazwa firmy'}</span>
                        <div className="input-group py-2">
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} className="form-control" />
                        </div>
                        <div className="d-flex flex-row">
                            <div className="col-8 pe-2">
                                <span className="input-text">Ulica</span>
                                <div className="input-group py-2">
                                    <input type="text" name="street" onChange={this.handleChange.bind(this)} className="form-control" />
                                </div>
                            </div>
                            <div className="col">
                                <span className="input-text">Nr domu</span>
                                <div className="input-group py-2">
                                    <input type="text" name="number" onChange={this.handleChange.bind(this)} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="col-8 pe-2">
                                <span className="input-text">Miejscowość</span>
                                <div className="input-group py-2">
                                    <input type="text" name="place" onChange={this.handleChange.bind(this)} className="form-control" />
                                </div>
                            </div>
                            <div className="col">
                                <span className="input-text">Kod pocztowy</span>
                                <div className="input-group py-2">
                                    <input type="text" name="zip" onChange={this.handleChange.bind(this)} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <Provinces
                            sendData={this.provinceData = (val) => { this.setState({ value: val }); }}
                            checkClicked={this.clickedData = (val) => { this.setState({ clicked: val }) }}
                        />
                        <div className="d-flex flex-row">
                            <div className="col-4 pe-2">
                                <span className="input-text">Telefon</span>
                                <div className="input-group py-2">
                                    <input type="text" name="phone" onChange={this.handleChange.bind(this)} className="form-control" />
                                </div>
                            </div>
                            <div className="col">
                                <span className="input-text">Kod pocztowy</span>
                                <div className="input-group py-2">
                                    <input type="text" name="phone2" onChange={this.handleChange.bind(this)} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <span className="input-text">Email</span>
                        <div className="input-group py-2">
                            <input type="text" name="email" onChange={this.handleChange.bind(this)} className="form-control" />
                        </div>
                        <span className="input-text">{this.state.selected === 'option1' ? 'PESEL' : 'NIP'}</span>
                        <div className="input-group py-2">
                            <input type="text" name="pesel" onChange={this.handleChange.bind(this)} className="form-control" />
                        </div>
                        <input
                            className='align-self-end'
                            type="submit" value="Zapisz"
                            disabled={this.state.clicked ? false : true}
                        />
                    </form>
                </div>
            </div>
        )
    }
}


export default Form;