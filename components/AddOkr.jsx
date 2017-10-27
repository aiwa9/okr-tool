import React, { Component, PropTypes } from 'react'

export default class AddOkr extends Component {
    constructor(props) {
        super(props);
        this.state = {okrInput:''};
    }

    onChange(e) {
        //this.setState({okrInput: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({okrInput: ''});
    }

    render() {
        const { okrInput } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    My OKR: <input value={this.state.okrInput} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}