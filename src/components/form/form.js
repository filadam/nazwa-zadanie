import React from "react";
import Provinces from "./provinces";

class Form extends React.Component {

    state = {
        value: '',
        clicked: false
    }

    handleSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className='container d-flex justify-content-center'>
                <div className='col-8 p-5'>
                    <form className='d-flex flex-column' onSubmit={this.handleSubmit.bind(this)}>
                        <Provinces
                            sendData={this.provinceData = (val) => { this.setState({ value: val }); }}
                            checkClicked={this.clickedData = (val) => { this.setState({ clicked: val }) }}
                        />
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