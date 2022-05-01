import React from 'react';
import { connect } from 'react-redux';

class AccountList extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>Account List</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: state.accounts.players,
        enemies: state.accounts.enemies
    }
};


export default connect(mapStateToProps)(AccountList);