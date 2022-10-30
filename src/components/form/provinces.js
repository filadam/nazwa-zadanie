import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

class Provinces extends React.Component {
    state = {
        provinces: [],
        clicked: false
    }

    componentDidMount() {
        fetch('https://dro.nazwa.pl/api/public/')
            .then((response) => response.json())
            .then(provinceList => {
                this.setState({ provinces: provinceList });
            })
    }

    handleSubmit() {
        this.props.sendData(this.state.value)
        this.props.checkClicked(this.state.clicked)
    }

    handleClick = () => {
        this.setState({
            clicked: true
        })
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            key: event.target.key,
        }, this.handleSubmit);
    }

    render() {
        return (
            <>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Województwo"
                        className="mb-3"
                    >
                        <Form.Select
                            onChange={this.handleChange.bind(this)}
                            onClick={this.handleClick.bind(this)}
                            required
                        >
                            <option value="" style={{ display: "none" }}></option>
                            {this.state.provinces.map((province, i) => (
                                <option key={i} value={province}>{province}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
            </>
        )
    }

}

export default Provinces;