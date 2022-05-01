import React from 'react';
import { connect } from 'react-redux';

const TotalList = ({ accounts }) => {
    accounts = accounts.sort((a,b) => {
        return b.initiative - a.initiative;
    });
    //console.log({accounts})

        let accountRecords = accounts.map(char => {
            return (
                <li key={char.id}
                    className="list-group-item d-flex justify-content-between align-items-center">
                    {char.name}
                    <span className="badge badge-primary" style={{color: "gray"}}>{ char.initiative }</span>

            </li>
        );
        });


    return (
            <ul className="list-group">
                { accountRecords }
            </ul>
    );
};
const mapStatetoProps = state => {
    return{
        accounts: state.accounts.accounts
    }
};

export default connect(mapStatetoProps)(TotalList);