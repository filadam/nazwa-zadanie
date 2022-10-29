import React from 'react';

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
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Województwo</span>
                <select className='form-select' onChange={this.handleChange.bind(this)} onClick={this.handleClick.bind(this)}>
                    <option value="" style={{ display: "none" }}></option>
                    {this.state.provinces.map((province, i) => (
                        <option key={i} value={province}>{province}</option>
                    ))}
                </select>
            </div>
        )
    }

}

export default Provinces;