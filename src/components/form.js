import React from "react";
import Select from 'react-select';
import {Cities, Period} from '../cities'

    
class Form extends React.Component {
    render() {

        return (
            <form onSubmit={this.props.weatherMethod}>
                <Select options={Cities} name="city"/>
                <Select options={Period} name="period"/>
                <button>Ok</button>
            </form>
        );
    }
}


export default Form;