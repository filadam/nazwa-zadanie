import React from "react";

class Select extends React.Component {
    state = {
        selected: ''
    }

    handleSubmit() {
        this.props.sendSelected(this.state.selected)
    }

    handleChange = (event) => {
        this.setState({
            selected: event.target.value
        }, this.handleSubmit)
    }

    render() {
        return (
            <div className="d-flex flex-row py-2">
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                        onChange={this.handleChange.bind(this)}
                        checked={this.state.selected !== 'option2' ? true : false}
                    />
                    <label
                        className="form-check-label"
                    >
                        Klient indywidualny
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                        onChange={this.handleChange.bind(this)}
                    />
                    <label
                        className="form-check-label"
                    >
                        Firma
                    </label>
                </div>
            </div>
        )
    }

}

export default Select;