import React from 'react';
import { connect } from 'react-redux';

//curly braces to export just one action
import { removePlayer } from '../actions';

class AccountList extends React.Component {

    renderList() {
        let accountArr = this.props[this.props.stateList];
        //console.log({accountArr});

            return accountArr.map(char => {
                return (
                    <li className="list-group-item" key={char.id}>
                        { char.name } - {char.initiative}
                        <button type='button'
                                onClick={() => { this.props.removePlayer(char) }}
                                className="btn btn-danger"
                                style={{ float: 'right' }}>
                            delete
                        </button>


                    </li>
                );
            });

    }

    render() {
        //console.log(this.props);
        let accountList = this.renderList();
        //console.log(accountList);

        return (
            //add card here
            <div className="card" style={{ padding: '10px' }}>
                <h3>{this.props.title}</h3>
                <ul className="list-group" style={{ marginTop: '15px' }}>
                    { accountList }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: state.accounts.players,
        enemies: state.accounts.enemies
    }
};


export default connect(mapStateToProps, { removePlayer })(AccountList);