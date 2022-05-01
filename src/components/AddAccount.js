import React from 'react';
import { connect } from 'react-redux';

import { addAccount} from "../actions";

class AddAccount extends React.Component {
    state = { name: '', initiative: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addAccount(this.state.name, this.state.initiative,this.props.stateList);
        this.setState({name:'',initiative:''});
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"
                           name="name" value={this.state.name}
                           onChange={(e) => this.setState({name: e.target.value})} />
                </div>

                <div className="form-group">
                    <label>Initiative</label>
                    <input type="text" className="form-control"
                           name="initiative" value={this.state.initiative}
                           onChange={(e) => this.setState({initiative: e.target.value})} />
                </div>
                <input type="submit" className="btn btn-success" value={'Add'} />

            </form>
        )
    }
}

export default connect(null, {addAccount})(AddAccount);
